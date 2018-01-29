from django.urls import resolve
import pytest

from new_purchase.views import *


@pytest.mark.django_db
@pytest.mark.parametrize("page", [
    "/new/prev-purchased/",
    "/new/get-producer-country/",
    "/new/get-country-viti-areas/",
    "/new/search-wines/"
])
def test_pages(client, page):
    response = client.get(page)
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/new/prev-purchased/", "New Purchase Search"),
    ("/new/get-producer-country/", "Get Producer Country JSON"),
    ("/new/get-country-viti-areas/", "Get Country Viti Areas JSON"),
    ("/new/search-wines/", "Search Wines JSON")
])
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name


@pytest.mark.parametrize("producer,country", [
    ("Yalumba", "Australia"),
    ("ABC", None)
])
@pytest.mark.django_db
@pytest.mark.xfail
def test_get_producer_country(client, producer, country):
    response = client.get("/new/get-producer-country/", {"producer": producer},
        redirect=True)
    assert response.status_code == 200
    if country:
        assert response.context["country_name"] == country
    else:
        assert response.context["country_name"] is None


@pytest.mark.parametrize("country", ["France", "California", ""])
@pytest.mark.django_db
@pytest.mark.xfail
def test_get_country_viti_area(client, country):
    response = client.get("/new/get-country-viti-areas/", {"country": country})
    assert response.status_code == 200
    if len(country) == 0:
        assert response.context["viti_areas"] is None
    else:
        assert len(response.context["viti_areas"] > 0)


@pytest.mark.parametrize("wine_type,color,producer,country", [
    ("Pinot Noir", "", "", ""),
    ("", "Red", "", ""),
    ("", "", "Yalumba", ""),
    ("", "", "", "California"),
    ("", "Red", "Yalumba", "Australia"),
    ("Pinot Noir", "Red", "", "California"),
    ("", "", "", ""),
])
@pytest.mark.django_db
@pytest.mark.xfail
def test_search_wines(client, wine_type, color, producer, country):
    is_empty = all(len(param) == 0 for param in (wine_type, color, producer, country))
    search_data = {
        "wine_type": wine_type,
        "color": color,
        "producer": producer,
        "country": country
    }
    response = client.get("/new/search-wines/", search_data)
    assert response.status_code == 200
    if is_empty:
        assert response.context["results"] is None
    else:
        assert len(response.context["results"] > 0)
        assert len(response.context["results"][0] == 7)


def test_new_purchase_and_wine(client):
    pass


def test_insert_new_purchase(client):
    pass
