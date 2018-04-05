import pytest

from vinoteca.utils import *


@pytest.fixture
@pytest.mark.django_db
def california():
    return Countries.objects.get(name="California")


@pytest.mark.parametrize("store", [
    "Costco",
    "New Test Store"
])
@pytest.mark.django_db
def test_g_or_c_store(store):
    store_obj = g_or_c_store(store)
    assert isinstance(store_obj, Stores)


@pytest.mark.parametrize("wine_type", [
    "Shiraz",
    "A New Type"
])
@pytest.mark.django_db
def test_g_or_c_wine_type(wine_type):
    type_obj = g_or_c_wine_type(wine_type)
    assert isinstance(type_obj, WineTypes)


@pytest.mark.parametrize("country", [
    "New Zealand",
    "Antarctica"
])
@pytest.mark.django_db
def test_g_or_c_country(country):
    country = g_or_c_country(country)
    assert isinstance(country, Countries)


@pytest.mark.parametrize("producer,country", [
    ("Inagery", True),
    ("New Producer", True),
    ("No Country Producer", False)
])
@pytest.mark.django_db
def test_g_or_c_producer(producer, country):
    country = california() if country else None
    producer = g_or_c_producer(producer, country)
    assert isinstance(producer, Producers)
    if country:
        assert producer.country == california()


@pytest.mark.parametrize("viti_area,country", [
    ("Sonoma County", True),
    ("New VA", True),
    ("No Country VA", False)
])
@pytest.mark.django_db
def test_g_or_c_viti_area(viti_area, country):
    country = california() if country else None
    viti_area = g_or_c_viti_area(viti_area, country)
    assert isinstance(viti_area, VitiAreas)
    if country:
        assert viti_area.region == country


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
def test_int_to_date(yyyymmdd, date):
    assert int_to_date(yyyymmdd) == date


@pytest.mark.parametrize("country_name,result", [
    ("California", True),
    ("New Zealand", True),
    ("Antarctica", False)
])
def test_flag_exists(country_name, result):
    assert flag_exists(country_name) == result


@pytest.mark.parametrize("country_name,result", [
    ("California", True),
    ("New Zealand", True),
    ("Antarctica", False)
])
def test_get_flag_countries(country_name, result):
    if result:
        assert country_name in get_flag_countries()
    else:
        assert country_name not in get_flag_countries()


@pytest.mark.parametrize("grape,pct", [
    ("Sauvignon Blanc", 50),
    ("A new grape", 25),
    ("No pct grape", None)
])
@pytest.mark.django_db
def test_g_or_c_wine_grape(grape, pct):
    wine = Wines.objects.get(id=850)
    start_count = WineGrapes.objects.filter(wine=wine).count()
    assert c_or_u_wine_grapes(wine, grape, pct)
    assert WineGrapes.objects.filter(wine=wine).count() == start_count + 1


@pytest.mark.parametrize("grape", ["Negroamaro", "Primitivo"])
@pytest.mark.django_db
def test_g_or_c_wine_grape_existing(grape):
    wine = Wines.objects.get(id=732)
    assert c_or_u_wine_grapes(wine, grape, 0) is False
