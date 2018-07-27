import attr
from datetime import date
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.db.models import Count, Max
from django.shortcuts import render, redirect
from pathlib import Path
from vinoteca import __version__
from vinoteca.models import Colors, Regions, Grapes, Producers, Purchases, \
    Stores, Wines, WineTypes, WineGrapes, VitiAreas
from vinoteca.utils import get_connection, int_to_date, date_str_to_int, g_or_c_wine_type,\
    g_or_c_store, g_or_c_producer, g_or_c_region, flag_exists,\
    empty_to_none, c_or_u_wine_grapes, g_or_c_viti_area, get_region_flags, \
    convert_to_png


# TODO: use rest framework to get rid of boilerplate
def get_colors(request) -> JsonResponse:
    return JsonResponse({color.name: None for color in Colors.objects.all()})


def get_regions(request) -> JsonResponse:
    region_flags = get_region_flags()
    regions = {}
    for region in Regions.objects.all():
        regions[region.name] = f"/static/img/flags/{region.name}.svg" if region.name in region_flags else None
    return JsonResponse(regions)


def get_producers(request) -> JsonResponse:
    return JsonResponse({producer.name: None for producer in Producers.objects.all()})


def get_stores(request) -> JsonResponse:
    return JsonResponse({store.name: None for store in Stores.objects.all()})


def get_grapes(request) -> JsonResponse:
    return JsonResponse({grape.name: None for grape in Grapes.objects.all()})


def get_wine_types(request) -> JsonResponse:
    return JsonResponse({wine_type.name: None for wine_type in WineTypes.objects.all()})


def get_viti_areas(request) -> JsonResponse:
    return JsonResponse({viti_area.name: None for viti_area in VitiAreas.objects.all()})


def wine_table(request):
    @attr.s
    class WineTableDatum(object):
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
        "version": __version__,
    }
    return render(request, "wines_table.html", context)


