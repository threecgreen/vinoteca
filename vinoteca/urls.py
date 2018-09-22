"""vinoteca URL Configuration"""
# pylint: disable=invalid-name
from django.conf import settings
from django.urls import include, path, re_path
from django.views.static import serve

from vinoteca.views import simple_page, home
from dashboards.views import dashboards
from new_purchase.views import (
    prev_new_purchase_search, first_new_purchase, search_wines,
    NewPurchaseExistingWineView
)
from view.views import (
    delete_wine, delete_purchase, EditPurchaseView, change_inventory,
    edit_producer, producer_profile, region_profile, wine_type_profile,
    wine_table, inventory, WineProfileView, EditWineView
)

wine_patterns = [
    path("<int:wine_id>/", WineProfileView.as_view(), name="Wine Profile"),
    path("<int:wine_id>/new-purchase/", NewPurchaseExistingWineView.as_view(),
         name="New Purchase Wine"),
    path("<int:wine_id>/edit/", EditWineView.as_view(), name="Edit Wine"),
    path("<int:wine_id>/edit/delete/confirmed/", delete_wine, name="Delete Wine"),
    path("<int:wine_id>/edit/<int:purchase_id>/", EditPurchaseView.as_view(), name="Edit Purchase"),
    path("<int:wine_id>/edit/<int:purchase_id>/delete/", delete_purchase,
         name="Delete Purchase"),
    path("<int:wine_id>/change/<slug:sign>/", change_inventory, name="Change Inventory"),
    path("<int:wine_id>/change/<slug:sign>/inventory/", change_inventory,
         name="Change Inventory from Inventory", kwargs={"return_to_inventory": True}),
]

urlpatterns = [
    # vinoteca app patterns
    path("", home, name="Home"),
    path("home/", home, name="Home"),
    path("about/", simple_page, name="About", kwargs={"page_name": "about"}),
    path("help/", simple_page, name="Help", kwargs={"page_name": "help"}),
    path("changelog/", simple_page, name="Changelog", kwargs={"page_name": "changelog"}),

    # wine patterns
    path("wines/", include(wine_patterns)),

    # new purchase patterns
    path("new/first-time/", first_new_purchase, name="New Purchase First"),
    path("new/prev-purchased/", prev_new_purchase_search, name="New Purchase Search"),

    # Search
    path("new/search-wines/", search_wines, name="Search Wines JSON"),

    # Other profiles
    path("producers/<int:producer_id>/", producer_profile, name="Producer Profile"),
    path("producers/<int:producer_id>/edit/", edit_producer, name="Edit Producer"),
    path("regions/<int:region_id>/", region_profile, name="Region Profile"),
    path("wine-types/<int:wine_type_id>/", wine_type_profile, name="Wine Type Profile"),

    # Other pages
    path("wines/table/", wine_table, name="Wine Table"),
    path("dashboards/", dashboards, name="Dashboards"),
    path("inventory/", inventory, name="Inventory"),

    # Rest URLs
    path("rest/", include("rest.urls"), name=""),

    # Internal URLs
    re_path("^media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT}),
    re_path("^js_error_hook/", include("django_js_error_hook.urls")),
]
