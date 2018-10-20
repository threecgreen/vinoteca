from pathlib import Path

from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.shortcuts import redirect, render
from django.views import View

from vinoteca.image import UserImage
from vinoteca.models import Colors, Stores, Wines
from vinoteca.utils import (
    empty_to_none, g_or_c_store, g_or_c_wine_type, g_or_c_producer,
    g_or_c_region, c_wine, g_or_c_viti_area, handle_grapes, c_purchase,
    default_vintage_year
)
from wines.read import WineProfileView


class NewWineView(View):
    #pylint: disable=too-many-locals
    def get(self, request):
        context = {
            "colors": Colors.objects.all(),
            "default_vintage": default_vintage_year(),
            "page_name": "New Wine",
        }
        return render(request, "new_wine.html", context)

    def post(self, request):
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


class NewPurchaseView(WineProfileView):
    r"""Purchase for viewing a purchase of wine."""
    template_name = "new_purchase.html"

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