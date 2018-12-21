r"""URL configurations for the REST views which are currently only used to
GET wine data, not to modify it."""
# pylint: disable=invalid-name
from django.urls import path

from rest.views import (
    generic_all_names, region_all_names, ColorList, RegionList, ProducerList,
    VitiAreaList, WineTypeList, WineList, GrapeList
)


app_name = "REST"
urlpatterns = [
    # Name serializers primarily used for autocomplete
    path("colors/all/", generic_all_names, kwargs={"obj_name": "color"},
         name="Colors"),
    path("regions/all/", region_all_names, name="Regions"),
    path("producers/all/", generic_all_names, kwargs={"obj_name": "producer"},
         name="Producers"),
    path("stores/all/", generic_all_names, kwargs={"obj_name": "store"},
         name="Stores"),
    path("grapes/all/", generic_all_names, kwargs={"obj_name": "grape"},
         name="Grapes"),
    path("wine-types/all/", generic_all_names, kwargs={"obj_name": "wine-type"},
         name="WineTypes"),
    path("viti-areas/all/", generic_all_names, kwargs={"obj_name": "viti-area"},
         name="VitiAreas"),

    # Graph related views
    path("colors/", ColorList.as_view(), name="Color"),
    path("regions/", RegionList.as_view(), name="Region"),
    path("producers/", ProducerList.as_view(), name="Producer"),
    path("viti-areas/", VitiAreaList.as_view(), name="Viti Area"),
    path("wine-types/", WineTypeList.as_view(), name="Wine Type"),
    path("wines/", WineList.as_view(), name="Wine"),
    path("grapes/", GrapeList.as_view(), name="Grape"),
]
