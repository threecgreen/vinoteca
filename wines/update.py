"""Views for updating or editing wine and wine purchase data."""
from pathlib import Path

from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.shortcuts import render, redirect

from vinoteca.image import UserImage
from vinoteca.models import Colors, Purchases, Wines
from vinoteca.utils import (
    date_str_to_int, g_or_c_wine_type, g_or_c_store, g_or_c_producer,
    g_or_c_region, empty_to_none, g_or_c_viti_area, get_logger
)
from wines.read import WineProfileView
from wine_attrs.views import handle_grapes



LOGGER = get_logger("wines.update")


class EditWineView(WineProfileView):
    r"""View for editing a particular wine. Inherits from WineProfileView to
    access get_base_context."""
    template_name = "edit_wine.html"

    def get(self, request, wine_id: int):
        r"""View for editing attributes of a wine."""
        context = self.get_base_context(wine_id)
        context["colors"] = Colors.objects.all()
        return render(request, self.template_name, context)

    @staticmethod
    def post(request, wine_id: int):
        r"""View for posting edits to a wine."""
        LOGGER.debug(f"Received the following POST data for updating a wine:\n{request.POST}")
        wine = Wines.objects.get(id=wine_id)
        producer = request.POST.get("producer")
        region = empty_to_none(request.POST.get("region"))
        wine.description = empty_to_none(request.POST.get("description"))
        wine.notes = empty_to_none(request.POST.get("notes"))
        wine.name = empty_to_none(request.POST.get("name"))
        wine.why = empty_to_none(request.POST.get("why"))
        viti_area = empty_to_none(request.POST.get("viti-area"))
        if request.POST.get("has-rating"):
            wine.rating = empty_to_none(request.POST.get("rating"), int)
        else:
            wine.rating = None
        wine.color = Colors.objects.get(name=request.POST.get("color"))
        wine.wine_type = g_or_c_wine_type(request.POST.get("wine-type"))
        region = g_or_c_region(region) if region else None
        wine.producer = g_or_c_producer(producer, region)
        wine.viti_area = g_or_c_viti_area(viti_area, wine.producer.region) if viti_area else None
        wine.save()

        # Grape composition
        handle_grapes(request, wine)

        # Wine image changes
        if request.FILES.get("wine-image"):
            wine_image = request.FILES["wine-image"]
            # Remove old image if it exists
            if (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").is_file():
                (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").unlink()
            file_sys = FileSystemStorage()
            file_sys.save(str(wine.id) + ".png", wine_image)
            # Convert to PNG to match extension
            img = UserImage((Path(settings.MEDIA_ROOT) / f"{wine_id}.png").resolve())
            img.convert_to_png()

        return redirect("Wines:Wine Profile", wine_id=wine_id)


class EditPurchaseView(WineProfileView):
    r"""View for editing the purchase of a wine."""
    template_name = "edit_purchase.html"

    # pylint: disable=arguments-differ
    def get(self, request, wine_id: int, purchase_id: int):
        r"""Get the edit page."""
        context = self.get_base_context(wine_id, do_purchases=False)
        purchase = Purchases.objects.get(id=purchase_id)
        context["purchase"] = purchase
        return render(request, self.template_name, context)

    @staticmethod
    def post(request, wine_id: int, purchase_id: int):
        r"""Post edits to the purchase."""
        LOGGER.debug(f"Received the following POST data for updating a purchase:\n{request.POST}")
        purchase = Purchases.objects.get(id=purchase_id)
        purchase.date = date_str_to_int(request.POST.get("purchase-date"))
        purchase.quantity = empty_to_none(request.POST.get("quantity"), int)
        purchase.price = empty_to_none(request.POST.get("price"), float)
        purchase.vintage = empty_to_none(request.POST.get("vintage"), int)
        purchase.memo = empty_to_none(request.POST.get("memo"))
        purchase.store = g_or_c_store(request.POST.get("store"))
        purchase.save()
        return redirect("Wines:Edit Wine", wine_id=wine_id)


def rest_change_inventory(_, wine_id: int, sign: str):
    _change_inventory(wine_id, sign)
    return JsonResponse({"changed": True})


# TODO: require post once wine profile is on react
# @require_POST
# pylint: disable=unused-argument
def change_inventory(request, wine_id: int, sign: str,
                     return_to_inventory: bool = False):
    r"""Change the current inventory number for a wine."""
    _change_inventory(wine_id, sign)
    if return_to_inventory:
        return redirect("Inventory")
    wine = Wines.objects.get(id=wine_id)
    return redirect("Wines:Wine Profile", wine_id=wine.id)

def _change_inventory(wine_id: int, sign: str):
    assert sign in ("add", "subtract")
    wine = Wines.objects.get(id=wine_id)
    if sign == "add":
        LOGGER.debug(f"Adding one to inventory of wine with id {wine_id}")
        wine.inventory += 1
    else:
        LOGGER.debug(f"Removing one from inventory of wine with id {wine_id}")
        wine.inventory -= 1
    wine.save()