def wine_profile_base(wine_id: int, do_purchases: bool=True):
    @attr.s
    class WineProfile(object):
        id = attr.ib(type=int)
        notes = attr.ib(type=str)
        description = attr.ib(type=str)
        rating = attr.ib(type=int)
        name = attr.ib(type=str)
        color = attr.ib(type=str)
        wine_type = attr.ib(type=str)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        producer_id = attr.ib(type=int)
        region_id = attr.ib(type=int)
        inventory = attr.ib(type=int)
        viti_area = attr.ib(type=str)
        why = attr.ib(type=str)
        wine_type_id = attr.ib(type=int)

    @attr.s
    class Purchase(object):
        date = attr.ib(type=date)
        quantity = attr.ib(type=int)
        price = attr.ib(type=float)
        vintage = attr.ib(type=int)
        store = attr.ib(type=str)
        memo = attr.ib(type=str)
        id = attr.ib(type=int)

    wine = Wines.objects.get(id=wine_id)
    if wine:
        wine_query = """
            SELECT
                w.notes
                , w.description
                , w.rating
                , w.name
                , cl.name
                , t.name
                , p.name
                , r.name
                , p.id
                , p.region_id
                , w.inventory
                , v.name
                , w.why
                , t.id
            FROM wines w
                LEFT JOIN wine_types t ON w.wine_type_id = t.id
                LEFT JOIN producers p ON w.producer_id = p.id
                LEFT JOIN regions r ON p.region_id = r.id
                LEFT JOIN colors cl ON w.color_id = cl.id
                LEFT JOIN viti_areas v ON w.viti_area_id = v.id
            WHERE w.id = ?;
            """
        # purchase_query = """
        #     SELECT
        #         p.date
        #         , p.quantity
        #         , p.price
        #         , p.vintage
        #         , s.name
        #         , p.memo
        #         , p.id
        #     FROM purchases p
        #         LEFT JOIN stores s ON p.store_id = s.id
        #     WHERE p.wine_id = ?
        #     ORDER BY p.date DESC;
        # """
        # Get the vintage of the most recent purchase
        recent_vintage_result = Purchases.objects.filter(wine__id=wine.id) \
            .values("id") \
            .annotate(max_date=Max("date"))

        conn = get_connection()
        cursor = conn.cursor()
        wine_info = cursor.execute(wine_query, (wine_id, )).fetchone()
        grapes = (WineGrapes.objects
                  .filter(wine__id=wine_id)
                  .order_by("-percent", "grape__name"))
        try:
            rating = int(wine_info[2])
        except TypeError:
            rating = None
        has_img = (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").is_file()
        wine = WineProfile(wine_id, *wine_info[:2], rating, *wine_info[3:])

        context = {
            "grapes": list(grapes),
            "recent_vintage": recent_vintage_result[0].get("max_date") if recent_vintage_result else None,
            "wine": wine,
            "has_img": has_img,
            "page_name": f"{wine.name} {wine.wine_type}" if wine.name else wine.wine_type,
            "version": __version__,
        }
        if do_purchases:
            context["purchases"] = Purchases.objects.filter(wine__id=wine.id) \
                .prefetch_related("store") \
                .order_by("-date")
            # purchases = cursor.execute(purchase_query, (wine_id, )).fetchall()
            # context["purchases"] = [Purchase(int_to_date(purchase[0]), *purchase[1:])
            #                         for purchase in purchases]
        conn.close()
        return context
    return None


def wine_profile(request, wine_id: int):
    context = wine_profile_base(wine_id)
    return render(request, "wine_profile_base.html", context)


def edit_wine(request, wine_id: int):
    if request.method == "POST":
        wine = Wines.objects.get(id=wine_id)
        producer = request.POST.get("producer")
        region = empty_to_none(request.POST.get("region"))
        wine.description = empty_to_none(request.POST.get("description"))
        wine.notes = empty_to_none(request.POST.get("notes"))
        wine.name = empty_to_none(request.POST.get("name"))
        wine.why = empty_to_none(request.POST.get("why"))
        viti_area = empty_to_none(request.POST.get("viti-area"))
        if request.POST.get("have-rating"):
            wine.rating = int(request.POST.get("rating"))
        else:
            wine.rating = None
        wine.color = Colors.objects.get(name=request.POST.get("color"))
        wine.wine_type = g_or_c_wine_type(request.POST.get("wine-type"))
        region = g_or_c_region(region) if region else None
        wine.producer = g_or_c_producer(producer, region)
        wine.viti_area = g_or_c_viti_area(viti_area, wine.producer.region) if viti_area else None
        wine.save()

        # Grape composition
        if request.POST.get("grape-1"):
            for i in range(1, 6):
                grape = empty_to_none(request.POST.get(f"grape-{i}"))
                if request.POST.get(f"grape-{i}-pct"):
                    percent = int(request.POST.get(f"grape-{i}-pct"))
                else:
                    percent = None
                if grape and (percent is None or 0 < percent <= 100):
                    c_or_u_wine_grapes(wine, grape, percent)
                else:
                    # No more grapes
                    break

        # Wine image changes
        if request.FILES.get("wine-image"):
            wine_image = request.FILES["wine-image"]
            # Remove old image if it exists
            if (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").is_file():
                (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").unlink()
            fs = FileSystemStorage()
            fs.save(str(wine.id) + ".png", wine_image)
            # Convert to PNG to match extension
            convert_to_png((Path(settings.MEDIA_ROOT) / f"{wine_id}.png").resolve())

        return redirect("Wine Profile", wine_id=wine_id)
    else:
        context = wine_profile_base(wine_id)
        context["colors"] = Colors.objects.all()
        return render(request, "edit_wine.html", context)


def edit_purchase(request, wine_id: int, purchase_id: int):
    if request.method == "POST":
        purchase = Purchases.objects.get(id=purchase_id)
        purchase.date = date_str_to_int(request.POST.get("purchase-date"))
        purchase.quantity = int(request.POST.get("quantity")) if request.POST.get("quantity") else None
        purchase.price = float(request.POST.get("price")) if request.POST.get("price") else None
        purchase.vintage = int(request.POST.get("vintage")) if request.POST.get("vintage") else None
        purchase.memo = request.POST.get("memo") if request.POST.get("memo") else None
        purchase.store = g_or_c_store(request.POST.get("store"))
        purchase.save()
        return redirect("Edit Wine", wine_id=wine_id)
    context = wine_profile_base(wine_id, do_purchases=False)
    purchase = Purchases.objects.get(id=purchase_id)
    context["purchase"] = purchase
    return render(request, "edit_purchase.html", context)


def producer_profile(request, producer_id: int):
    @attr.s
    class ProducerProfileWine(object):
        last_purchased_date = attr.ib(type=str)
        type = attr.ib(type=str)
        name = attr.ib(type=str)
        description = attr.ib(type=str)
        total_quantity = attr.ib(type=int)
        avg_price = attr.ib(type=float)
        rating = attr.ib(type=int)
        color = attr.ib(type=str)
        id = attr.ib(type=int)
        wine_type_id = attr.ib(type=int)

    producer = Producers.objects.get(id=producer_id)
    wines_query = """
        SELECT
            max(p2.date)
            , t.name
            , w.name
            , w.description
            , sum(p2.quantity)
            , avg(p2.price)
            , w.rating
            , c2.name
            , w.id
            , t.id
        FROM wines w
            INNER JOIN producers p ON w.producer_id = p.id
            LEFT JOIN purchases p2 ON w.id = p2.wine_id
            LEFT JOIN wine_types t ON w.wine_type_id = t.id
            LEFT JOIN colors c2 ON w.color_id = c2.id
        WHERE p.id = ?
        GROUP BY w.id
        ORDER BY max(p2.date) DESC;
    """
    conn = get_connection()
    cursor = conn.cursor()
    wines = cursor.execute(wines_query, (producer_id, )).fetchall()
    context = {
        "producer": producer,
        "wines": [ProducerProfileWine(int_to_date(wine[0]), *wine[1:]) for wine in wines],
        "page_name": "Producer Profile",
        "version": __version__,
    }
    return render(request, "producer_profile.html", context)


def edit_producer(request, producer_id: int):
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
        "version": __version__,
    }
    return render(request, "edit_producer.html", context)


def region_profile(request, region_id: int):
    @attr.s
    class VitiArea(object):
        name = attr.ib(type=str)
        total_quantity = attr.ib(type=int)
        avg_rating = attr.ib(type=float)

    @attr.s
    class RegionProfileWine(object):
        last_purchased_date = attr.ib(type=str)
        color = attr.ib(type=str)
        type = attr.ib(type=str)
        name = attr.ib(type=str)
        description = attr.ib(type=str)
        total_quantity = attr.ib(type=int)
        avg_price = attr.ib(type=float)
        rating = attr.ib(type=int)
        producer = attr.ib(type=str)
        id = attr.ib(type=int)
        producer_id = attr.ib(type=int)
        wine_type_id = attr.ib(type=int)

    region = Regions.objects.get(id=region_id)
    viti_area_query = """
        SELECT
          va.name
          , count(w.id)
          , avg(w.rating)
        FROM viti_areas va
        LEFT JOIN wines w ON va.id = w.viti_area_id
        INNER JOIN regions r ON va.region_id = r.id
        WHERE r.id = ?
        GROUP BY va.id
        ORDER BY va.name;
    """
    wines_query = """
        SELECT
            max(p2.date)
            , c2.name
            , t.name
            , w.name
            , w.description
            , sum(p2.quantity)
            , avg(p2.price)
            , w.rating
            , p.name
            , w.id
            , p.id
            , t.id
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN purchases p2 ON w.id = p2.wine_id
            LEFT JOIN wine_types t ON w.wine_type_id = t.id
            INNER JOIN regions r ON p.region_id = r.id
            LEFT JOIN colors c2 on w.color_id = c2.id
        WHERE r.id = ?
        GROUP BY w.id
        ORDER BY max(p2.date) DESC;
    """
    conn = get_connection()
    cursor = conn.cursor()
    wines = cursor.execute(wines_query, (region_id,)).fetchall()
    viti_areas = cursor.execute(viti_area_query, (region_id,)).fetchall()
    wines_profs = [RegionProfileWine(int_to_date(wine[0]), *wine[1:]) for wine in wines]
    context = {
        "region": region,
        "flag_exists": flag_exists(region.name),
        "wines": wines_profs,
        "viti_areas": [VitiArea(*viti_area) for viti_area in viti_areas],
        "page_name": "Region Profile",
        "version": __version__,
    }
    return render(request, "region_profile.html", context)


def inventory(request):
    @attr.s
    class InventoryItem(object):
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
        "version": __version__,
    }
    connection.close()
    return render(request, "inventory.html", context)


def change_inventory(request, wine_id: int, sign: str, return_to_inventory: bool=False):
    assert sign not in ("add", "subtract")
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
    wine = Wines.objects.get(id=wine_id)
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    purchases = Purchases.objects.get(wine=wine)
    wine_grapes.delete()
    purchases.delete()
    # Determine if producer was created for this wine
    if Wines.objects.filter(producer__id=wine.producer.id).count() == 1:
        wine.producer.delete()
    wine.delete()
    return redirect("Wine Table")


def delete_purchase(request, wine_id: int, purchase_id: int):
    purchase = Purchases.objects.get(id=purchase_id)
    purchase.delete()
    return redirect("Edit Wine", wine_id=wine_id)


def wine_type_profile(request, wine_type_id: int):
    @attr.s
    class WineTypeProfile(object):
        last_purchased_date = attr.ib(type=str)
        color = attr.ib(type=str)
        name = attr.ib(type=str)
        description = attr.ib(type=str)
        total_quantity = attr.ib(type=int)
        avg_price = attr.ib(type=float)
        rating = attr.ib(type=int)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        id = attr.ib(type=int)
        producer_id = attr.ib(type=int)
        region_id = attr.ib(type=int)

    wines_query = """
        SELECT
            max(p2.date)
            , c.name
            , w.name
            , w.description
            , sum(p2.quantity)
            , avg(p2.price)
            , w.rating
            , p.name
            , r.name
            , w.id
            , p.id
            , r.id
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN purchases p2 ON w.id = p2.wine_id
            LEFT JOIN wine_types t ON w.wine_type_id = t.id
            INNER JOIN regions r ON p.region_id = r.id
            LEFT JOIN colors c on w.color_id = c.id
        WHERE t.id = ?
        GROUP BY w.id
        ORDER BY max(p2.date) DESC;
    """
    conn = get_connection()
    cursor = conn.cursor()
    wines = cursor.execute(wines_query, (wine_type_id, )).fetchall()
    wines_profs = [WineTypeProfile(int_to_date(wine[0]), *wine[1:]) for wine in wines]
    context = {
        "wines": wines_profs,
        "wine_type": WineTypes.objects.get(id=wine_type_id),
        "page_name": "Wine Type Profile",
        "version": __version__
    }
    return render(request, "wine_type_profile.html", context)
