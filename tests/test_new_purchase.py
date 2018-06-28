from datetime import date
from django.urls import resolve
import pytest


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
def test_get_producer_country(client, producer, country):
    response = client.get("/new/get-producer-country/", {"producer": producer})
    assert response.status_code == 200
    if country:
        assert response.json()["country_name"] == country
    else:
        assert response.json()["country_name"] is None


@pytest.mark.parametrize("country", ["France", "California", ""])
@pytest.mark.django_db
def test_get_country_viti_area(client, country):
    response = client.get("/new/get-country-viti-areas/", {"country": country})
    assert response.status_code == 200
    if len(country) == 0:
        assert len(response.json().keys()) == 0
    else:
        assert len(response.json().keys()) > 0


@pytest.mark.parametrize("wine_type,color,producer,country,viti_area", [
    ("Pinot Noir", "", "", "", ""),
    ("", "Red", "", "", ""),
    ("", "", "Yalumba", "", ""),
    ("", "", "", "California", ""),
    ("", "", "", "", "Napa County"),
    ("", "Red", "Yalumba", "Australia", ""),
    ("Pinot Noir", "Red", "", "California", ""),
    ("", "", "", "", ""),
])
@pytest.mark.django_db
def test_search_wines(client, wine_type, color, producer, country, viti_area):
    is_empty = all(len(param) == 0 for param in (wine_type, color, producer,
                                                 country, viti_area))
    search_data = {
        "wine_type": wine_type,
        "color": color,
        "producer": producer,
        "country": country,
        "viti_area": viti_area
    }
    response = client.get("/new/search-wines/", search_data)
    assert response.status_code == 200
    if is_empty:
        assert len(response.json()["results"]) == 0
    else:
        assert len(response.json()["results"]) > 0


@pytest.mark.parametrize("store,price,why,vintage,quantity", [
    ("Test store", 12.34, "", 2020, 1),
    ("Surdyk's", "", "", 2020, 1)
])
@pytest.mark.django_db
def test_new_purchase_and_wine(client, store, price, why, vintage, quantity):
    post_data = {
        "store": store,
        "purchase-date": date.today().strftime("%d %B, %Y"),
        "price": price,
        "why": why,
        "vintage": vintage,
        "quantity": quantity
    }
    response = client.post("/wines/800/new-purchase/", post_data)
    assert response.status_code == 302


@pytest.mark.parametrize("store,wine_type,producer,country,description,price,viti_area,why,notes,color,rating," 
                         "vintage,quantity,add_to_inventory,grapes", [
    ("Surdyk's", "Merlot", "Yalumba", "Australia", None, "", "", "", "", "red", 8, 2020, 2, True, None),
    ("ABC", "Shiraz", "Francais", "France", "desc", 12.23, "Bordeaux", "why", "notes", "white", 2, 2020, 1, False, [
        ("Grape 1", 50),
        ("Grape 2", 50)
    ])
])
@pytest.mark.django_db
def test_insert_new_purchase(client, store, wine_type, producer, country, description, price, viti_area, why,
                             notes, color, rating, vintage, quantity, add_to_inventory, grapes):
    post_data = {
        "store": store,
        "purchase-date": date.today().strftime("%d %B, %Y"),
        "wine-type": wine_type,
        "producer": producer,
        "country": country,
        "description": description,
        "price": price,
        "viti-area": viti_area,
        "why": why,
        "notes": notes,
        "color": color,
        "has-rating": bool(rating),
        "rating": rating,
        "vintage": vintage,
        "quantity": quantity,
        "add-to-inventory": add_to_inventory,
    }
    if grapes:
        for i, grape in enumerate(grapes):
            post_data["grape-{}".format(i + 1)] = grape[0]
            post_data["grape-{}-pct".format(i + 1)] = grape[1]
        # Need to include additional blank grape pct to simulate empty row
        post_data["grape-{}-pct".format(len(grapes) + 1)] = 100
    response = client.post("/new/first-time/", post_data)
    assert response.status_code == 302
