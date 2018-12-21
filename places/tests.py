from datetime import date
from django.urls import reverse
import pytest

from vinoteca.models import VitiAreas


@pytest.mark.parametrize("region", ["France", "California"])
@pytest.mark.django_db
def test_get_region_viti_area(client, region):
    response = client.get(reverse("REST:Viti Area"), {"region__name": region})
    assert response.status_code == 200
    assert len(response.json()) == VitiAreas.objects.filter(region__name=region).count()


@pytest.mark.django_db
def test_no_duplicate_viti_area(client):
    r"""Some duplicate areas had been created, this test tries to create duplicates and tests
    whether they fail, because duplicates are undesired behavior."""
    post_data = {
        "store": "Surdyk's",
        "purchase-date": date.today().strftime("%b %d, %Y"),
        "wine-type": "Chardonnay",
        "producer": "A new producer",
        "region": "Spain",
        "price": 0.01,
        "viti-area": "Rueda2",
        "color": "white",
        "has-rating": False,
        "vintage": 2016,
        "quantity": 1,
        "add-to-inventory": False,
    }
    # First make sure no wines in the viti area 'Rueda2' exist
    assert VitiAreas.objects.filter(name="Rueda2").count() == 0
    response = client.post(reverse("Wines:New Wine"), post_data)
    assert response.status_code == 302
    # Change producer that shouldn't matter
    post_data["producer"] = "A second producer"
    response = client.post(reverse("Wines:New Wine"), post_data)
    assert response.status_code == 302
    assert VitiAreas.objects.filter(name="Rueda2").count() == 1
