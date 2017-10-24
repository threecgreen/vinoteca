import os
import sqlite3
from datetime import date, datetime
from django.core.exceptions import ObjectDoesNotExist
from typing import Union
from vinoteca.models import Additionals, Colors, Countries, Producers, Purchases, Stores, WineTypes, Wines
from vinoteca.settings import BASE_DIR


def g_or_c_store(store: str, address: Union[str]) -> Stores:
    try:
        return Stores.objects.get(name=store)
    except ObjectDoesNotExist:
        new_store = Stores(name=store, address=address)
        new_store.save()
        return new_store


def g_or_c_wine_type(wine_type: str) -> WineTypes:
    try:
        return WineTypes.objects.get(type_name=wine_type)
    except ObjectDoesNotExist:
        new_wine_type = WineTypes(type_name=wine_type)
        new_wine_type.save()
        return new_wine_type


def g_or_c_country(country: str) -> Countries:
    try:
        return Countries.objects.get(name=country)
    except ObjectDoesNotExist:
        new_country = Countries(name=country, is_us=False)
        new_country.save()
        return new_country


def g_or_c_producer(producer: str, country: Countries) -> Producers:
    try:
        return Producers.objects.get(name=producer)
    except ObjectDoesNotExist:
        new_producer = Producers(name=producer, country=country)
        new_producer.save()
        return new_producer


def g_or_c_additional(additional: str) -> Additionals:
    try:
        return Additionals.objects.get(additional=additional)
    except ObjectDoesNotExist:
        new_add = Additionals(additional=additional)
        new_add.save()
        return new_add


def c_wine(desc: Union[str], notes: Union[str], prod: Producers, wine_type: WineTypes, add: Additionals, color: Colors,
           rating: Union[float]) -> Wines:
    new_wine = Wines(description=desc, notes=notes, producer=prod, wine_type=wine_type, additional=add,
                     color=color, rating=rating)
    new_wine.save()
    return new_wine


def c_purchase(wine: Wines, store: Stores, price: float, why: str, purchase_date: str, vintage: int,
               quantity: int) -> None:
    # Convert date str to int YYYYMMDD
    purchase_date = date_str_to_int(purchase_date)
    new_purchase = Purchases(store=store, wine=wine, price=price, why=why, date=purchase_date,
                             vintage=vintage, quantity=quantity)
    new_purchase.save()


def empty_to_none(item):
    return item if item else None


def get_connection() -> sqlite3.Connection:
    return sqlite3.connect(os.path.join(BASE_DIR, "data/wine.db"))


def date_str_to_int(date_str: str) -> Union[int]:
    if date_str:
        return int(datetime.strptime(date_str, "%d %B, %Y").strftime("%Y%m%d"))


def int_to_date(yyyymmdd: int) -> Union[date]:
    if yyyymmdd:
        return date(year=yyyymmdd // 10000, month=yyyymmdd % 10000 // 100,
                    day=yyyymmdd % 100)
