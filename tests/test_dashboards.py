import pytest
from django.urls import reverse

from dashboards.views import *


@pytest.fixture
def connection():
    return get_connection()


@pytest.mark.django_db
def test_dash_page(client):
    response = client.get(reverse("Dashboards"))
    assert response.status_code == 200


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 5])
def test_recent_purchases(limit):
    result = recent_purchases(limit)
    assert isinstance(result[0], Purchases)
    assert len(result) == limit


@pytest.mark.django_db
def test_by_the_numbers(connection):
    assert isinstance(by_the_numbers(connection), ByTheNumbers)


@pytest.mark.xfail
@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 5])
def test_top_purchase_categories(limit):
    top_purchase_categories = top_wine_types(limit)
    assert isinstance(top_purchase_categories[0], WineTypes)
    assert len(top_purchase_categories) == limit


@pytest.mark.xfail
@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 5])
def test_regions(limit):
    regions = top_regions(limit)
    assert isinstance(regions[0], Regions)
    assert len(regions) == limit


@pytest.mark.django_db
def test_types():
    colors = purchases_by_color()
    assert isinstance(colors[0], Colors)


@pytest.mark.xfail
@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 5])
def test_producers(limit):
    producers = top_producers(limit)
    assert isinstance(producers[0], Producers)
    assert len(producers) == limit


@pytest.mark.django_db
def test_purchase_by_year(connection):
    years = purchases_by_year(connection)
    assert isinstance(years[0], Year)


@pytest.mark.xfail
@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 5])
def test_top_grape_varieties(limit):
    grapes = top_grape_varieties(limit)
    assert isinstance(grapes[0], Grapes)
    assert len(grapes) == limit
