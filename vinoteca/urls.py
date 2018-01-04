"""vinoteca URL Configuration"""
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.urls import include, path

from vinoteca.views import about, home
from dashboards.views import dashboards
from new_purchase.views import get_producer_country, first_new_purchase, prev_new_purchase_search,\
    prev_purchase, search_wines, get_country_viti_areas
from view.views import wine_table, wine_profile, edit_wine, edit_purchase, producer_profile,\
    country_profile, inventory, change_inventory


urlpatterns = [
    path("", home, name="Home"),
    path("home/", home, name="Home"),
    path("about/", about, name="About"),
    path("new/first-time/", first_new_purchase, name="New Purchase First"),
    path("new/prev-purchased/", prev_new_purchase_search, name="New Purchase Search"),
    path("new/get-producer-country/", get_producer_country, name="Get Producer Country JSON"),
    path("new/get-country-viti-areas/", get_country_viti_areas, name="Get Country Viti Areas JSON"),
    path("new/search-wines/", search_wines, name="Search Wines JSON"),
    path("wines/<int:wine_id>/", wine_profile, name="Wine Profile"),
    path("wines/<int:wine_id>/new-purchase/", prev_purchase, name="New Purchase Wine"),
    path("wines/<int:wine_id>/edit/", edit_wine, name="Edit Wine"),
    path("wines/<int:wine_id>/edit/<int:purchase_id>/", edit_purchase, name="Edit Purchase"),
    path("wines/<int:wine_id>/change/<slug:sign>/", change_inventory, name="Change Inventory"),
    path("producers/<int:producer_id>/", producer_profile, name="Producer Profile"),
    path("regions/<int:country_id>/", country_profile, name="Country Profile"),
    path("wines/table/", wine_table, name="Wine Table"),
    path("dashboards/", dashboards, name="Dashboards"),
    path("inventory/", inventory, name="Inventory"),
    path("wines/<int:wine_id>/change/<slug:sign>/inventory/", change_inventory, name="Change Inventory from Inventory",
         kwargs={"return_to_inventory": True}),
]

# Django profiling with django debug toolbar
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
        # For user uploaded images
    ] + urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
