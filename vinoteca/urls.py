"""vinoteca URL Configuration"""
# pylint: disable=invalid-name
from django.conf import settings
from django.urls import include, path, re_path
from django.views.static import serve

from dashboards.views import dashboards
from places.views import region_profile
from vinoteca.views import simple_page, home
from wine_attrs.views import wine_type_profile


urlpatterns = [
    # vinoteca app patterns
    path("", home, name="Home"),
    path("home/", home, name="Home"),
    path("about/", simple_page, name="About", kwargs={"page_name": "about"}),
    path("help/", simple_page, name="Help", kwargs={"page_name": "help"}),
    path("changelog/", simple_page, name="Changelog", kwargs={"page_name": "changelog"}),

    # Places URLs
    path("regions/<int:region_id>/", region_profile, name="Region Profile"),

    # Wine attrs URLs
    path("wine-types/<int:wine_type_id>/", wine_type_profile, name="Wine Type Profile"),

    # Other pages
    path("dashboards/", dashboards, name="Dashboards"),
    # path("inventory/", inventory, name="Inventory"),

    # Namespace URLs
    path("rest/", include("rest.urls", namespace="REST")),
    path("wines/", include("wines.urls", namespace="Wines")),
    path("producers/", include("producers.urls", namespace="Producers")),

    # Internal URLs
    re_path("^media/(?P<path>.*)$", serve, {"document_root": settings.MEDIA_ROOT}),
    re_path("^js_error_hook/", include("django_js_error_hook.urls")),
]
