import sqlite3
from datetime import date, datetime
from dateutil.relativedelta import relativedelta
from django.db import IntegrityError
from pathlib import Path
from typing import Any, List, Union
from vinoteca.models import (Colors, Countries, Grapes, Producers,
    Purchases, Stores, VitiAreas, WineGrapes, WineTypes, Wines)
from vinoteca.settings import BASE_DIR


def g_or_c_store(store: str) -> Union[Stores, None]:
    if store is None:
        return
    try:
        return Stores.objects.get(name=store)
    except Stores.DoesNotExist:
        new_store = Stores(name=store)
        new_store.save()
        return new_store


def g_or_c_wine_type(wine_type: str) -> Union[WineTypes, None]:
    if wine_type is None:
        return
    try:
        return WineTypes.objects.get(type_name=wine_type)
    except WineTypes.DoesNotExist:
        new_wine_type = WineTypes(type_name=wine_type)
        new_wine_type.save()
        return new_wine_type


def g_or_c_country(country: str) -> Union[Countries, None]:
    if country is None:
        return
    try:
        return Countries.objects.get(name=country)
    except Countries.DoesNotExist:
        new_country = Countries(name=country, is_us=False)
        new_country.save()
        return new_country


def g_or_c_producer(producer: str, country: Countries) -> Producers:
    try:
        return Producers.objects.get(name=producer)
    except Producers.DoesNotExist:
        new_producer = Producers(name=producer, country=country)
        new_producer.save()
        return new_producer


def g_or_c_viti_area(viti_area: str, country: Countries) -> Union[VitiAreas, None]:
    if viti_area is None:
        return
    try:
        return VitiAreas.objects.get(name=viti_area, region=country)
    except VitiAreas.DoesNotExist:
        new_viti_area = VitiAreas(name=viti_area, region=country)
        new_viti_area.save()
        return new_viti_area


def c_or_u_wine_grapes(wine: Wines, grape: str, percent: Union[int, None]) -> bool:
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
           inventory: int, viti_area: VitiAreas) -> Wines:
    new_wine = Wines(description=desc, notes=notes, name=name, producer=prod,
                     wine_type=wine_type, color=color, rating=rating,
                     inventory=inventory, viti_area=viti_area)
    new_wine.save()
    return new_wine


def c_purchase(wine: Wines, store: Stores, price: float, why: str, purchase_date: str, vintage: int,
               quantity: int) -> None:
    # Convert date str to int YYYYMMDD
    purchase_date = date_str_to_int(purchase_date)
    new_purchase = Purchases(store=store, wine=wine, price=price, why=why, date=purchase_date,
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


def flag_exists(country_name: str) -> bool:
    return (Path(BASE_DIR) / "vinoteca" / "static" / "img" / "flags"
            / f"{country_name}.svg").is_file()


def get_flag_countries() -> List[str]:
    img_glob = (Path(BASE_DIR) / "vinoteca" / "static" / "img" / "flags").glob("*.svg")
    return [country_file.stem for country_file in list(img_glob)]


def default_vintage_year() -> int:
    return (datetime.now() - relativedelta(years=2)).year
