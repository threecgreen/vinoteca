"""Contains the configuration manager class which handles the setting of where
certain data will be. Currently it supports setting the database location and
the media folder location (i.e. where Wine images are stored)."""
import json
from pathlib import Path


class ConfigurationManager(object):
    r"""Manages machine-specific configurations set by the user that can't be
    stored in the database."""
    def __init__(self, path: Path, database_path: Path, media_folder_path: Path):
        self.database_path = str(database_path)
        self.media_folder_path = str(media_folder_path)
        if Path(path).exists():
            self._load_or_default(path)

    def __repr__(self):
        return (f"<ConfigurationManager(database_path={self.database_path},"
                f" media_folder_path={self.media_folder_path})>")

    def _load_or_default(self, path: Path):
        with open(path, "r") as fin:
            config = json.loads(fin.read())
            # Iterate through attributes and set them
            # TODO: logging here!
            for setting, _ in self.__dict__.items():
                val = config.get(setting, "")
                if val and Path(val).exists():
                    setattr(self, setting, val)
