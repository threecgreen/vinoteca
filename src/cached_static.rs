use std::borrow::Cow;
use std::path::{Path, PathBuf};

use chrono::{DateTime, Utc};
use rocket::http::{uncased::Uncased, ContentType, Header, Method, Status};
use rocket::response::{self, Responder, Response};
use rocket::route::Outcome;
use rocket::tokio::fs::{self, File};
use rocket::tokio::io;
use rocket::{
    http::hyper::header::{CACHE_CONTROL, CONTENT_ENCODING},
    route::Handler,
};
use rocket::{Data, Request, Route};

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct NotModified<R>(pub R);

/// Sets the status code of the response to 304 Not Modified.
impl<'r, 'o: 'r, R: Responder<'r, 'o>> Responder<'r, 'o> for NotModified<R> {
    fn respond_to(self, _req: &Request) -> Result<Response<'o>, Status> {
        Response::build().status(Status::NotModified).ok()
    }
}

#[derive(Debug)]
/// A file that we want to avoid reserving by setting the last-modified header
pub struct CachedFile {
    path: PathBuf,
    file: File,
    last_modified: DateTime<Utc>,
}

impl CachedFile {
    /// Attempts to open a file in read-only mode.
    pub async fn open(path: impl Into<PathBuf>) -> io::Result<CachedFile> {
        let path = path.into();
        let file = File::open(&path).await?;
        let last_modified: DateTime<Utc> = {
            let metadata = fs::metadata(&path).await.unwrap();
            metadata.modified().unwrap().into()
        };
        Ok(CachedFile {
            path,
            file,
            last_modified,
        })
    }
}

/// Streams the named file to the client. Sets or overrides the Content-Type in
/// the response according to the file's extension if the extension is
/// recognized.
impl<'r, 'o: 'r> Responder<'r, 'o> for CachedFile {
    fn respond_to(self, req: &'r Request<'_>) -> response::Result<'o> {
        let mut response = self.file.respond_to(req)?;
        if let Some(ext) = self.path.extension() {
            if ext == "gz" {
                if let Some(content_type) = self
                    .path
                    .file_stem()
                    .and_then(|stem| {
                        let stem_path = PathBuf::from(stem);
                        stem_path.extension().map(|x| x.to_owned())
                    })
                    .and_then(|inner_ext| ContentType::from_extension(&inner_ext.to_string_lossy()))
                {
                    // Support for gzipped code, e.g. js or css
                    response.set_header(content_type);
                    response.set_raw_header(CONTENT_ENCODING.to_string(), "gzip");
                } else {
                    response.set_header(ContentType::new("application", "gzip"));
                }
            }
            // Normal content type detection
            else if let Some(content_type) = ContentType::from_extension(&ext.to_string_lossy()) {
                response.set_header(content_type);
            }
        }
        response.set_header(Header {
            name: Uncased::new("Last-Modified"),
            value: Cow::from(self.last_modified.to_rfc2822()),
        });
        // User agent must revalidate. This is especially important for JS bundles
        response.set_raw_header(CACHE_CONTROL.to_string(), "no-cache");

        if req.headers().contains("If-Modified-Since") {
            if let Some(if_modified_since) = req.headers().get_one("If-Modified-Since") {
                if let Ok(if_modified_since) = DateTime::parse_from_rfc2822(if_modified_since) {
                    if self.last_modified <= if_modified_since {
                        return NotModified("Not Modified").respond_to(req);
                    }
                }
            }
        }
        Ok(response)
    }
}

/// Modified version of `rocket_contrib::serve::StaticFiles` that sets last
/// modified time and caching
#[derive(Debug, Clone)]
pub struct CachedStaticFiles {
    root: PathBuf,
    rank: isize,
}

impl CachedStaticFiles {
    const DEFAULT_RANK: isize = 10;

    pub fn new(path: impl AsRef<Path>, rank: isize) -> Self {
        CachedStaticFiles {
            root: path.as_ref().into(),
            rank,
        }
    }

    pub fn from(path: impl AsRef<Path>) -> Self {
        CachedStaticFiles::new(path, Self::DEFAULT_RANK)
    }

    pub fn rank(mut self, rank: isize) -> Self {
        self.rank = rank;
        self
    }
}

impl From<CachedStaticFiles> for Vec<Route> {
    fn from(files: CachedStaticFiles) -> Self {
        let non_index = Route::ranked(files.rank, Method::Get, "/<path..>", files);
        vec![non_index]
    }
}

#[rocket::async_trait]
impl Handler for CachedStaticFiles {
    async fn handle<'r>(&self, req: &'r Request<'_>, data: Data<'r>) -> Outcome<'r> {
        // If this is not the route with segments, handle it only if the user
        // requested a handling of index files.
        let current_route = req.route().expect("route while handling");
        let is_segments_route = current_route.uri.path().ends_with('>');
        if !is_segments_route {
            return Outcome::forward(data, Status::Ok);
        };
        let path = req
            .routed_segments(0..)
            .to_path_buf(false /* allow dotfiles */)
            .ok()
            .map(|pb| self.root.join(pb));
        match path {
            Some(path) if path.is_dir() => Outcome::forward(data, Status::Ok),
            Some(path) if path.exists() => {
                let gz_path = PathBuf::from(&format!("{}.gz", path.to_string_lossy()));
                let accept_encoding: Option<std::collections::HashSet<String>> = req
                    .headers()
                    .get_one("Accept-Encoding")
                    .map(|s| s.split(',').map(|t| t.trim().to_owned()).collect());
                if gz_path.exists()
                    && accept_encoding
                        .map(|enc| enc.contains("gzip"))
                        .unwrap_or(false)
                {
                    // TODO: make CachedGzFile struct
                    Outcome::from(req, CachedFile::open(gz_path).await.ok())
                } else {
                    Outcome::from(req, CachedFile::open(path).await.ok())
                }
            }
            Some(path) => {
                warn!(
                    "Request received for static file that doesn't exist at path {:?}. Root: {:?}",
                    path, self.root
                );
                Outcome::error(Status::NotFound)
            }
            None => Outcome::forward(data, Status::BadRequest),
        }
    }
}
