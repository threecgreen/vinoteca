r"""URL configurations for the REST views which are currently only used to
GET wine data, not to modify it."""
# pylint: disable=invalid-name
from django.urls import path

from rest.views import (
    generic_all_names, region_all_names, grape, ColorList, RegionList,
    ProducerList, VitiAreaList, WineTypeList, WineList
)


app_name = "REST"
urlpatterns = [
    # Name serializers primarily used for autocomplete
    path("colors/all/", generic_all_names, kwargs={"obj_name": "color"},
         name="Get Colors JSON"),
    path("regions/all/", region_all_names, name="Get Regions JSON"),
    path("producers/all/", generic_all_names, kwargs={"obj_name": "producer"},
         name="Get Producers JSON"),
    path("stores/all/", generic_all_names, kwargs={"obj_name": "store"},
         name="Get Stores JSON"),
    path("grapes/all/", generic_all_names, kwargs={"obj_name": "grape"},
         name="Get Grapes JSON"),
    path("wine-types/all/", generic_all_names, kwargs={"obj_name": "wine-type"},
         name="Get WineTypes JSON"),
    path("viti-areas/all/", generic_all_names, kwargs={"obj_name": "viti-area"},
         name="Get VitiAreas JSON"),

    # Graph related views
    path("color/", ColorList.as_view(), name="REST Color"),
    path("region/", RegionList.as_view(), name="REST Region"),
    path("producer/", ProducerList.as_view(), name="REST Producer"),
    path("viti-area/", VitiAreaList.as_view(), name="REST Viti Area"),
    path("wine-type/", WineTypeList.as_view(), name="REST Wine Type"),
    path("wine/", WineList.as_view(), name="REST Wine"),
    path("grape/", grape, name="REST Grape"),
]
