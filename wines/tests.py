#pylint: disable=redefined-outer-name
from datetime import date
from pathlib import Path

from django.conf import settings
from django.urls import reverse
import pytest

from vinoteca.models import Grapes, Purchases, WineGrapes, Wines

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


@pytest.mark.django_db
@pytest.mark.parametrize("page", [
    reverse("Wines:Search Wines"),
    reverse("Wines:New Wine"),
    # reverse("New Purchase Wine"),
    reverse("Wines:Search Wines Results JSON"),
])
def test_pages(client, page):
    response = client.get(page)
    assert response.status_code == 200


@pytest.mark.parametrize("wine_type,color,producer,region,viti_area", [
    ("Pinot Noir", "", "", "", ""),
    ("", "red", "", "", ""),
    ("", "", "Martinelli", "", ""),
    ("", "", "", "California", ""),
    # ("", "", "", "", "Sonoma County"),
    ("", "red", "Le Grand Noir", "France", ""),
    ("Pinot Noir", "red", "", "California", "")
])
@pytest.mark.django_db
def test_search_wines(client, wine_type, color, producer, region, viti_area):
    search_data = {
        "wine_type": wine_type,
        "color": color,
        "producer": producer,
        "region": region,
        "viti_area": viti_area
    }
    response = client.get(reverse("Wines:Search Wines Results JSON"), search_data)
    assert response.status_code == 200
    assert len(response.json()["results"]) > 0


@pytest.mark.parametrize("store,price,why,vintage,quantity", [
    ("Test store", 12.34, "", 2020, 1),
    ("Costco", "", "", 2020, 1)
])
@pytest.mark.django_db
def test_new_purchase_and_wine(client, store, price, why, vintage, quantity):
    post_data = {
        "store": store,
        "purchase-date": date.today().strftime("%b %d, %Y"),
        "price": price,
        "why": why,
        "vintage": vintage,
        "quantity": quantity
    }
    response = client.post("/wines/1/new-purchase/", post_data)
    assert response.status_code == 302


@pytest.mark.parametrize("store,wine_type,producer,region,description,price,viti_area,why,notes,color,rating,"
                         "vintage,quantity,add_to_inventory,grapes", [

    ("Costco", "Sauvignon Blanc", "Rodney Strong", "California", None, "", "", "", "", "red", 8, 2020, 2, True, None),
    ("ABC", "Pinot Noir", "Francais", "France", "desc", 12.23, "Loire", "why", "notes", "white", 2, 2020, 1, False, [
        ("Grape 1", 50),
        ("Grape 2", 50)
    ]),
    # No region because with autocomplete, the region isn't actually submitted
    ("Costco", "Sauvignon Blanc", "Rodney Strong", None, None, "", "", "", "", "red", 8, 2020, 2, True, None),
])
@pytest.mark.django_db
def test_insert_new_wine(client, store, wine_type, producer, region, description,
                         price, viti_area, why, notes, color, rating, vintage,
                         quantity, add_to_inventory, grapes):
    post_data = {
        "store": store,
        "purchase-date": date.today().strftime("%b %d, %Y"),
        "wine-type": wine_type,
        "producer": producer,
        "region": region,
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
            post_data[f"grape-{i + 1}"] = grape[0]
            post_data[f"grape-{i + 1}-pct"] = grape[1]
        # Need to include additional blank grape pct to simulate empty row
        post_data[f"grape-{len(grapes)}-pct"] = 100
    response = client.post(reverse("Wines:New Wine"), post_data)
    assert response.status_code == 302


@pytest.fixture
def upload_file(a_wine):
    # Rename file if it already exists
    image_file = Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png"
    if image_file.is_file():
        existing_file = True
        image_file.rename(Path(settings.BASE_DIR) / "media" / f"{a_wine.id}_real.png")
    else:
        existing_file = False
    with open(Path(__file__).parent.parent / "vinoteca" / "test_data" / "test.jpg", "rb") as file:
        yield file
    (Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png").unlink()
    if existing_file:
        (Path(settings.BASE_DIR) / "media" / f"{a_wine.id}_real.png").rename(
            Path(settings.BASE_DIR) / "media" / f"{a_wine.id}.png")


@pytest.fixture
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
    response = client.post(reverse("Wines:Edit Wine", kwargs={"wine_id": wine.id}), post_data, follow=True)
    assert response.status_code == 200
    assert (reverse("Wines:Wine Profile", kwargs={"wine_id": wine.id}), 302) in response.redirect_chain
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
    response = client.post(reverse("Wines:Edit Wine", kwargs={"wine_id": wine.id}), post_data, follow=True)
    assert response.status_code == 200
    assert (reverse("Wines:Wine Profile", kwargs={"wine_id": wine.id}), 302) in response.redirect_chain
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
    response = client.post(reverse("Wines:Edit Purchase",
                                   kwargs={"wine_id": a_wine.id, "purchase_id": 1}),
                           post_data, follow=True)
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


@pytest.mark.django_db
def test_delete_wine(client, a_wine):
    response = client.get(reverse("Wines:Delete Wine", kwargs={"wine_id": a_wine.id}),
                          follow=True)
    assert response.status_code == 200
    with pytest.raises(Wines.DoesNotExist):
        Wines.objects.get(id=1)


@pytest.mark.django_db
def test_delete_purchase(client, a_wine):
    response = client.get(reverse("Wines:Delete Purchase",
                          kwargs={"wine_id":a_wine.id, "purchase_id": 1}),
                          follow=True)
    assert response.status_code == 200
    with pytest.raises(Purchases.DoesNotExist):
        Purchases.objects.get(id=1)
