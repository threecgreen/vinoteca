import pytest
from django.test import TestCase
from django.urls import reverse

from vinoteca.models import WineGrapes
from wine_attrs.views import handle_grapes


@pytest.fixture
def grapes_post_data():
    return {
        "grape-1": "Cabernet Sauvignon",
        "grape-1-pct": "50",
        "grape-2": "Tempranillo",
        "grape-2-pct": "25",
        "grape-3": "Merlot",
        "grape-3-pct": "5",
        "grape-4": "Pinot Noir",
        "grape-4-pct": "5",
        "grape-5": "Riesling",
        "grape-5-pct": "5",
        "grape-6": "Pinot Grigio",
        "grape-6-pct": "5",
        "grape-7": "Bordeaux",
        "grape-7-pct": "5",
    }


@pytest.fixture
def grape_post_data(grape_post_data):
    return {k: grape_post_data[k] for k in ("grape-1", "grape-1-pct")}


def test_basic_handle_grapes(mocker, client, grape_post_data):
    mock_wine = mocker.MagicMock()
    mock_wine.id = 10
    mock_request = mocker.MagicMock()
    mock_request.POST = grape_post_data
    with mocker.patch.object(WineGrapes):
        handle_grapes()

def test_many_grapes():
    pass


def test_deleting_grape():
    pass
