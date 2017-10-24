from datetime import date
import pytest
import sqlite3

from vinoteca.utils import *


@pytest.mark.parametrize("store,address", [
    ("Costco", None),
    ("Costco", "123 Main St."),
    ("New Test Store", None)
])
@pytest.mark.django_db(transaction=True)
def test_g_or_store(store, address):
    store_obj = g_or_c_store(store, address)
    assert isinstance(store_obj, Stores)


@pytest.mark.parametrize("wine_type", [
    "Shiraz",
    "A New Type"
])
@pytest.mark.django_db(transaction=True)
def test_g_or_store(wine_type):
    type_obj = g_or_c_wine_type(wine_type)
    assert isinstance(type_obj, WineTypes)


@pytest.mark.parametrize("item,result", [
    ("", None),
    (None, None),
    (" ", " "),
    (0, None)
])
def test_empty_to_none(item, result):
    assert empty_to_none(item) == result


def test_get_connection():
    assert isinstance(get_connection(), sqlite3.Connection)


@pytest.mark.parametrize("date_str,date_int", [
    ("4 July, 2017", 20170704),
    ("", None),
    ("21 May, 2015", 20150521)
])
def test_date_str_to_int(date_str, date_int):
    assert date_str_to_int(date_str) == date_int


@pytest.mark.parametrize("yyyymmdd,date", [
    (20170704, date(2017, 7, 4)),
    (20150521, date(2015, 5, 21)),
    (None, None)
])
def int_to_date(yyyymmdd, date):
    assert int_to_date(yyyymmdd) == date
