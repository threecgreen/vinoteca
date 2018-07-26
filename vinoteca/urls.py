"""vinoteca URL Configuration"""
from django.urls import include, path, re_path
from django.views.static import serve

from vinoteca.views import simple_page, home
from dashboards.views import dashboards
from new_purchase.views import *
from graph.views import graph
from view.views import *


urlpatterns = [
    path("", home, name="Home"),
    path("home/", home, name="Home"),
    path("about/", simple_page, name="About", kwargs={"page_name": "about"}),
    path("help/", simple_page, name="Help", kwargs={"page_name": "help"}),
    path("changelog/", simple_page, name="Changelog", kwargs={"page_name": "changelog"}),
    path("new/first-time/", first_new_purchase, name="New Purchase First"),
    path("new/prev-purchased/", prev_new_purchase_search, name="New Purchase Search"),
    path("producers/region/", get_producer_region, name="Get Producer Region JSON"),
    path("regions/viti-areas/", get_region_viti_areas, name="Get Region Viti Areas JSON"),
    path("colors/all/", get_colors, name="Get Colors JSON"),
    path("regions/all/", get_regions, name="Get Regions JSON"),
    path("producers/all/", get_producers, name="Get Producers JSON"),
    path("stores/all/", get_stores, name="Get Stores JSON"),
    path("grapes/all/", get_grapes, name="Get Grapes JSON"),
    path("wine-types/all/", get_wine_types, name="Get WineTypes JSON"),
    path("viti-areas/all/", get_viti_areas, name="Get VitiAreas JSON"),
    path("new/search-wines/", search_wines, name="Search Wines JSON"),
    path("wines/<int:wine_id>/", wine_profile, name="Wine Profile"),
    path("wines/<int:wine_id>/new-purchase/", prev_purchase, name="New Purchase Wine"),
    path("wines/<int:wine_id>/edit/", edit_wine, name="Edit Wine"),
    path("wines/<int:wine_id>/edit/delete/confirmed/", delete_wine, name="Delete Wine"),
    path("wines/<int:wine_id>/edit/<int:purchase_id>/", edit_purchase, name="Edit Purchase"),
    path("wines/<int:wine_id>/edit/<int:purchase_id>/delete/", delete_purchase,
         name="Delete Purchase"),
    path("wines/<int:wine_id>/change/<slug:sign>/", change_inventory, name="Change Inventory"),
    path("producers/<int:producer_id>/", producer_profile, name="Producer Profile"),
    path("producers/<int:producer_id>/edit/", edit_producer, name="Edit Producer"),
    path("regions/<int:region_id>/", region_profile, name="Region Profile"),
    path("wines/table/", wine_table, name="Wine Table"),
    path("dashboards/", dashboards, name="Dashboards"),
    path("inventory/", inventory, name="Inventory"),
    path("wines/<int:wine_id>/change/<slug:sign>/inventory/", change_inventory,
         name="Change Inventory from Inventory",
         kwargs={"return_to_inventory": True}),
    path("wine-types/<int:wine_type_id>/", wine_type_profile, name="Wine Type Profile"),
    path("graph/test/", graph, name="Wine Graph"),
    path("graph/", include("graph.urls")),
    re_path("^media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT})
]
