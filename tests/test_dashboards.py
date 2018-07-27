from django.urls import resolve
import pytest

from dashboards.views import *


@pytest.fixture
def connection():
    return get_connection()


@pytest.mark.django_db
def test_dash_page(client):
    response = client.get("/dashboards/")
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/dashboards/", "Dashboards"),
])
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [5, 10])
def test_recent_purchases(connection, limit):
    recent_purchases = recent_purchases_dash(connection, limit)
    assert isinstance(recent_purchases[0], RecentPurchase)
    assert len(recent_purchases) == limit


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [5, 10])
def test_recent_purchases(connection, limit):
    recent_purchases = recent_purchases_dash(connection, limit)
    assert isinstance(recent_purchases[0], RecentPurchase)
    assert len(recent_purchases) == limit


@pytest.mark.django_db
def test_by_the_numbers(connection):
    assert isinstance(by_the_numbers_dash(connection), ByTheNumbers)


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [5, 10])
def test_top_purchase_categories(connection, limit):
    top_purchase_categories = top_purchase_wine_types_dash(limit)
    assert isinstance(top_purchase_categories[0], TopPurchaseWineType)
    assert len(top_purchase_categories) == limit


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [5, 10])
def test_regions(connection, limit):
    regions = regions_dash(limit)
    assert isinstance(regions[0], Region)
    assert len(regions) == limit


@pytest.mark.django_db
def test_types(connection):
    types_ = color_dash()
    assert isinstance(types_[0], Type)


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [5, 10])
def test_producers(connection, limit):
    producers = producers_dash(limit)
    assert isinstance(producers[0], Producer)
    assert len(producers) == limit


@pytest.mark.django_db
def test_purchase_by_year(connection):
    years = purchases_by_year(connection)
    assert isinstance(years[0], Year)
