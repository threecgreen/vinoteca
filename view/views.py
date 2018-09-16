r"""Contains views for viewing, interacting and editing wine information."""
# pylint: disable=unused-argument
from pathlib import Path

import attr
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.db.models import Count, Max, Sum, Avg
from django.shortcuts import render, redirect
from django.views import View

from vinoteca.models import (
    Colors, Regions, Grapes, Producers, Purchases, Stores, Wines, WineTypes,
    WineGrapes, VitiAreas
)
from vinoteca.utils import (
    get_connection, int_to_date, date_str_to_int, g_or_c_wine_type,
    g_or_c_store, g_or_c_producer, g_or_c_region, flag_exists,
    empty_to_none, g_or_c_viti_area, get_region_flags, convert_to_png,
    handle_grapes
)


def wine_table(request):
    r"""View for viewing all wines together in a tabular, filterable format."""
    @attr.s
    class WineTableDatum(object):
        r"""Attrs object for wine table data. Each instance contains the
        information required about one wine for one row in the table."""
        id = attr.ib(type=int)
        description = attr.ib(type=str)
        rating = attr.ib(type=int)
        region = attr.ib(type=str)
        producer = attr.ib(type=str)
        name = attr.ib(type=str)
        type = attr.ib(type=str)
        color = attr.ib(type=str)
        inventory = attr.ib(type=int)
        vintage = attr.ib(type=int)
        viti_area = attr.ib(type=str)
        producer_id = attr.ib(type=int)
        region_id = attr.ib(type=int)
        wine_type_id = attr.ib(type=int)

    wine_query = """
        SELECT
            w.id
            , w.description
            , w.rating
            , r.name
            , p.name
            , w.name
            , wt.name
            , c2.name
            , w.inventory
            , pu.vintage
            , v.name
            , p.id
            , r.id
            , wt.id
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN regions r ON p.region_id = r.id
            LEFT JOIN colors c2 ON w.color_id = c2.id
            LEFT JOIN wine_types wt ON w.wine_type_id = wt.id
            LEFT JOIN purchases pu ON pu.wine_id = w.id
            LEFT JOIN (
                SELECT
                    id
                    , max(date) as recent_purchase
                FROM purchases
                GROUP BY id
            ) as sub on pu.id = sub.id
            LEFT JOIN viti_areas v on w.viti_area_id = v.id
        GROUP BY w.id
        ORDER BY sub.recent_purchase DESC;
    """
    conn = get_connection()
    cursor = conn.cursor()
    wines = [WineTableDatum(*row) for row in cursor.execute(wine_query).fetchall()]
    conn.close()
    context = {
        "wines": wines,
        "page_name": "Wine Table",
    }
    return render(request, "wines_table.html", context)


