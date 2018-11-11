r"""Module containing utilities for manipulating and storing user-uploaded
image files."""
# pylint: disable=protected-access
import os
from pathlib import Path
from typing import Union

from PIL import Image, ExifTags


class UserImage(object):
    r"""Object containing a loaded Pillow image and contains functions used
    for standardizing images to PNG and fixing rotation issues."""
    def __init__(self, in_file: Union[str, Path]) -> bool:
        self.file_name, _ = os.path.splitext(in_file)
        try:
            self.image = Image.open(in_file)
        except IOError:
            print("IOError opening the image file for editing.")
            print(in_file)
            self.image = None

    def save(self) -> bool:
        r"""Saves the file."""
        out_file = self.file_name + ".png"
        try:
            self.image.save(out_file)
        except IOError:
            print("IOError opening the image file for saving.")
            return False
        return True

    def convert_to_png(self) -> bool:
        r"""Converts the image to PNG and saves it. If it is a JPG, will properly
        rotate the photo before saving."""
        if self.image is not None:
            orientation = None
            for tag, val in ExifTags.TAGS.items():
                if val == "Orientation":
                    orientation = tag
                    break
            if orientation is not None and hasattr(self.image, "_getexif") \
                    and  self.image._getexif() is not None:
                exif = dict(self.image._getexif().items())
                if exif[orientation] == 3:
                    image = self.image.rotate(180, expand=True)
                elif exif[orientation] == 6:
                    image = image.rotate(270, expand=True)
                elif exif[orientation] == 8:
                    image = image.rotate(90, expand=True)
            return True
        return False

    def rotate(self, degrees: int) -> bool:
        r"""Rotates a given image. Intended for PNG files with incorrect rotation
        and lost EXIF data."""
        if self.image is not None:
            self.image = self.image.rotate(degrees)
            return self.save()
        return False
