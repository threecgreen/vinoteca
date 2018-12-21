"""Contains the configuration manager class which handles the setting of where
certain data will be. Currently it supports setting the database location,
the media folder location (i.e. where Wine images are stored) and the log file
location."""
import logging
from pathlib import Path

import yaml


LOGGER = logging.getLogger(__name__)


class ConfigurationManager(object):
    r"""Manages machine-specific configurations set by the user that can't be
    stored in the database."""
    def __init__(self, path: Path, database_path: Path, media_folder_path: Path,
                 log_path: Path):
        self.database_path = str(database_path)
        self.media_folder_path = str(media_folder_path)
        self.log_path = str(log_path)
        LOGGER.debug(f"Default configurations: {self}")
        if Path(path).exists():
            self._load_or_default(path)

    def __repr__(self):
        return (f"<ConfigurationManager(database_path={self.database_path},"
                f" media_folder_path={self.media_folder_path})>")

    def _load_or_default(self, path: Path):
        with open(path, "r") as fin:
            LOGGER.debug(f"Loaded configuration file at path '{path}'")
            config = yaml.load(fin.read())
            # Iterate through attributes and set them
            for setting, _ in self.__dict__.items():
                val = config.get(setting, "")
                LOGGER.debug(f"For setting '{setting}' found configuration '{val}'")
                if val and Path(val).expanduser().exists():
                    setattr(self, setting, val.expanduser().resolve())
