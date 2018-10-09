r"""Contains views (business logic) for allowing users to create new wines and
new purchases. Also contains logic for searching existing wines before adding a
 new purchase and some JSON response functions that may be moved to REST."""
from pathlib import Path

import attr
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string

from view.views import WineProfileView
from vinoteca.image import UserImage
from vinoteca.models import Colors, Stores, Wines
from vinoteca.views import get_connection
from vinoteca.utils import (
    g_or_c_region, g_or_c_producer, g_or_c_store, g_or_c_wine_type, c_wine,
    c_purchase, empty_to_none, g_or_c_viti_area, default_vintage_year,
    handle_grapes
)


def search_wines(request) -> JsonResponse:
    r"""Render a search results table inserted into a JSON object for live
    search results of existing wines."""
    @attr.s
    class WineSearchResult(object):
        r"""Query result attrs object for wine search results. Makes for easier
        and clearer access to wine attributes in the template."""
        id = attr.ib(type=int)
        color = attr.ib(type=str)
        name = attr.ib(type=str)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        wine_type = attr.ib(type=str)
        viti_area = attr.ib(type=str)

    conn = get_connection()
    cursor = conn.cursor()
    wine_type = empty_to_none(request.GET.get("wine_type"))
    color = empty_to_none(request.GET.get("color"))
    producer = empty_to_none(request.GET.get("producer"))
    region = empty_to_none(request.GET.get("region"))
    viti_area = empty_to_none(request.GET.get("viti_area"))
    params = [color, wine_type, producer, region, viti_area]
    params = [param for param in params if param is not None]
    if params:
        query = """
            SELECT
                w.id
                , cl.name
                , w.name
                , pro.name
                , r.name
                , t.name
                , v.name
            FROM wines w
                LEFT JOIN producers pro ON w.producer_id = pro.id
                LEFT JOIN regions r ON pro.region_id = r.id
                LEFT JOIN wine_types t ON w.wine_type_id = t.id
                LEFT JOIN colors cl ON w.color_id = cl.id
                LEFT JOIN viti_areas v on w.viti_area_id = v.id
            WHERE
                t.name LIKE coalesce(?, t.name)
                AND cl.name LIKE coalesce(?, cl.name)
                AND pro.name LIKE coalesce(?, pro.name)
                AND r.name LIKE coalesce(?, r.name)
                and (
                    ? is null or ? like v.name
                );
        """
        results = cursor.execute(query, (wine_type, color, producer, region,
                                         viti_area, viti_area)).fetchall()
        context = {
            "wine_results": [WineSearchResult(*item) for item in results]
        }
        if context["wine_results"] is not None:
            conn.close()
            return JsonResponse({
                "results": render_to_string("search_results.html", context)
            })
    conn.close()
    return JsonResponse({"results": []})


#pylint: disable=too-many-locals
def insert_new_purchase_and_wine(request):
    r"""Handles logic for inserting a wine purchased for the first time and
    therefore new Wines and Purchases objects are created."""
    store = empty_to_none(request.POST.get("store"))
    purchase_date = empty_to_none(request.POST.get("purchase-date"))
    wine_type = empty_to_none(request.POST.get("wine-type"))
    producer = empty_to_none(request.POST.get("producer"))
    region = empty_to_none(request.POST.get("region"))
    description = empty_to_none(request.POST.get("description"))
    price = empty_to_none(request.POST.get("price"))
    viti_area = empty_to_none(request.POST.get("viti-area"))
    if price:
        price = float(price)
    why = empty_to_none(request.POST.get("why"))
    memo = empty_to_none(request.POST.get("memo"))
    notes = empty_to_none(request.POST.get("notes"))
    name = empty_to_none(request.POST.get("name"))
    color = empty_to_none(request.POST.get("color"))
    if request.POST.get("has-rating"):
        rating = empty_to_none(request.POST.get("rating"), int)
    else:
        rating = None
    vintage = empty_to_none(request.POST.get("vintage"), int)
    quantity = empty_to_none(request.POST.get("quantity"), int)
    inventory = quantity if request.POST.get("add-to-inventory") else 0
    color = empty_to_none(Colors.objects.get(name=color))
    store = g_or_c_store(store)
    wine_type = g_or_c_wine_type(wine_type)
    region = g_or_c_region(region)
    producer = g_or_c_producer(producer, region)
    viti_area = g_or_c_viti_area(viti_area, producer.region)
    wine = c_wine(description, notes, name, producer, wine_type, color, rating,
                  inventory, viti_area, why)
    c_purchase(wine, store, price, memo, purchase_date, vintage, quantity)
    # Grape composition
    handle_grapes(request, wine)

    if request.FILES.get("wine-image"):
        wine_image = request.FILES["wine-image"]
        file_sys = FileSystemStorage()
        file_sys.save(str(wine.id) + ".png", wine_image)
        # Convert to PNG to match extension
        img = UserImage((Path(settings.MEDIA_ROOT) / f"{wine.id}.png").resolve())
        img.convert_to_png()

    return redirect("Wine Profile", wine_id=wine.id)


def first_new_purchase(request):
    r"""General view for inserting a new purchase. If is a post request,
    delegates to insert_new_purchase_and_wine function."""
    if request.method == "POST":
        return insert_new_purchase_and_wine(request)
    context = {
        "colors": Colors.objects.all(),
        "default_vintage": default_vintage_year(),
        "page_name": "New Purchase",
    }
    return render(request, "first_time_wine.html", context)


def prev_new_purchase_search(request):
    r"""Search page view. Search logic is implemented in search_wines function,
    not here."""
    context = {
        "colors": Colors.objects.all(),
        "page_name": "New Purchase",
    }
    return render(request, "prev_wine_search.html", context)


class NewPurchaseExistingWineView(WineProfileView):
    r"""Purchase for viewing a purchase of wine."""
    template_name = "prev_wine.html"

    @staticmethod
    def post(request, wine_id: int):
        r"""Logic for handling a new wine purchase. Creates a new Purchases
        object."""
        store = empty_to_none(request.POST.get("store"))
        purchase_date = empty_to_none(request.POST.get("purchase-date"))
        price = empty_to_none(request.POST.get("price"))
        if price:
            price = float(price)
        memo = empty_to_none(request.POST.get("memo"))
        vintage = int(request.POST.get("vintage")) if request.POST.get("vintage") else None
        quantity = int(request.POST.get("quantity"))
        store = g_or_c_store(store)
        wine = Wines.objects.get(id=wine_id)
        c_purchase(wine, store, price, memo, purchase_date, vintage, quantity)
        return redirect("Wine Profile", wine_id=wine_id)

    def get(self, request, wine_id: int):
        context = self.get_base_context(wine_id)
        context["stores"] = Stores.objects.all()
        context["default_vintage"] = default_vintage_year()
        return render(request, self.template_name, context)
