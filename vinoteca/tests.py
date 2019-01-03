from django.urls import reverse
from django.db import IntegrityError
import pytest

from vinoteca.utils import *


def test_strip_params():
    @strip_params
    def _a_fake_func(*args, **kwargs):
        return args, kwargs
    args, kwargs = _a_fake_func(1, "   what now ", 2, 3, what="up   ", hello=True)
    assert args == (1, "what now", 2, 3)
    assert kwargs == {"what": "up", "hello": True}


@pytest.mark.parametrize("url", [
    reverse("Home"),
    "/",
    reverse("About"),
    reverse("Wines:Wine Profile", kwargs={"wine_id": 1}),
    reverse("Wines:Edit Wine", kwargs={"wine_id": 1}),
    reverse("Wines:Edit Purchase", kwargs={"wine_id": 1, "purchase_id": 1}),
    reverse("Producers:Producer Profile", kwargs={"producer_id": 2}),
    reverse("Producers:Edit Producer", kwargs={"producer_id": 2}),
    reverse("Region Profile", kwargs={"region_id": 1}),
    reverse("Wines:Wines"),
    reverse("Inventory"),
    reverse("Wine Type Profile", kwargs={"wine_type_id": 1}),
])
@pytest.mark.django_db
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200


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
def test_g_or_c_producer(producer, region, california):
    region = california if region else None
    producer = g_or_c_producer(producer, region)
    assert isinstance(producer, Producers)
    if region:
        assert producer.region == california


@pytest.mark.parametrize("viti_area,region", [
    ("Sonoma County", True),
    ("New VA", True),
    ("No Region VA", False)
])
@pytest.mark.django_db
def test_g_or_c_viti_area(viti_area, region, california):
    region = california if region else None
    if region:
        viti_area = g_or_c_viti_area(viti_area, region)
        assert isinstance(viti_area, VitiAreas)
        assert viti_area.region == region
    else:
        # No Viticultural areas without a region
        with pytest.raises(IntegrityError):
            g_or_c_viti_area(viti_area, region)


@pytest.mark.parametrize("item,type_,result", [
    ("", None, None),
    (None, None, None),
    (" ", None, None,),
    (" abc    ", None, "abc"),
    ("  0", int, 0),
])
def test_empty_to_none(item, type_, result):
    assert empty_to_none(item, type_) == result


def test_get_connection():
    assert isinstance(get_connection(), sqlite3.Connection)


@pytest.mark.parametrize("date_str,date_int", [
    ("Jul 04, 2017", 20170704),
    ("", None),
    ("May 21, 2015", 20150521)
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
