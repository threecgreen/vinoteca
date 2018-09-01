from django.urls import reverse
import pytest


@pytest.mark.parametrize("url", [reverse("Home"), "/", reverse("About")])
@pytest.mark.django_db
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200
