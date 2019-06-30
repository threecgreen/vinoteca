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
