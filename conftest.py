"""
Main (along with pytest.ini) pytest configuration file for django testing.
"""
import pytest
from django.test import Client
from django.core.management import call_command


@pytest.fixture(scope='session')
def django_db_setup(django_db_setup, django_db_blocker):
    with django_db_blocker.unblock():
        call_command('loaddata', 'tests/test_data_fixtures.json')


# @pytest.fixture
# def db_access_without_rollback_and_truncate(request, django_db_setup, django_db_blocker):
#     """
#     Second part of avoiding using a test database.
#     """
#     django_db_blocker.unblock()
#     request.addfinalizer(django_db_blocker.restore)


@pytest.fixture
def client():
    """
    Basic fixture for django client used for interacting with web pages as a user and making requests.
    """
    return Client()
