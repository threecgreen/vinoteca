/// Custom deserializers to trim leading and trailing whitespace from strings.
use serde::{Deserialize, Deserializer};

#[allow(dead_code)]
pub fn trim_str<'de, D>(deserializer: D) -> Result<&'de str, D::Error>
where
    D: Deserializer<'de>,
{
    let s: &str = Deserialize::deserialize(deserializer)?;
    Ok(s.trim())
}

pub fn trim_string<'de, D>(deserializer: D) -> Result<String, D::Error>
where
    D: Deserializer<'de>,
{
    let s: String = Deserialize::deserialize(deserializer)?;
    Ok(s.trim().to_owned())
}

pub fn trim_opt_string<'de, D>(deserializer: D) -> Result<Option<String>, D::Error>
where
    D: Deserializer<'de>,
{
    let s: Option<String> = Deserialize::deserialize(deserializer)?;
    Ok(s.and_then(|s| {
        let trimmed_s = s.trim().to_owned();
        if trimmed_s.is_empty() {
            None
        } else {
            Some(trimmed_s)
        }
    }))
}

#[cfg(test)]
mod test {
    use super::*;

    use serde::de::value::{BorrowedStrDeserializer, Error, StringDeserializer};
    use serde::de::IntoDeserializer;

    #[test]
    fn trim_str_untouched() {
        let test_str = "quick brown fox";
        let deserializer = BorrowedStrDeserializer::<Error>::new(&test_str);
        assert_eq!(trim_str(deserializer), Ok(test_str));
    }

    #[test]
    fn trim_str_all_spaces() {
        let spaces = " ";
        let deserializer = BorrowedStrDeserializer::<Error>::new(spaces);
        assert_eq!(trim_str(deserializer), Ok(""));
    }

    #[test]
    fn trim_str_leading_and_trailing() {
        let deserializer = BorrowedStrDeserializer::<Error>::new("  the Quick brown fox  ");
        assert_eq!(trim_str(deserializer), Ok("the Quick brown fox"));
    }

    #[test]
    fn trim_string_untouched() {
        let test_string = "quick brown fox".to_owned();
        let deserializer: StringDeserializer<Error> = test_string.clone().into_deserializer();
        assert_eq!(trim_string(deserializer), Ok(test_string));
    }

    #[test]
    fn trim_string_all_spaces() {
        let deserializer: StringDeserializer<Error> = "    ".to_owned().into_deserializer();
        assert_eq!(trim_string(deserializer), Ok("".to_owned()));
    }

    #[test]
    fn trim_string_leading_and_trailing() {
        let deserializer: StringDeserializer<Error> =
            "  the Quick brown fox  ".to_owned().into_deserializer();
        assert_eq!(
            trim_string(deserializer),
            Ok("the Quick brown fox".to_owned())
        );
    }

    #[test]
    #[ignore]
    fn trim_opt_only_spaces_to_none() {
        // let deserializer = serde_json::de::Deserializer::from_str(r#""   ""#);
        // let deserializer = Some("   ".to_owned()).into_deserializer();
        // assert_eq!(trim_opt_string(deserializer), Ok(None));
    }
}
