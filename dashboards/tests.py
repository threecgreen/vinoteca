import pytest
from django.urls import reverse

from dashboards.views import *
from vinoteca.models import Purchase, Wines


@pytest.fixture
def connection():
    return get_connection()


@pytest.mark.xfail(pytest.CI, reason="Purchase queries aren't working in CI.")
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


@pytest.mark.xfail(pytest.CI, reason="Purchase queries aren't working in CI.")
@pytest.mark.django_db
def test_by_the_numbers(connection):
    assert isinstance(by_the_numbers(connection), ByTheNumbers)


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 3])
def test_top_purchase_categories(limit):
    top_purchase_categories = top_wine_types(limit)
    assert isinstance(top_purchase_categories[0], WineTypes)
    assert len(top_purchase_categories) == limit


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 3])
def test_regions(limit):
    regions = top_regions(limit)
    assert isinstance(regions[0], Regions)
    assert len(regions) == limit


@pytest.mark.django_db
def test_types():
    colors = purchases_by_color()
    assert isinstance(colors[0], Colors)


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 3])
def test_producers(limit):
    producers = top_producers(limit)
    assert isinstance(producers[0], Producers)
    assert len(producers) == limit


@pytest.mark.xfail(pytest.CI, reason="Purchase queries aren't working in CI.")
@pytest.mark.django_db
def test_purchase_by_year(connection):
    years = purchases_by_year(connection)
    assert isinstance(years[0], Year)


@pytest.mark.django_db
@pytest.mark.parametrize("limit", [2, 3])
def test_top_grape_varieties(limit):
    grapes = top_grape_varieties(limit)
    assert isinstance(grapes[0], Grapes)
    assert len(grapes) == limit


@pytest.mark.django_db
def test_inventory_nvs(client):
    r"""Previously there was a bug where wines that were purchased at an unknown
    date had their vintage displayed as 'NV' in the inventory table."""
    # Wine with one purchase
    wine = Wines.objects.get(id=2)
    purchase = Purchases.objects.filter(wine__id=2)[0]
    purchase.date = None
    purchase.save()
    response = client.get(reverse("Inventory"))
    inventory = response.context["inventory"]
    for item in inventory:
        if item.wine_id == wine.id:
            assert item.vintage == purchase.vintage
