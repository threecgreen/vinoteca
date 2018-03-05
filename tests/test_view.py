from django.urls import resolve
from django.conf import settings
from pathlib import Path
import pytest

from vinoteca.models import Wines, Purchases
from vinoteca.utils import date_str_to_int, int_to_date
from view import *


@pytest.fixture
def upload_file():
    # Rename file if it already exists
    image_file = Path(settings.BASE_DIR) / "media" / "800.png"
    if image_file.is_file():
        existing_file = True
        image_file.rename(Path(settings.BASE_DIR) / "media" / "800_real.png")
    else:
        existing_file = False
    with open(Path(__file__).parent / "test.jpg", "rb") as file:
        yield file
    (Path(settings.BASE_DIR) / "media" / "800.png").unlink()
    if existing_file:
        (Path(settings.BASE_DIR) / "media" / "800_real.png").rename(
            Path(settings.BASE_DIR) / "media" / "800.png")


@pytest.mark.parametrize("url", [
    "/wines/800/",
    "/wines/800/new-purchase/",
    "/wines/800/edit/",
    "/wines/752/edit/1/",
    "/producers/75/",
    "/regions/3/",
    "/wines/table/",
    "/inventory/"
])
@pytest.mark.django_db
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/wines/800/", "Wine Profile"),
    ("/wines/800/new-purchase/", "New Purchase Wine"),
    ("/wines/800/edit/", "Edit Wine"),
    ("/wines/752/edit/1/", "Edit Purchase"),
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
    post_data[attr] = val
    response = client.post("/wines/800/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/wines/800/", 302) in response.redirect_chain
    if attr == "color":
        assert Wines.objects.get(id=800).__getattribute__(attr).color == val
    elif attr == "producer":
        assert Wines.objects.get(id=800).__getattribute__(attr).name == val
    else:
        assert Wines.objects.get(id=800).__getattribute__(attr) == val


@pytest.mark.django_db
def test_edit_wine_image(client, upload_file):
    wine = Wines.objects.get(id=800)
    post_data = {
        "producer": wine.producer.name,
        "country": wine.producer.country.name,
        "additional": wine.additional.additional,
        "description": wine.description,
        "notes": wine.notes,
        "rating": wine.rating,
        "color": wine.color.color,
        "wine-type": wine.wine_type.type_name,
        "wine-image": upload_file
    }
    response = client.post("/wines/800/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/wines/800/", 302) in response.redirect_chain
    assert (Path(settings.BASE_DIR) / "media" / "800.png").is_file()


@pytest.mark.parametrize("attr,val", [
    ("price", 1.23),
    ("store", "Big Top")
])
@pytest.mark.django_db
def test_edit_purchases(client, attr, val):
    purchase = Purchases.objects.get(id=1)
    init_val = purchase.__getattribute__(attr)
    assert init_val != val
    post_data = {
        "quantity": purchase.quantity,
        "price": purchase.price,
        "vintage": purchase.vintage,
        "why": purchase.why,
        "store": purchase.store
    }
    post_data[attr] = val
    response = client.post("/wines/752/edit/1/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/wines/752/edit/", 302) in response.redirect_chain
    if attr == "store":
        assert Purchases.objects.get(id=1).__getattribute__(attr).name == val
    else:
        assert Purchases.objects.get(id=1).__getattribute__(attr) == val


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
