# pylint: disable=invalid-name
from django.urls import path

from producers.views import edit_producer, producer_profile


app_name = "Producers"
urlpatterns = [
    path("producers/<int:producer_id>/", producer_profile, name="Producer Profile"),
    path("producers/<int:producer_id>/edit/", edit_producer, name="Edit Producer"),
]
