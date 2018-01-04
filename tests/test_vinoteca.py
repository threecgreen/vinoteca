from django.urls import resolve
import pytest

from vinoteca.views import *


@pytest.mark.django_db
def test_home_page(client):
    response = client.get("/home/")
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/home/", "Home"),
    ("/", "Home"),
    ("/about/", "About")
])
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name
