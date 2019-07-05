r"""URL configurations for the REST views which are currently only used to
GET wine data, not to modify it."""
# pylint: disable=invalid-name
from django.urls import path

from dashboards.views import InventoryView
from places.views import RegionView, VitiAreaView, VitiAreaStats, region_all_names
from producers.views import ProducerView
from rest.views import generic_all_names, write_client_side_logs
from wine_attrs.views import ColorList, GrapeView, WineTypeView, WineGrapeList, PurchaseView
from wines.read import WineList, SearchWines
from wines.update import rest_change_inventory


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

    path("colors/", ColorList.as_view(), name="Color"),
    path("regions/", RegionView.as_view(), name="Region-Get"),
    path("regions/<int:id>/", RegionView.as_view(), name="Region-Put"),
    path("producers/", ProducerView.as_view(), name="Producer-Get"),
    path("producers/<int:id>/", ProducerView.as_view(), name="Producer-Put"),
    path("viti-areas/", VitiAreaView.as_view(), name="Viti Area-Get"),
    path("viti-areas/<int:id>/", VitiAreaView.as_view(), name="Viti Area-Put"),
    path("viti-areas/stats/", VitiAreaStats.as_view(), name="Viti Area Stats"),
    path("wine-types/", WineTypeView.as_view(), name="Wine Type-Get"),
    path("wine-types/<int:id>/", WineTypeView.as_view(), name="Wine Type-Put"),
    path("wines/", WineList.as_view(), name="Wine"),
    path("wines/inventory/", InventoryView.as_view({'get': 'list'}), name="Wine Inventory"),
    path("wines/search/", SearchWines.as_view(), name="Search Wines"),
    # This isn't super resty and should be refactored
    path("wines/<int:wine_id>/change/<slug:sign>/", rest_change_inventory, name="Change Inventory"),
    path("wine-grapes/", WineGrapeList.as_view(), name="Wine Grape"),
    path("grapes/", GrapeView.as_view(), name="Grape-Get"),
    path("grapes/<int:id>/", GrapeView.as_view(), name="Grape-Put"),
    path("purchases/", PurchaseView.as_view()),

    # Logs
    path("logs/client/", write_client_side_logs)
]
