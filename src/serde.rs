use serde::{Deserialize, Deserializer};

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
    Ok(s.map(|s| s.trim().to_owned()))
}
