"""vinoteca URL Configuration"""
# pylint: disable=invalid-name
from django.conf import settings
from django.urls import include, path, re_path
from django.views.static import serve

from dashboards.views import dashboards
from vinoteca.views import simple_page, home


urlpatterns = [
    # vinoteca app patterns
    path("", home, name="Home"),
    path("home/", home, name="Home"),
    path("about/", simple_page, name="About", kwargs={"page_name": "about"}),
    path("help/", simple_page, name="Help", kwargs={"page_name": "help"}),
    path("changelog/", simple_page, name="Changelog", kwargs={"page_name": "changelog"}),

    path("<int:wine_id>/change/<slug:sign>/", change_inventory, name="Change Inventory"),
    path("<int:wine_id>/change/<slug:sign>/inventory/", change_inventory,
         name="Change Inventory from Inventory", kwargs={"return_to_inventory": True}),

    # Other profiles
    path("producers/<int:producer_id>/", producer_profile, name="Producer Profile"),
    path("producers/<int:producer_id>/edit/", edit_producer, name="Edit Producer"),
    path("regions/<int:region_id>/", region_profile, name="Region Profile"),
    path("wine-types/<int:wine_type_id>/", wine_type_profile, name="Wine Type Profile"),

    # Other pages
    path("dashboards/", dashboards, name="Dashboards"),
    path("inventory/", inventory, name="Inventory"),

    # Rest URLs
    path("rest/", include("rest.urls"), name=""),
    path("wines/", include("wines.urls"), name=""),

    # Internal URLs
    re_path("^media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT}),
    re_path("^js_error_hook/", include("django_js_error_hook.urls")),
]
