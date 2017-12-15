"""vinoteca URL Configuration"""
from django.conf import settings
from django.conf.urls import url
from django.urls import include, path

from vinoteca.views import about, home
from dashboards.views import dashboards
from new_purchase.views import get_producer_country, first_new_purchase, prev_new_purchase_search, prev_purchase,\
    search_wines
from view.views import wine_table, filter_table, sort_table, wine_profile, edit_wine, edit_purchase, producer_profile,\
    edit_producer, country_profile, edit_country, store_profile, edit_store


urlpatterns = [
    path("", home, name="Home"),
    path("home/", home, name="Home"),
    path("about/", about, name="About"),
    path("new/first-time/", first_new_purchase, name="New Purchase First"),
    path("new/prev-purchased/", prev_new_purchase_search, name="New Purchase Search"),
    path("new/get-producer-country/", get_producer_country, name="Get Producer Country JSON"),
    path("new/search-wines/", search_wines, name="Search Wines JSON"),
    path("wines/<int:wine_id>/", wine_profile, name="Wine Profile"),
    path("wines/<int:wine_id>/new-purchase/", prev_purchase, name="New Purchase Wine"),
    path("wines/<int:wine_id>/edit/", edit_wine, name="Edit Wine"),
    path("wines/<int:wine_id>/edit/<int:purchase_id>/", edit_purchase, name="Edit Purchase"),
    path("producers/<int:producer_id>/", producer_profile, name="Producer Profile"),
    # path("producers/<int:producer_id>/edit/", edit_producer, name="Edit Producer"),
    path("regions/<int:country_id>/", country_profile, name="Country Profile"),
    # path("regions/<int:country_id>/edit/", edit_country, name="Edit Country"),
    path("stores/<int:store_id>/", store_profile, name="Store Profile"),
    # path("stores/<int:store_id>/edit/", edit_store, name="Edit Store"),
    path("wines/table/", wine_table, name="Wine Table"),
    path("wines/table/sort/", sort_table, name="Sort Wine Table"),
    path("wines/table/filter/", filter_table, name="Filter Wine Table"),
    path("dashboards/", dashboards, name="Dashboards"),
]

# Django profiling with django debug toolbar
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
