use chrono::{DateTime, Utc};
use rocket::handler::{Handler, HandlerFuture, Outcome};
use rocket::http::{uncased::Uncased, uri::Segments, ContentType, Header, Method, Status};
use rocket::response::{self, Responder, Response};
use rocket::tokio::fs::{self, File};
use rocket::tokio::io;
use rocket::{Data, Request, Route};
use std::borrow::Cow;
use std::boxed::Box;
use std::ops::{Deref, DerefMut};
use std::path::{Path, PathBuf};

#[derive(Debug, Clone, PartialEq)]
pub struct NotModified<R>(pub R);

/// Sets the status code of the response to 304 Not Modified.
#[rocket::async_trait]
impl<'r, R: Responder<'r> + Send> Responder<'r> for NotModified<R> {
    async fn respond_to(self, _req: &'r Request<'_>) -> Result<Response<'r>, Status> {
        Response::build().status(Status::NotModified).ok()
    }
}

#[derive(Debug)]
/// A file that we want to avoid reserving by setting the last-modified header
pub struct CachedFile(PathBuf, File);

impl CachedFile {
    /// Attempts to open a file in read-only mode.
    pub async fn open(path: impl AsRef<Path>) -> io::Result<CachedFile> {
        let file = File::open(path.as_ref()).await?;
        Ok(CachedFile(path.as_ref().to_path_buf(), file))
    }
}

/// Streams the named file to the client. Sets or overrides the Content-Type in
/// the response according to the file's extension if the extension is
/// recognized.
#[rocket::async_trait]
impl<'r> Responder<'r> for CachedFile {
    async fn respond_to(self, req: &'r Request<'_>) -> response::Result<'r> {
        let mut response = self.1.respond_to(req).await?;
        if let Some(ext) = self.0.extension() {
            if let Some(ct) = ContentType::from_extension(&ext.to_string_lossy()) {
                response.set_header(ct);
            }
        }
        let epoch: DateTime<Utc> = {
            let metadata = fs::metadata(&self.0.as_path()).await.unwrap();
            metadata
                .modified()
                // TODO: failure here?
                .unwrap()
                .into()
        };
        response.set_header(Header {
            name: Uncased::new("Last-Modified"),
            value: Cow::from(epoch.to_rfc2822()),
        });

        if req.headers().contains("If-Modified-Since") {
            if let Some(if_modified_since) = req.headers().get_one("If-Modified-Since") {
                if let Ok(if_modified_since) = DateTime::parse_from_rfc2822(if_modified_since) {
                    if epoch <= if_modified_since {
                        return NotModified("Not Modified").respond_to(req).await;
                    }
                }
            }
        }
        Ok(response)
    }
}

impl Deref for CachedFile {
    type Target = File;

    fn deref(&self) -> &File {
        &self.1
    }
}

impl DerefMut for CachedFile {
    fn deref_mut(&mut self) -> &mut File {
        &mut self.1
    }
}

/// Modified version of `rocket_contrib::serve::StaticFiles` that sets last
/// modified time and caching
#[derive(Clone)]
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

impl Into<Vec<Route>> for CachedStaticFiles {
    fn into(self) -> Vec<Route> {
        let non_index = Route::ranked(self.rank, Method::Get, "/<path..>", self);
        vec![non_index]
    }
}

impl Handler for CachedStaticFiles {
    fn handle<'r>(&self, req: &'r Request<'_>, data: Data) -> HandlerFuture<'r> {
        // If this is not the route with segments, handle it only if the user
        // requested a handling of index files.
        let current_route = req.route().expect("route while handling");
        let is_segments_route = current_route.uri.path().ends_with('>');
        if !is_segments_route {
            return Box::pin(async move { Outcome::forward(data) });
        }

        let path = req
            .get_segments::<Segments<'_>>(0)
            .and_then(|res| res.ok())
            .and_then(|segments| segments.into_path_buf(false).ok())
            .map(|path| self.root.join(path));

        Box::pin(async move {
            match &path {
                Some(path) if path.is_dir() => Outcome::forward(data),
                Some(path) => Outcome::from(req, CachedFile::open(path).await.ok()).await,
                None => Outcome::forward(data),
            }
        })
    }
}
