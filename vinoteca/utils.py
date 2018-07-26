import os
import sqlite3
from datetime import date, datetime
from dateutil.relativedelta import relativedelta
from pathlib import Path
from PIL import Image
from typing import Any, List, Union
from vinoteca.models import (Colors, Regions, Grapes, Producers, Purchases, Stores,
                             VitiAreas, WineGrapes, WineTypes, Wines)
from vinoteca.settings import BASE_DIR


def g_or_c_store(store: str) -> Union[Stores, None]:
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
    # TODO: error handling
    if wine_type is None:
        return
    try:
        return WineTypes.objects.get(name=wine_type)
    except WineTypes.DoesNotExist:
        new_wine_type = WineTypes(name=wine_type)
        new_wine_type.save()
        return new_wine_type


def g_or_c_region(region: str) -> Union[Regions, None]:
    # TODO: error handling
    if region is None:
        return
    try:
        return Regions.objects.get(name=region)
    except Regions.DoesNotExist:
        region = Regions(name=region, is_us=False)
        region.save()
        return region


def g_or_c_producer(producer: str, region: Regions) -> Producers:
    # TODO: error handling
    try:
        return Producers.objects.get(name=producer)
    except Producers.DoesNotExist:
        new_producer = Producers(name=producer, region=region)
        new_producer.save()
        return new_producer


def g_or_c_viti_area(viti_area: str, region: Regions) -> Union[VitiAreas, None]:
    # TODO: error handling
    if viti_area is None:
        return
    try:
        return VitiAreas.objects.get(name=viti_area, region=region)
    except VitiAreas.DoesNotExist:
        new_viti_area = VitiAreas(name=viti_area, region=region)
        new_viti_area.save()
        return new_viti_area


def c_or_u_wine_grapes(wine: Wines, grape: str, percent: Union[int, None]) -> bool:
    # TODO: error handling
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


def c_wine(desc: Union[str], notes: Union[str], name: Union[str], prod: Producers,
           wine_type: WineTypes, color: Colors, rating: Union[float],
           inventory: int, viti_area: VitiAreas, why: Union[str]) -> Wines:
    new_wine = Wines(description=desc, notes=notes, name=name, producer=prod,
                     wine_type=wine_type, color=color, rating=rating,
                     inventory=inventory, viti_area=viti_area, why=why)
    new_wine.save()
    return new_wine


def c_purchase(wine: Wines, store: Stores, price: float, memo: str, purchase_date: str, vintage: int,
               quantity: int) -> None:
    # Convert date str to int YYYYMMDD
    purchase_date = date_str_to_int(purchase_date)
    new_purchase = Purchases(store=store, wine=wine, price=price, memo=memo, date=purchase_date,
                             vintage=vintage, quantity=quantity)
    new_purchase.save()


def empty_to_none(item: Any) -> Union[Any]:
    return item if item else None


def get_connection() -> sqlite3.Connection:
    return sqlite3.connect(str(Path(BASE_DIR) / "data" / "wine.db"))


def date_str_to_int(date_str: str) -> Union[int]:
    if date_str:
        return int(datetime.strptime(date_str, "%d %B, %Y").strftime("%Y%m%d"))


def int_to_date(yyyymmdd: int) -> Union[date]:
    if yyyymmdd:
        return date(year=yyyymmdd // 10000, month=yyyymmdd % 10000 // 100,
                    day=yyyymmdd % 100)


def flag_exists(region_name: str) -> bool:
    return (Path(BASE_DIR) / "vinoteca" / "static" / "img" / "flags"
            / f"{region_name}.svg").is_file()


def get_region_flags() -> List[str]:
    img_glob = (Path(BASE_DIR) / "vinoteca" / "static" / "img" / "flags").glob("*.svg")
    return [flag_file.stem for flag_file in list(img_glob)]


def default_vintage_year() -> int:
    return (datetime.now() - relativedelta(years=2)).year


def convert_to_png(in_file: Union[str, Path]) -> bool:
    file_name, ext = os.path.splitext(in_file)
    out_file = file_name + ".png"
    # Given that previously every file has been saved with a PNG extension
    # regardless of actual format, probably best to convert all to PNG for good
    # measure.
    try:
        Image.open(in_file).save(out_file)
    except IOError:
        return False
    return True
