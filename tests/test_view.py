from django.urls import resolve
from django.conf import settings
from pathlib import Path
import pytest

from vinoteca.models import Wines
from view import *


@pytest.fixture
def upload_file():
    path = Path(__file__).parent / "test.png"
    with open(path, "w") as f:
        f.write("Test 1, 2, 3")
    yield path
    # Delete test file
    path.unlink()
    assert not path.is_file()


@pytest.mark.parametrize("url", ["/wines/800/", "/wines/800/new-purchase/", "/wines/800/edit/",
                                 "/producers/75/", "/regions/3/", "/wines/table/",
                                 "/inventory/"])
@pytest.mark.django_db
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/wines/800/", "Wine Profile"),
    ("/wines/800/new-purchase/", "New Purchase Wine"),
    ("/wines/800/edit/", "Edit Wine"),
    ("/producers/75/", "Producer Profile"),
    ("/regions/3/", "Country Profile"),
    ("/wines/table/", "Wine Table"),
    ("/inventory/", "Inventory")
])
@pytest.mark.django_db
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name


@pytest.mark.parametrize("attr,val", [
    ("description", "Test"),
    ("producer", "A new producer"),
    ("color", "white")
])
@pytest.mark.django_db
def test_edit_wine(client, attr, val):
    wine = Wines.objects.get(id=800)
    init_val = wine.__getattribute__(attr)
    assert init_val != val
    post_data = {
        "producer": wine.producer.name,
        "country": wine.producer.country.name,
        "additional": wine.additional.additional,
        "description": wine.description,
        "notes": wine.notes,
        "rating": wine.rating,
        "color": wine.color.color,
        "wine-type": wine.wine_type.type_name,
    }


@pytest.mark.django_db
def test_edit_wine_image(client, upload_file):
    pass


def test_edit_purchases(client):
    pass


@pytest.mark.parametrize("sign", ["add", "subtract"])
@pytest.mark.django_db
def test_change_inventory(client, sign):
    wine = Wines.objects.get(id=800)
    wine.inventory = 1
    wine.save()
    client.get(f"/wines/800/change/{sign}/inventory/")
    wine = Wines.objects.get(id=800)
    if sign == "add":
        assert wine.inventory == 2
    else:
        assert wine.inventory == 0
