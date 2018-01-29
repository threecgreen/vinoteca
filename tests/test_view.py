from django.urls import resolve
import pytest

from vinoteca.models import Wines
from view import *
# from conftest import skipif_db_empty


@pytest.mark.parametrize("url", ["/wines/800/", "/wines/800/new-purchase/", "/wines/800/edit/",
                                 "/producers/75/", "/regions/3/", "/wines/table/",
                                 "/inventory/"])
@pytest.mark.django_db
def test_pages(client, url):
    response = client.get(url)
    assert response.status_code == 200


@pytest.mark.parametrize("url,view_name", [
    ("/wines/800/", "Wine Profile"),
    ("/wines/800/new-purchase/", "New Purchase Wine"),
    ("/wines/800/edit/", "Edit Wine"),
    ("/producers/75/", "Producer Profile"),
    ("/regions/3/", "Country Profile"),
    ("/wines/table/", "Wine Table"),
    ("/inventory/", "Inventory")
])
@pytest.mark.django_db
def test_urls(url, view_name):
    resolver = resolve(url)
    assert resolver.view_name == view_name


# @pytest.mark.parametrize("data", [
#     # With rating
#     {"producer": }
#     # Without
#
#     # With image
#
#     # Without
# ])
def test_edit_wine(client, data):
    pass


def test_edit_purchaseS(client):
    pass


@pytest.mark.parametrize("sign", ["add", "subtract"])
@pytest.mark.django_db
def test_change_inventory(client, sign):
    wine = Wines.objects.get(id=800)
    wine.inventory = 1
    wine.save()
    client.get(f"/wines/800/change/{sign}/inventory/")
    wine = Wines.objects.get(id=800)
    if sign == "add":
        assert wine.inventory == 2
    else:
        assert wine.inventory == 0
