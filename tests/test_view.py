from django.urls import resolve
from django.conf import settings
from pathlib import Path
import pytest

from vinoteca.models import Grapes, Producers, Purchases, Wines, WineGrapes
from view.views import *


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
    "/producers/75/edit/",
    "/regions/3/",
    "/wines/table/",
    "/inventory/",
    "/wine-types/30/",
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
    ("/producers/75/edit/", "Edit Producer"),
    ("/regions/3/", "Region Profile"),
    ("/wines/table/", "Wine Table"),
    ("/inventory/", "Inventory"),
    ("/wine-types/30/", "Wine Type Profile"),
])
@pytest.mark.django_db
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name


@pytest.mark.django_db
def test_colors(client):
    response = client.get("/colors/all/")
    assert len(Colors.objects.all()) == len(response.json().keys())


@pytest.mark.django_db
def test_regions(client):
    response = client.get("/regions/all/")
    assert len(Regions.objects.all()) == len(response.json().keys())
    # Check for flags
    assert ".svg" in response.json()["California"]
    assert ".svg" in response.json()["France"]


@pytest.mark.django_db
def test_get_producers(client):
    response = client.get("/producers/all/")
    assert len(Producers.objects.all()) == len(response.json().keys())


@pytest.mark.django_db
def test_get_stores(client):
    response = client.get("/stores/all/")
    assert len(Stores.objects.all()) == len(response.json().keys())


@pytest.mark.django_db
def test_get_grapes(client):
    response = client.get("/grapes/all/")
    assert len(Grapes.objects.all()) == len(response.json().keys())


@pytest.mark.django_db
def test_get_wine_types(client):
    response = client.get("/wine-types/all/")
    assert len(WineTypes.objects.all()) == len(response.json().keys())


@pytest.mark.django_db
def test_get_viti_areas(client):
    response = client.get("/viti-areas/all/")
    assert len(VitiAreas.objects.all()) == len(response.json().keys())


@pytest.fixture
def wine_and_post_data():
    wine = Wines.objects.get(id=800)
    post_data = {
        "producer": wine.producer.name,
        "region": wine.producer.region.name,
        "description": wine.description,
        "notes": wine.notes,
        "rating": wine.rating,
        "color": wine.color.name,
        "wine-type": wine.wine_type.name,
        "viti-area": wine.viti_area.name if wine.viti_area else None,
    }
    return wine, post_data

@pytest.mark.parametrize("attr,val", [
    ("description", "Test"),
    ("producer", "A new producer"),
    ("color", "white"),
    ("viti_area", "Mendocino County")
])
@pytest.mark.django_db
def test_edit_wine(client, wine_and_post_data, attr, val):
    wine, post_data = wine_and_post_data
    init_val = wine.__getattribute__(attr)
    assert init_val != val
    post_data[attr.replace("_", "-")] = val
    response = client.post("/wines/800/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/wines/800/", 302) in response.redirect_chain
    if attr in ("producer", "viti_area", "color") or attr == "viti_area":
        assert Wines.objects.get(id=800).__getattribute__(attr).name == val
    else:
        assert Wines.objects.get(id=800).__getattribute__(attr) == val


@pytest.mark.django_db
def test_edit_wine_with_grapes(client, wine_and_post_data):
    wine, post_data = wine_and_post_data
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    assert len(wine_grapes) == 0
    # Add grape data
    post_data["grape-1"] = "Malbec"
    post_data["grape-1-pct"] = 50
    post_data["grape-2"] = "Syrah"
    post_data["grape-2-pct"] = 50
    # Post
    response = client.post("/wines/800/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/wines/800/", 302) in response.redirect_chain
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    grapes = [wine_grape.grape for wine_grape in wine_grapes]
    malbec = Grapes.objects.get(name="Malbec")
    syrah = Grapes.objects.get(name="Syrah")
    assert malbec in grapes
    assert syrah in grapes


@pytest.mark.django_db
def test_edit_wine_image(client, upload_file):
    wine = Wines.objects.get(id=800)
    post_data = {
        "producer": wine.producer.name,
        "region": wine.producer.region.name,
        "description": wine.description,
        "notes": wine.notes,
        "rating": wine.rating,
        "color": wine.color.name,
        "wine-type": wine.wine_type.name,
        "wine-image": upload_file
    }
    response = client.post("/wines/800/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/wines/800/", 302) in response.redirect_chain
    assert (Path(settings.BASE_DIR) / "media" / "800.png").is_file()
    response = client.get("/media/800.png")
    assert response.status_code == 200


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
        "memo": purchase.memo,
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


@pytest.mark.parametrize("attr,val", [
    ("region", "France"),
    ("producer", "Yalumbaaaa")
])
@pytest.mark.django_db
def test_edit_producer(client, attr, val):
    producer = Producers.objects.get(id=1)
    if attr == "region":
        init_val = producer.region.name
    else:
        init_val = producer.name
    assert init_val != val
    post_data = {
        "producer": producer.name,
        "region": producer.region.name
    }
    post_data[attr] = val
    response = client.post("/producers/1/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert ("/producers/1/", 302) in response.redirect_chain
    if attr == "region":
        assert Producers.objects.get(id=1).region.name == val
    else:
        assert Producers.objects.get(id=1).name == val


@pytest.mark.django_db
def test_delete_wine(client):
    response = client.get("/wines/850/edit/delete/confirmed/", follow=True)
    assert response.status_code == 200
    with pytest.raises(Wines.DoesNotExist):
        Wines.objects.get(id=850)


@pytest.mark.django_db
def test_delete_purchase(client):
    response = client.get("/wines/850/edit/119/delete/", follow=True)
    assert response.status_code == 200
    with pytest.raises(Purchases.DoesNotExist):
        Purchases.objects.get(id=119)
