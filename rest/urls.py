r"""URL configurations for the REST views which are currently only used to
GET wine data, not to modify it."""
# pylint: disable=invalid-name
from django.urls import path

from rest.views import grape, generic_serialize, generic_all_names, region_all_names


urlpatterns = [
    path("color/", generic_serialize, kwargs={"obj_name": "color"}, name="REST Color"),
    path("region/", generic_serialize, kwargs={"obj_name": "region"}, name="REST Region"),
    path("producer/", generic_serialize, kwargs={"obj_name": "producer"}, name="REST Producer"),
    path("viti-area/", generic_serialize, kwargs={"obj_name": "viti_area"}, name="REST Viti Area"),
    path("wine-type/", generic_serialize, kwargs={"obj_name": "wine_type"}, name="REST Wine Type"),
    path("wine/", generic_serialize, kwargs={"obj_name": "wine"}, name="REST Wine"),
    path("grape/", grape, name="REST Grape"),
    # Name serializers
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
]
