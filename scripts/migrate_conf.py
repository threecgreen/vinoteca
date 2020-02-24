from pathlib import Path

import yaml


class ConfigurationManager(object):
    r"""Manages machine-specific configurations set by the user that can't be
    stored in the database."""
    def __init__(self, path: Path, database_path: Path, media_path: Path,
                 log_path: Path):
        self.database_path = str(database_path)
        self.media_path = str(media_path)
        self.log_path = str(log_path)
        if Path(path).exists():
            self._load_or_default(path)

    def __repr__(self):
        return (f"<ConfigurationManager(database_path={self.database_path},"
                f" media_path={self.media_path}, log_path={self.log_path})>")

    def _load_or_default(self, path: Path):
        with open(path, "r") as fin:
            config = yaml.safe_load(fin.read())
            # Iterate through attributes and set them
            for setting, _ in self.__dict__.items():
                val = config.get(setting, "")
                if val and (Path(val).expanduser().exists()
                            or (Path(val).expanduser().parent.exists()
                                and setting == "log_path")):
                    setattr(self, setting, str(Path(val).expanduser().resolve()))
                else:
                    if val:
                        print(f"Invalid path set for {setting} with value '{val}'")

TOML_TEMPLATE = """[global]
media_dir = "{media_path}"
static_dir = "/usr/local/share/vinoteca"

[global.databases]
vinoteca = {{ url = "{database_path}" }}
"""

def main():
    path = Path(__file__).resolve().parent.parent / "vinoteca" / "config.yaml"
    config_man = ConfigurationManager(path, "", "", "")
    rocket_path = Path("/usr/local/Rocket.toml")
    with open(rocket_path, 'w') as fout:
        fout.write(TOML_TEMPLATE.format(media_path=config_man.media_path,
                                        database_path=config_man.database_path))

if __name__ == "__main__":
    main()
