r"""Contains views for the home page and the about page."""
from django.shortcuts import render

from dashboards.views import recent_purchases, top_wine_types
from vinoteca.utils import get_connection


def simple_page(request, page_name: str):
    r"""View for any pages with no dynamic content."""
    context = {
        "page_name": page_name.title(),
    }
    return render(request, f"{page_name}.html", context)


def home(request):
    r"""View for home page which includes two dashboards."""
    conn = get_connection()
    context = {
        "purchases": recent_purchases(10),
        "top_wine_types": top_wine_types(10),
        "page_name": "Home",
    }
    conn.close()
    return render(request, "home.html", context)
