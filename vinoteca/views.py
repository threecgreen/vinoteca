from django.shortcuts import render
from dashboards.views import recent_purchases_dash, top_purchase_wine_types_dash
from vinoteca.__init__ import __version__
from vinoteca.utils import get_connection


def simple_page(request, page_name:str):
    context = {
        "page_name": page_name.title(),
        "version": __version__,
    }
    return render(request, f"{page_name}.html", context)


def home(request):
    conn = get_connection()
    context = {
        "purchases": recent_purchases_dash(conn, 10),
        "top_wine_types": top_purchase_wine_types_dash(conn, 10),
        "page_name": "Home",
        "version": __version__,
    }
    conn.close()
    return render(request, "home.html", context)
