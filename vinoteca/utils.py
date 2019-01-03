r"""Assorted functions used accross vinoteca. Many are database related or deal
with parsing POST requests."""
import logging
import sqlite3
from datetime import date, datetime
from pathlib import Path
from typing import List, Type, Union

from dateutil.relativedelta import relativedelta

from vinoteca.models import (
    Colors, Regions, Grapes, Producers, Purchases, Stores, VitiAreas,
    WineGrapes, Wines, WineTypes
)
from vinoteca.settings import BASE_DIR


LOGGER = logging.getLogger(__name__)


def strip_params(db_func):
    r"""Decorator function that strips all strings passed as arguments to that
    function."""
    def _strip_params(*args, **kwargs):
        new_args = []
        for arg in args:
            if isinstance(arg, str):
                arg = arg.strip()
            new_args.append(arg)
        new_kwargs = {}
        for kwarg_key, kwarg_val in kwargs.items():
            if isinstance(kwarg_val, str):
                kwarg_val = kwarg_val.strip()
            new_kwargs[kwarg_key] = kwarg_val
        return db_func(*new_args, **new_kwargs)
    return _strip_params


class TableColumn(object):
    r"""Simple class for creating table headers in django templates."""
    def __init__(self, name: str, placeholder="", num_col=False):
        self.name = name
        self.placeholder = placeholder
        self.num_col = num_col

    @classmethod
    def from_list(cls, col_list):
        output = []
        for col in col_list:
            if isinstance(col, cls):
                output.append(col)
            else:
                output.append(cls(col))
        return output


@strip_params
def g_or_c_store(store: str) -> Union[Stores, None]:
    r"""Get or create a Stores object."""
    LOGGER.debug(f"Getting or creating store with name '{store}'")
    if store is None:
        LOGGER.debug("No valid store provided, returning")
        return
    try:
        return Stores.objects.get(name=store)
    except Stores.DoesNotExist:
        LOGGER.debug("Store does not exist")
        LOGGER.info(f"Creating new store with name '{store}'")
        new_store = Stores(name=store)
        new_store.save()
        LOGGER.debug(f"Created new store with id {new_store.id}")
        return new_store


@strip_params
def g_or_c_wine_type(wine_type: str) -> Union[WineTypes, None]:
    r"""Get or create a WineTypes object."""
    LOGGER.debug(f"Getting or creating wine type with name '{wine_type}'")
    if wine_type is None:
        LOGGER.debug("No valid wine type provided, returning")
        return
    try:
        return WineTypes.objects.get(name=wine_type)
    except WineTypes.DoesNotExist:
        LOGGER.debug("Wine type does not exist")
        LOGGER.info(f"Creating new wine type with name '{wine_type}'")
        new_wine_type = WineTypes(name=wine_type)
        new_wine_type.save()
        LOGGER.debug(f"Created new wine type with id {new_wine_type.id}")
        return new_wine_type


@strip_params
def g_or_c_region(region: str) -> Union[Regions, None]:
    r"""Get or create a Regions object."""
    LOGGER.debug(f"Getting or creating region with name '{region}'")
    if region is None:
        LOGGER.debug("No valid region provided, returning")
        return
    try:
        return Regions.objects.get(name=region)
    except Regions.DoesNotExist:
        LOGGER.debug("Region does not exist")
        LOGGER.info(f"Creating new region with name '{region}'")
        region = Regions(name=region, is_us=False)
        region.save()
        LOGGER.debug(f"Created new region with id {region.id}")
        return region


@strip_params
def g_or_c_producer(producer: str, region: Regions) -> Producers:
    r"""Get or create a Producers object."""
    LOGGER.debug(f"Getting or creating producer with name '{producer}'")
    try:
        return Producers.objects.get(name=producer)
    except Producers.DoesNotExist:
        LOGGER.debug("Producer does not exist")
        LOGGER.info(f"Creating new producer with name '{producer}'")
        new_producer = Producers(name=producer, region=region)
        new_producer.save()
        LOGGER.debug(f"Created new producer with id {new_producer.id}")
        return new_producer


@strip_params
def g_or_c_viti_area(viti_area: str, region: Regions) -> Union[VitiAreas, None]:
    r"""Get or create a VitiAreas object."""
    LOGGER.debug(f"Getting or creating viti area with name '{viti_area}'")
    if viti_area is None:
        LOGGER.debug("No valid viti area provided, returning")
        return
    try:
        return VitiAreas.objects.get(name=viti_area, region=region)
    except VitiAreas.DoesNotExist:
        LOGGER.debug("Viti area does not exist")
        LOGGER.info(f"Creating new viti area with name '{viti_area}'")
        new_viti_area = VitiAreas(name=viti_area, region=region)
        new_viti_area.save()
        LOGGER.debug(f"Created new viti area with id {new_viti_area.id}")
        return new_viti_area


