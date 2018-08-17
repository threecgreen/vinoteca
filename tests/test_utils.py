import pytest
from django.db.utils import IntegrityError

from vinoteca.utils import *


@pytest.fixture
@pytest.mark.django_db
def california():
    return Regions.objects.get(name="California")


@pytest.mark.parametrize("store", [
    "Costco",
    "New Test Store"
])
@pytest.mark.django_db
def test_g_or_c_store(store):
    store_obj = g_or_c_store(store)
    assert isinstance(store_obj, Stores)


@pytest.mark.parametrize("wine_type", [
    "Pinot Noir",
    "A New Type"
])
@pytest.mark.django_db
def test_g_or_c_wine_type(wine_type):
    type_obj = g_or_c_wine_type(wine_type)
    assert isinstance(type_obj, WineTypes)


@pytest.mark.parametrize("region", [
    "France",
    "Antarctica"
])
@pytest.mark.django_db
def test_g_or_c_region(region):
    region = g_or_c_region(region)
    assert isinstance(region, Regions)


@pytest.mark.parametrize("producer,region", [
    ("Martinelli", True),
    ("New Producer", True),
    ("No Region Producer", False)
])
@pytest.mark.django_db
def test_g_or_c_producer(producer, region):
    region = california() if region else None
    producer = g_or_c_producer(producer, region)
    assert isinstance(producer, Producers)
    if region:
        assert producer.region == california()


@pytest.mark.parametrize("viti_area,region", [
    ("Sonoma County", True),
    ("New VA", True),
    ("No Region VA", False)
])
@pytest.mark.django_db
def test_g_or_c_viti_area(viti_area, region):
    region = california() if region else None
    if region:
        viti_area = g_or_c_viti_area(viti_area, region)
        assert isinstance(viti_area, VitiAreas)
        assert viti_area.region == region
    else:
        # No Viticultural areas without a region
        with pytest.raises(IntegrityError):
            g_or_c_viti_area(viti_area, region)


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


@pytest.mark.parametrize("region,result", [
    ("California", True),
    ("New Zealand", True),
    ("Antarctica", False)
])
def test_flag_exists(region, result):
    assert flag_exists(region) == result


@pytest.mark.parametrize("region,result", [
    ("California", True),
    ("New Zealand", True),
    ("Antarctica", False)
])
def test_get_region_flags(region, result):
    if result:
        assert region in get_region_flags()
    else:
        assert region not in get_region_flags()


@pytest.mark.parametrize("grape,pct", [
    ("A new grape", 25),
    ("No pct grape", None)
])
@pytest.mark.django_db
def test_g_or_c_wine_grape(a_wine, grape, pct):
    start_count = WineGrapes.objects.filter(wine=a_wine).count()
    assert c_or_u_wine_grapes(a_wine, grape, pct)
    assert WineGrapes.objects.filter(wine=a_wine).count() == start_count + 1


@pytest.mark.parametrize("grape", ["Syrah", "Merlot"])
@pytest.mark.django_db
def test_g_or_c_wine_grape_existing(a_wine, grape):
    assert c_or_u_wine_grapes(a_wine, grape, 0) is False


def test_convert_to_png():
    # TODO: Create test
    pass
