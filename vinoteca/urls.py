"""vinoteca URL Configuration"""
from django.conf import settings
from django.conf.urls import include, url

from vinoteca.views import about, home
from dashboards.views import dashboards
from new_purchase.views import get_producer_country, first_new_purchase, prev_new_purchase_search, prev_purchase,\
    search_wines
from view.views import wine_table, filter_table, sort_table, wine_profile, edit_wine, edit_purchase, producer_profile,\
    edit_producer


urlpatterns = [
    url(r"^$", home, name="Home"),
    url(r"^home/$", home, name="Home"),
    url(r"^about/$", about, name="About"),
    url(r"^new/first-time/$", first_new_purchase, name="New Purchase First"),
    url(r"^new/prev-purchased/$", prev_new_purchase_search, name="New Purchase Search"),
    url(r"^new/get-producer-country/$", get_producer_country, name="Get Producer Country JSON"),
    url(r"^new/search-wines/$", search_wines, name="Search Wines JSON"),
    url(r"^wines/(?P<wine_id>[0-9]+)/$", wine_profile, name="Wine Profile"),
    url(r"^wines/(?P<wine_id>[0-9]+)/new-purchase/$", prev_purchase, name="New Purchase Wine"),
    url(r"^wines/(?P<wine_id>[0-9]+)/edit/$", edit_wine, name="Edit Wine"),
    url(r"^wines/(?P<wine_id>[0-9]+)/edit/(?P<purchase_id>[0-9]+)/$", edit_purchase, name="Edit Purchase"),
    url(r"^wines/producers/(?P<producer_id>[0-9]+)/$", producer_profile, name="Producer Profile"),
    url(r"^wines/producers/(?P<producer_id>[0-9]+)/edit/$", edit_producer, name="Edit Producer"),
    url(r"^wines/table/$", wine_table, name="Wine Table"),
    url(r"^wines/table/sort/$", sort_table, name="Sort Wine Table"),
    url(r"^wines/table/filter/$", filter_table, name="Filter Wine Table"),
    url(r"^dashboards/", dashboards, name="Dashboards"),
]

# Django profiling with django debug toolbar
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