@strip_params
def c_or_u_wine_grapes(wine: Wines, grape: str, percent: Union[int, None]) -> bool:
    r"""Get or create a WineGrapes object."""
    LOGGER.debug("Creating wine grape and getting or creating grape with name "
                 f" '{grape}', for wine with id {wine.id}. This grape makes up "
                 f"{percent}% of the wine.")
    if grape is None:
        LOGGER.debug("No valid grape provided, returning")
        return False
    try:
        grape = Grapes.objects.get(name=grape)
    except Grapes.DoesNotExist:
        LOGGER.debug("Grape does not exist")
        LOGGER.info(f"Creating new grape with name '{grape}'")
        grape = Grapes(name=grape)
        LOGGER.debug(f"Created new grape with id {grape.id}")
        grape.save()
    try:
        wine_grape = WineGrapes.objects.get(wine=wine, grape=grape)
    except WineGrapes.DoesNotExist:
        LOGGER.debug("Wine grape does not exist")
        LOGGER.info(f"Creating new wine grape with wine id {wine.id} and grape "
                    f"'{grape.name}'")
        wine_grape = WineGrapes(wine=wine, grape=grape, percent=percent)
        ret_val = True
    else:
        LOGGER.info(f"Updating percent for wine grape with wine id {wine.id} "
                    f"and grape '{grape.name}' to {percent}%")
        # update percent for extant winegrape
        wine_grape.percent = percent
        ret_val = False
    wine_grape.save()
    LOGGER.debug(f"{'Created' if ret_val else 'Updated'} wine grape with wine id "
                 f"{wine.id} and name '{grape.name}'")
    return ret_val


# pylint: disable=too-many-arguments
@strip_params
def c_wine(desc: Union[str], notes: Union[str], name: Union[str], prod: Producers,
           wine_type: WineTypes, color: Colors, rating: Union[float],
           inventory: int, viti_area: VitiAreas, why: Union[str]) -> Wines:
    r"""Create a Wines object."""
    LOGGER.info("Creating new wine")
    new_wine = Wines(description=desc, notes=notes, name=name, producer=prod,
                     wine_type=wine_type, color=color, rating=rating,
                     inventory=inventory, viti_area=viti_area, why=why)
    LOGGER.debug(f"Saved new wine {new_wine}")
    new_wine.save()
    return new_wine


# pylint: disable=too-many-arguments
@strip_params
def c_purchase(wine: Wines, store: Stores, price: float, memo: str,
               purchase_date: str, vintage: int, quantity: int) -> None:
    r"""Create a Purchases object."""
    # Convert date str to int YYYYMMDD
    LOGGER.info(f"Creating new purchase for wine with id {wine.id}")
    purchase_date = date_str_to_int(purchase_date)
    new_purchase = Purchases(store=store, wine=wine, price=price, memo=memo, date=purchase_date,
                             vintage=vintage, quantity=quantity)
    LOGGER.debug(f"Saved new purchase {new_purchase}")
    new_purchase.save()


def empty_to_none(item: str, type_: Type = None) -> Union["type_", str]:
    r"""Originally shorthand for `a if a else None`. Now it also trims
    whitespace."""
    if item is None:
        return None
    if isinstance(item, str):
        item = item.strip()
    if type_ is not None:
        return type_(item) if item else None
    return item if item else None


def get_connection() -> sqlite3.Connection:
    r"""Get a SQLite database connection."""
    LOGGER.debug("Creating database connection")
    return sqlite3.connect(str(Path(BASE_DIR) / "data" / "wine.db"))


def date_str_to_int(date_str: str) -> Union[int]:
    r"""Convert date string of format "Day Month, Year" (the format Materialize
    CSS date selector uses) to an int of format "YYYYMMDD"."""
    if date_str:
        return int(datetime.strptime(date_str, "%b %d, %Y").strftime("%Y%m%d"))


def int_to_date(yyyymmdd: int) -> Union[date]:
    r"""Convert int of format "YYYYMMDD" to a Python datetime.date object."""
    if yyyymmdd:
        return date(year=yyyymmdd // 10000, month=yyyymmdd % 10000 // 100,
                    day=yyyymmdd % 100)


def flag_exists(region_name: str) -> bool:
    r"""Given a region name, indicates if a flag SVG file exists for the region."""
    return (Path(BASE_DIR) / "vinoteca" / "static" / "img" / "flags"
            / f"{region_name}.svg").is_file()


def get_region_flags() -> List[str]:
    r"""Returns a list of all regions with flag SVG files."""
    img_glob = (Path(BASE_DIR) / "vinoteca" / "static" / "img" / "flags").glob("*.svg")
    return [flag_file.stem for flag_file in list(img_glob)]


def default_vintage_year() -> int:
    r"""Returns the default vintage year, which is two years prior to the
    current year."""
    return (datetime.now() - relativedelta(years=2)).year
