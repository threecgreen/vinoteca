r"""Assorted functions used accross vinoteca. Many are database related or deal
with parsing POST requests."""
import sqlite3
from datetime import date, datetime
from pathlib import Path
from typing import List, Type, Union

import attr
from dateutil.relativedelta import relativedelta

from vinoteca.models import (
    Colors, Regions, Grapes, Producers, Purchases, Stores, VitiAreas,
    WineGrapes, Wines, WineTypes
)
from vinoteca.settings import BASE_DIR


class TableColumnHeader(object):
    name = attr.ib(type=str)
    is_num_col = attr.ib(default=False)


def g_or_c_store(store: str) -> Union[Stores, None]:
    r"""Get or create a Stores object."""
    # TODO: error handling
    if store is None:
        return
    try:
        return Stores.objects.get(name=store)
    except Stores.DoesNotExist:
        new_store = Stores(name=store)
        new_store.save()
        return new_store


def g_or_c_wine_type(wine_type: str) -> Union[WineTypes, None]:
    r"""Get or create a WineTypes object."""
    if wine_type is None:
        return
    try:
        return WineTypes.objects.get(name=wine_type)
    except WineTypes.DoesNotExist:
        new_wine_type = WineTypes(name=wine_type)
        new_wine_type.save()
        return new_wine_type


def g_or_c_region(region: str) -> Union[Regions, None]:
    r"""Get or create a Regions object."""
    if region is None:
        return
    try:
        return Regions.objects.get(name=region)
    except Regions.DoesNotExist:
        region = Regions(name=region, is_us=False)
        region.save()
        return region


def g_or_c_producer(producer: str, region: Regions) -> Producers:
    r"""Get or create a Producers object."""
    try:
        return Producers.objects.get(name=producer)
    except Producers.DoesNotExist:
        new_producer = Producers(name=producer, region=region)
        new_producer.save()
        return new_producer


def g_or_c_viti_area(viti_area: str, region: Regions) -> Union[VitiAreas, None]:
    r"""Get or create a VitiAreas object."""
    if viti_area is None:
        return
    try:
        return VitiAreas.objects.get(name=viti_area, region=region)
    except VitiAreas.DoesNotExist:
        new_viti_area = VitiAreas(name=viti_area, region=region)
        new_viti_area.save()
        return new_viti_area


def c_or_u_wine_grapes(wine: Wines, grape: str, percent: Union[int, None]) -> bool:
    r"""Get or create a WineGrapes object."""
    if grape is None:
        return False
    try:
        grape = Grapes.objects.get(name=grape)
    except Grapes.DoesNotExist:
        grape = Grapes(name=grape)
        grape.save()
    try:
        wine_grape = WineGrapes.objects.get(wine=wine, grape=grape)
    except WineGrapes.DoesNotExist:
        wine_grape = WineGrapes(wine=wine, grape=grape, percent=percent)
        ret_val = True
    else:
        # update percent for extant winegrape
        wine_grape.percent = percent
        ret_val = False
    wine_grape.save()
    return ret_val


# pylint: disable=too-many-arguments
def c_wine(desc: Union[str], notes: Union[str], name: Union[str], prod: Producers,
           wine_type: WineTypes, color: Colors, rating: Union[float],
           inventory: int, viti_area: VitiAreas, why: Union[str]) -> Wines:
    r"""Create a Wines object."""
    new_wine = Wines(description=desc, notes=notes, name=name, producer=prod,
                     wine_type=wine_type, color=color, rating=rating,
                     inventory=inventory, viti_area=viti_area, why=why)
    new_wine.save()
    return new_wine


# pylint: disable=too-many-arguments
def c_purchase(wine: Wines, store: Stores, price: float, memo: str,
               purchase_date: str, vintage: int, quantity: int) -> None:
    r"""Create a Purchases object."""
    # Convert date str to int YYYYMMDD
    purchase_date = date_str_to_int(purchase_date)
    new_purchase = Purchases(store=store, wine=wine, price=price, memo=memo, date=purchase_date,
                             vintage=vintage, quantity=quantity)
    new_purchase.save()


def empty_to_none(item: str, type_: Type = None) -> Union["type_", str]:
    r"""Shorthand for `a if a else None`. Common line when parsing data from
    POST requests. Optional `type` argument will convert the string to that type
    if the string is not empty, useful for numbers."""
    if type_:
        return type_(item) if item else None
    return item if item else None


def get_connection() -> sqlite3.Connection:
    r"""Get a SQLite database connection."""
    return sqlite3.connect(str(Path(BASE_DIR) / "data" / "wine.db"))


def date_str_to_int(date_str: str) -> Union[int]:
    r"""Convert date string of format "Day Month, Year" (the format Materialize
    CSS date selector uses) to an int of format "YYYYMMDD"."""
    if date_str:
        return int(datetime.strptime(date_str, "%d %B, %Y").strftime("%Y%m%d"))


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


def handle_grapes(request, wine) -> None:
    r"""Create Grape and WineGrapes objects for a new wine or when a wine has
    been edited."""
    if request.POST.get("grape-1"):
        for i in range(1, 6):
            grape = empty_to_none(request.POST.get(f"grape-{i}"))
            percent = empty_to_none(request.POST.get(f"grape-{i}-pct"), int)
            if grape and (percent is None or 0 < percent <= 100):
                c_or_u_wine_grapes(wine, grape, percent)
            else:
                # No more grapes
                break
