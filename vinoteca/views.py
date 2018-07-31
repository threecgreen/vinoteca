from django.shortcuts import render

from dashboards.views import recent_purchases, top_wine_types
from vinoteca.utils import get_connection, wine_count


def simple_page(request, page_name: str):
    context = {
        "page_name": page_name.title(),
    }
    return render(request, f"{page_name}.html", context)


def home(request):
    conn = get_connection()
    context = {
        "purchases": recent_purchases(10),
        "top_wine_types": top_wine_types(10),
        "page_name": "Home",
        "wine_count": wine_count(),
    }
    conn.close()
    return render(request, "home.html", context)
