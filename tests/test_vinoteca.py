from django.urls import resolve
import pytest

from vinoteca.views import *


@pytest.mark.parametrize("url", ["/home/", "/", "/about/"])
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/home/", "Home"),
    ("/", "Home"),
    ("/about/", "About")
])
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name