class WineProfileView(View):
    template_name = "wine_profile_base.html"

    def get_base_context(self, wine_id: int, do_purchases: bool = True):
        wine = Wines.objects \
            .prefetch_related("wine_type", "color", "producer", "producer__region",
                            "viti_area") \
            .get(id=wine_id)
        # Get the vintage of the most recent purchase
        recent_vintage_query = """
                    SELECT
                        p.vintage
                    FROM purchases p
                    INNER JOIN (
                        SELECT
                            max(date) as max_date
                        FROM purchases
                        WHERE wine_id = ?
                    ) sub ON sub.max_date = p.date
                    WHERE wine_id = ? ;
                """
        conn = get_connection()
        cursor = conn.cursor()
        recent_vintage = cursor.execute(recent_vintage_query, (wine_id, wine_id)).fetchone()
        conn.close()
        grapes = (WineGrapes.objects
                .filter(wine__id=wine.id)
                .order_by("-percent", "grape__name"))
        has_img = (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").is_file()

        context = {
            "grapes": list(grapes),
            "recent_vintage": recent_vintage[0] if recent_vintage else None,
            "wine": wine,
            "has_img": has_img,
            "page_name": f"{wine.name} {wine.wine_type}" if wine.name else wine.wine_type,
        }
        if do_purchases:
            context["purchases"] = Purchases.objects.filter(wine__id=wine.id) \
                .prefetch_related("store") \
                .order_by("-date")
        return context

    def get(self, request, wine_id: int):
        context = self.get_base_context(wine_id)
        return render(request, self.template_name, context)


class EditWineView(WineProfileView):
    template_name = "edit_wine.html"

    def get(self, request, wine_id: int):
        r"""View for editing attributes of a wine."""
        context = self.get_base_context(wine_id)
        context["colors"] = Colors.objects.all()
        return render(request, self.template_name, context)

    def post(self, request, wine_id: int):
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
            convert_to_png((Path(settings.MEDIA_ROOT) / f"{wine_id}.png").resolve())

        return redirect("Wine Profile", wine_id=wine_id)


class EditPurchaseView(WineProfileView):
    template_name = "edit_purchases.html"

    def get(self, request, wine_id: int, purchase_id: int):
        context = self.get_base_context(wine_id, do_purchases=False)
        purchase = Purchases.objects.get(id=purchase_id)
        context["purchase"] = purchase
        return render(request, self.template_name, context)

    def post(self, request, wine_id: int, purchase_id: int):
        purchase = Purchases.objects.get(id=purchase_id)
        purchase.date = date_str_to_int(request.POST.get("purchase-date"))
        purchase.quantity = empty_to_none(request.POST.get("quantity"), int)
        purchase.price = empty_to_none(request.POST.get("price"), float)
        purchase.vintage = empty_to_none(request.POST.get("vintage"), int)
        purchase.memo = empty_to_none(request.POST.get("memo"))
        purchase.store = g_or_c_store(request.POST.get("store"))
        purchase.save()
        return redirect("Edit Wine", wine_id=wine_id)


def producer_profile(request, producer_id: int):
    r"""View for wine producer information."""
    producer = Producers.objects.get(id=producer_id)
    wines = Wines.objects.filter(producer__id=producer.id) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .prefetch_related("wine_type", "color")
    context = {
        "producer": producer,
        "wines": list(wines),
        "page_name": "Producer Profile",
    }
    return render(request, "producer_profile.html", context)


def edit_producer(request, producer_id: int):
    r"""View for editing wine producer information."""
    if request.method == "POST":
        producer = Producers.objects.get(id=producer_id)
        region = request.POST.get("region")
        producer.name = request.POST.get("producer")
        producer.region = g_or_c_region(region)
        producer.save()
        return redirect("Producer Profile", producer_id=producer_id)
    context = {
        "producer": Producers.objects.get(id=producer_id),
        "page_name": "Edit Producer",
    }
    return render(request, "edit_producer.html", context)


def region_profile(request, region_id: int):
    r"""View for viewing information about the wines, producers and viticultural
    areas of a particular region."""
    region = Regions.objects.get(id=region_id)
    viti_areas = VitiAreas.objects.filter(region__id=region.id) \
        .annotate(total_quantity=Count("wines__id")) \
        .annotate(avg_rating=Avg("wines__rating")) \
        .order_by("name")
    wines = Wines.objects.filter(producer__region__id=region.id) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .prefetch_related("producer", "wine_type", "color") \
        .order_by("-last_purchased_date")
    context = {
        "region": region,
        "flag_exists": flag_exists(region.name),
        "wines": list(wines),
        "viti_areas": list(viti_areas),
        "page_name": "Region Profile",
    }
    return render(request, "region_profile.html", context)


def inventory(request):
    r"""View what wines and how many bottles are in the user's inventory/
    collection."""
    @attr.s
    class InventoryItem(object):
        r"""Denotes one row of the table."""
        color = attr.ib(type=str)
        name = attr.ib(type=str)
        type = attr.ib(type=str)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        vintage = attr.ib(type=int)
        last_purchase_date = attr.ib(type=str)
        inventory_cnt = attr.ib(type=int)
        wine_id = attr.ib(type=int)
        producer_id = attr.ib(type=int)
        region_id = attr.ib(type=int)
        wine_type_id = attr.ib(type=int)

    query = """
        SELECT
            c.name
            , w.name
            , wt.name
            , p.name
            , r.name
            , p3.vintage
            , sub.last_purchase_date
            , w.inventory
            , w.id
            , p.id
            , r.id
            , wt.id
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN regions r ON p.region_id = r.id
            LEFT JOIN colors c ON w.color_id = c.id
            LEFT JOIN wine_types wt ON w.wine_type_id = wt.id
            LEFT JOIN (
                SELECT
                    w2.id
                    , max(p2.date) as last_purchase_date
                FROM wines w2
                    INNER JOIN purchases p2 ON w2.id = p2.wine_id
                GROUP BY w2.id
            ) AS sub ON sub.id = w.id
            LEFT JOIN purchases p3 ON w.id = p3.wine_id AND p3.date = sub.last_purchase_date
        WHERE w.inventory > 0
        ORDER BY sub.last_purchase_date DESC;
    """
    connection = get_connection()
    cursor = connection.cursor()
    wine_inventory = []
    for item in cursor.execute(query).fetchall():
        # Convert YYYYMMDD date format to date object for formatting
        purchase_date = int_to_date(item[6])
        wine_inventory.append(InventoryItem(*item[:6], purchase_date, *item[7:]))
    context = {
        "inventory": wine_inventory,
        "page_name": "Inventory",
    }
    connection.close()
    return render(request, "inventory.html", context)


def change_inventory(request, wine_id: int, sign: str,
                     return_to_inventory: bool = False):
    r"""Change the current inventory number for a wine."""
    assert sign in ("add", "subtract")
    wine = Wines.objects.get(id=wine_id)
    if sign == "add":
        wine.inventory += 1
    else:
        wine.inventory -= 1
    wine.save()
    if return_to_inventory:
        return redirect("Inventory")
    return redirect("Wine Profile", wine_id=wine.id)


def delete_wine(request, wine_id: int):
    r"""View for deleting a wine."""
    wine = Wines.objects.get(id=wine_id)
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    wine_grapes.delete()
    purchases = Purchases.objects.filter(wine=wine)
    purchases.delete()
    # Determine if producer was created for this wine
    if Wines.objects.filter(producer__id=wine.producer.id).count() == 1:
        wine.producer.delete()
    wine.delete()
    return redirect("Wine Table")


def delete_purchase(request, wine_id: int, purchase_id: int):
    r"""View for handling delete purchase request."""
    purchase = Purchases.objects.get(id=purchase_id)
    if purchase.wine.id != wine_id:
        raise ValueError("Wine id and purchase id did not match.")
    purchase.delete()
    return redirect("Edit Wine", wine_id=wine_id)


def wine_type_profile(request, wine_type_id: int):
    r"""View for profiles of types of wine or wine types."""
    wine_type = WineTypes.objects.get(id=wine_type_id)
    wines = Wines.objects.filter(wine_type__id=wine_type_id) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .prefetch_related("producer", "color", "producer__region") \
        .order_by("-last_purchased_date")
    context = {
        "wines": wines,
        "wine_type": wine_type,
        "page_name": "Wine Type Profile",
    }
    return render(request, "wine_type_profile.html", context)
