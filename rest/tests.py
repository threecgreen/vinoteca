from django.urls import reverse
import pytest

from rest.views import GrapeView
from vinoteca.models import Grapes


@pytest.mark.django_db
def test_grape_view_put(client):
    assert Grapes.objects.get(id=1).name == "Syrah"
    data = {
        "id": 1,
        "name": "Syrahh"
    }
    response = client.put(reverse("REST:Grape-Put", kwargs={"id": 1}), data,
                          content_type="application/json")
    assert response.status_code == 200
    assert Grapes.objects.get(id=1).name == "Syrahh"


@pytest.mark.parametrize("wine_type,color,producer,region,viti_area", [
    ("Pinot Noir", "", "", "", ""),
    ("", "red", "", "", ""),
    ("", "", "Martinelli", "", ""),
    ("", "", "", "California", ""),
    ("", "", "", "", "Sonoma County"),
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
    response = client.get(reverse("REST:Search Wines"), search_data,
                          content_type="application/json")
    assert response.status_code == 200
    assert len(response.json()) > 0
