from django.urls import reverse
import pytest

from view.views import *


@pytest.fixture
def upload_file(a_wine):
    # Rename file if it already exists
    image_file = Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png"
    if image_file.is_file():
        existing_file = True
        image_file.rename(Path(settings.BASE_DIR) / "media" / f"{a_wine.id}_real.png")
    else:
        existing_file = False
    with open(Path(__file__).parent / "test.jpg", "rb") as file:
        yield file
    (Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png").unlink()
    if existing_file:
        (Path(settings.BASE_DIR) / "media" / f"{a_wine.id}_real.png").rename(
            Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png")


@pytest.mark.parametrize("url", [
    reverse("Wine Profile", kwargs={"wine_id": 1}),
    reverse("Edit Wine", kwargs={"wine_id": 1}),
    reverse("Edit Purchase", kwargs={"wine_id": 1, "purchase_id": 1}),
    reverse("Producer Profile", kwargs={"producer_id": 2}),
    reverse("Edit Producer", kwargs={"producer_id": 2}),
    reverse("Region Profile", kwargs={"region_id": 1}),
    reverse("Wine Table"),
    reverse("Inventory"),
    reverse("Wine Type Profile", kwargs={"wine_type_id": 1}),
])
@pytest.mark.django_db
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200


@pytest.fixture
def wine_and_post_data(a_wine):
    post_data = {
        "producer": a_wine.producer.name,
        "region": a_wine.producer.region.name,
        "description": a_wine.description,
        "notes": a_wine.notes,
        "rating": a_wine.rating,
        "color": a_wine.color.name,
        "wine-type": a_wine.wine_type.name,
        "viti-area": a_wine.viti_area.name if a_wine.viti_area else None,
    }
    return a_wine, post_data


@pytest.mark.parametrize("attr,val", [
    ("description", "Test"),
    ("producer", "A new producer"),
    ("color", "white"),
    ("viti_area", "Loire")
])
@pytest.mark.django_db
def test_edit_wine(client, wine_and_post_data, attr, val):
    wine, post_data = wine_and_post_data
    init_val = wine.__getattribute__(attr)
    assert init_val != val
    post_data[attr.replace("_", "-")] = val
    response = client.post(f"/wines/{wine.id}/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert (f"/wines/{wine.id}/", 302) in response.redirect_chain
    if attr in ("producer", "viti_area", "color") or attr == "viti_area":
        assert Wines.objects.get(id=1).__getattribute__(attr).name == val
    else:
        assert Wines.objects.get(id=1).__getattribute__(attr) == val


@pytest.mark.django_db
def test_edit_wine_with_grapes(client, wine_and_post_data):
    _, post_data = wine_and_post_data
    # Switch to wine id=2 because wine with id=1 already has grapes for other
    # tests.
    wine = Wines.objects.get(id=2)
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    assert len(wine_grapes) == 0
    # Add grape data
    post_data["grape-1"] = "Malbec"
    post_data["grape-1-pct"] = 50
    post_data["grape-2"] = "Syrah"
    post_data["grape-2-pct"] = 50
    # Post
    response = client.post(f"/wines/{wine.id}/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert (f"/wines/{wine.id}/", 302) in response.redirect_chain
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    grapes = [wine_grape.grape for wine_grape in wine_grapes]
    malbec = Grapes.objects.get(name="Malbec")
    syrah = Grapes.objects.get(name="Syrah")
    assert malbec in grapes
    assert syrah in grapes


@pytest.mark.django_db
def test_edit_wine_image(a_wine, client, upload_file):
    post_data = {
        "producer": a_wine.producer.name,
        "region": a_wine.producer.region.name,
        "description": a_wine.description,
        "notes": a_wine.notes,
        "rating": a_wine.rating,
        "color": a_wine.color.name,
        "wine-type": a_wine.wine_type.name,
        "wine-image": upload_file
    }
    response = client.post(f"/wines/{a_wine.id}/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert (f"/wines/{a_wine.id}/", 302) in response.redirect_chain
    assert (Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png").is_file()
    response = client.get(f"/media/{a_wine.id}.png")
    assert response.status_code == 200


@pytest.mark.parametrize("attr,val", [
    ("price", 1.23),
    ("store", "Costco")
])
@pytest.mark.django_db
def test_edit_purchases(client, attr, val, a_wine):
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
    response = client.post(f"/wines/{a_wine.id}/edit/1/", post_data, follow=True)
    assert response.status_code == 200
    assert (f"/wines/{a_wine.id}/edit/", 302) in response.redirect_chain
    if attr == "store":
        assert Purchases.objects.get(id=1).__getattribute__(attr).name == val
    else:
        assert Purchases.objects.get(id=1).__getattribute__(attr) == val


@pytest.mark.parametrize("sign", ["add", "subtract"])
@pytest.mark.django_db
def test_change_inventory(a_wine, client, sign):
    a_wine.inventory = 1
    a_wine.save()
    client.get(f"/wines/{a_wine.id}/change/{sign}/inventory/")
    a_wine = Wines.objects.get(id=1)
    if sign == "add":
        assert a_wine.inventory == 2
    else:
        assert a_wine.inventory == 0


@pytest.mark.parametrize("attr,val", [
    ("region", "France"),
    ("producer", "A new prod")
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
    response = client.post(f"/producers/{producer.id}/edit/", post_data, follow=True)
    assert response.status_code == 200
    assert (f"/producers/{producer.id}/", 302) in response.redirect_chain
    if attr == "region":
        assert Producers.objects.get(id=1).region.name == val
    else:
        assert Producers.objects.get(id=1).name == val


@pytest.mark.django_db
def test_delete_wine(client, a_wine):
    response = client.get(f"/wines/{a_wine.id}/edit/delete/confirmed/", follow=True)
    assert response.status_code == 200
    with pytest.raises(Wines.DoesNotExist):
        Wines.objects.get(id=1)


@pytest.mark.django_db
def test_delete_purchase(client, a_wine):
    response = client.get(f"/wines/{a_wine.id}/edit/1/delete/", follow=True)
    assert response.status_code == 200
    with pytest.raises(Purchases.DoesNotExist):
        Purchases.objects.get(id=1)
