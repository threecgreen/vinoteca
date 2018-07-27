from django.shortcuts import render

from dashboards.views import recent_purchases_dash, top_purchase_wine_types_dash
from vinoteca.utils import get_connection


def simple_page(request, page_name: str):
    context = {
        "page_name": page_name.title(),
    }
    return render(request, f"{page_name}.html", context)


def home(request):
    conn = get_connection()
    context = {
        "purchases": recent_purchases_dash(10),
        "top_wine_types": top_purchase_wine_types_dash(10),
        "page_name": "Home",
    }
    conn.close()
    return render(request, "home.html", context)
