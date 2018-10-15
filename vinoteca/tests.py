from django.urls import reverse
import pytest


@pytest.mark.parametrize("url", [
    reverse("Home"),
    "/",
    reverse("About"),
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


