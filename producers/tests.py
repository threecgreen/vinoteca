from django.urls import reverse
import pytest

from vinoteca.models import Producers


@pytest.mark.parametrize("producer,region", [
    ("Le Grand Noir", "France"),
    ("ABC", None)
])
@pytest.mark.django_db
def test_get_producer_region(client, producer, region):
    response = client.get(reverse("REST Region"), {"producers__name": producer})
    assert response.status_code == 200
    if region:
        assert response.json()[0]["name"] == region
    else:
        assert not response.json()


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
