r"""URL configurations for the REST views which are currently only used to
GET wine data, not to modify it."""
from django.urls import path

from rest.views import grape, rest


urlpatterns = [
    path("color/", rest, kwargs={"obj_name": "color"}, name="REST Color"),
    path("region/", rest, kwargs={"obj_name": "region"}, name="REST Region"),
    path("producer/", rest, kwargs={"obj_name": "producer"}, name="REST Producer"),
    path("viti-area/", rest, kwargs={"obj_name": "viti_area"}, name="REST Viti Area"),
    path("wine-type/", rest, kwargs={"obj_name": "wine_type"}, name="REST Wine Type"),
    path("wine/", rest, kwargs={"obj_name": "wine"}, name="REST Wine"),
    path("grape/", grape, name="REST Grape")
]
