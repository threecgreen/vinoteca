from django.urls import include, path
from graph.views import *


rest_patterns = [
    path("color/", rest, kwargs={"obj_name": "color"}, name="REST Color"),
    path("country/", rest, kwargs={"obj_name": "country"}, name="REST Country"),
    path("producer/", rest, kwargs={"obj_name": "producer"}, name="REST Producer"),
    path("viti-area/", rest, kwargs={"obj_name": "viti_area"}, name="REST Viti Area"),
    path("wine-type/", rest, kwargs={"obj_name": "wine_type"}, name="REST Wine Type"),
    path("wine/", rest, kwargs={"obj_name": "wine"}, name="REST Wine"),
    path("grape/", grape, name="REST Grape")
]

urlpatterns = [
    path("wine/<int:id>/", graph, name="Wine Graph"),
    path("rest/", include(rest_patterns)),
]
