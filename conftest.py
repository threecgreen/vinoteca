""" Main (along with pytest.ini) pytest configuration file for django
testing. """
import os
import pytest
from django.test import Client
from django.core.management import call_command

from vinoteca.models import Wines

def pytest_namespace():
    """Set global variables."""
    return {"CI": True if os.environ.get("CI") else False}


@pytest.fixture(scope='session')
def django_db_setup(django_db_setup, django_db_blocker):
    """Load the test fixtures from 'test_data_fixtures.json'"""
    with django_db_blocker.unblock():
        call_command('loaddata', 'vinoteca/test_data/fixtures.json')


@pytest.fixture
def client():
    """ Basic fixture for django client used for interacting with web pages
    as a user and making requests."""
    return Client()


@pytest.fixture
@pytest.mark.django_db
def a_wine():
    """Returns a wine object for manipulation, linking or other purposes."""
    return Wines.objects.get(id=1)

