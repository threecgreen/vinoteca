import attr
from datetime import date
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render, redirect
from pathlib import Path
from vinoteca import __version__
from vinoteca.models import Additionals, Colors, Countries, Grapes, Producers, Purchases, \
    Stores, Wines, WineTypes, WineGrapes
from vinoteca.utils import get_connection, int_to_date, date_str_to_int, g_or_c_wine_type,\
    g_or_c_store, g_or_c_producer, g_or_c_country, g_or_c_additional, flag_exists,\
    empty_to_none, c_or_u_wine_grapes, g_or_c_viti_area


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
        inventory = attr.ib(type=int)
        vintage = attr.ib(type=int)
        viti_area = attr.ib(type=str)

    wine_query = """
        SELECT
            w.id
            , w.description
            , w.rating
            , c.name
            , p.name
            , wt.type_name
            , c2.color
            , w.inventory
            , pu.vintage
            , v.name
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN countries c ON p.country_id = c.id
            LEFT JOIN colors c2 ON w.color_id = c2.id
            LEFT JOIN wine_types wt ON w.type_id = wt.id
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
        ORDER BY sub.recent_purchase desc ;
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
        color = attr.ib(type=str)
        wine_type = attr.ib(type=str)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        additional = attr.ib(type=str)
        producer_id = attr.ib(type=int)
        region_id = attr.ib(type=int)
        inventory = attr.ib(type=int)
        viti_area = attr.ib(type=str)
        why = attr.ib(type=str)

    @attr.s
    class Grape(object):
        name = attr.ib(type=int)
        percent = attr.ib(type=int)

    @attr.s
    class Purchase(object):
        date = attr.ib(type=date)
        quantity = attr.ib(type=int)
        price = attr.ib(type=float)
        vintage = attr.ib(type=int)
        store = attr.ib(type=str)
        why = attr.ib(type=str)
        id = attr.ib(type=int)

    wine = Wines.objects.get(id=wine_id)
    if wine:
        wine_query = """
            SELECT
                w.notes
                , w.description
                , w.rating
                , cl.color
                , t.type_name
                , p.name
                , cn.name
                , a.additional
                , p.id
                , p.country_id
                , w.inventory
                , v.name
                , w.why
            FROM wines w
                LEFT JOIN wine_types t ON w.type_id = t.id
                LEFT JOIN producers p ON w.producer_id = p.id
                LEFT JOIN countries cn ON p.country_id = cn.id
                LEFT JOIN colors cl ON w.color_id = cl.id
                LEFT JOIN additionals a ON w.add_id = a.id
                LEFT JOIN viti_areas v ON w.viti_area_id = v.id
            WHERE w.id = ?;
            """
        purchase_query = """
            SELECT
                p.date
                , p.quantity
                , p.price
                , p.vintage
                , s.name
                , p.why
                , p.id
            FROM purchases p
                LEFT JOIN stores s ON p.store_id = s.id
            WHERE p.wine_id = ?
            ORDER BY p.date DESC;
        """
        grape_query = """
            SELECT
              g.name
              , wg.percent
            FROM wine_grapes wg
            INNER JOIN grapes g ON wg.grape_id = g.id
            WHERE wg.wine_id = ? 
            ORDER BY wg.percent DESC, g.name;
        """
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
        wine_info = cursor.execute(wine_query, (wine_id, )).fetchone()
        grapes = cursor.execute(grape_query, (wine_id, )).fetchall()
        try:
            rating = int(wine_info[2])
        except TypeError:
            rating = None
        if (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").is_file():
            wine_img = str(Path(settings.MEDIA_ROOT) / f"{wine_id}.png")
        else:
            wine_img = None
        wine = WineProfile(wine_id, *wine_info[:2], rating, *wine_info[3:])
        recent_vintage_query = cursor.execute(recent_vintage_query, (wine_id, wine_id)).fetchone()

        context = {
            "grapes": [Grape(*grape) for grape in grapes],
            "recent_vintage": recent_vintage_query[0] if recent_vintage_query else None,
            "wine": wine,
            "wine_img": wine_img,
            "page_name": wine.wine_type,
            "version": __version__,
        }
        if do_purchases:
            purchases = cursor.execute(purchase_query, (wine_id, )).fetchall()
            context["purchases"] = [Purchase(int_to_date(purchase[0]), *purchase[1:])
                                    for purchase in purchases]
        conn.close()
        return context
    return None


def wine_profile(request, wine_id: int):
    context = wine_profile_base(wine_id)
    if context:
        return render(request, "wine_profile_base.html", context)
    return redirect("Home")


def edit_wine(request, wine_id: int):
    if request.method == "POST":
        wine = Wines.objects.get(id=wine_id)
        producer = request.POST.get("producer")
        country = empty_to_none(request.POST.get("country"))
        additional = empty_to_none(request.POST.get("additional"))
        wine.description = empty_to_none(request.POST.get("description"))
        wine.notes = empty_to_none(request.POST.get("notes"))
        viti_area = empty_to_none(request.POST.get("viti-area"))
        if request.POST.get("have-rating"):
            wine.rating = int(request.POST.get("rating"))
        else:
            wine.rating = None
        wine.color = Colors.objects.get(color=request.POST.get("color"))
        wine.wine_type = g_or_c_wine_type(request.POST.get("wine-type"))
        country = g_or_c_country(country) if country else None
        wine.producer = g_or_c_producer(producer, country)
        wine.add = g_or_c_additional(additional) if additional else None
        wine.viti_area = g_or_c_viti_area(viti_area, wine.producer.country) if viti_area else None
        wine.save()

        # Grape composition
        if request.POST.get("grape-1"):
            # Get grapes already connected to this wine
            grapes_query = """
                SELECT
                    g.id
                    , g.name
                    , wg.percent
                FROM wine_grapes wg
                INNER JOIN grapes g ON wg.grape_id = g.id
                WHERE wg.wine_id = ? ;"""
            prev_grapes = Grapes.objects.raw(grapes_query, [wine_id])
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

        return redirect("Wine Profile", wine_id=wine_id)
    else:
        context = wine_profile_base(wine_id)
        if context:
            context["additionals"] = Additionals.objects.all()
            context["colors"] = Colors.objects.all()
            context["countries"] = Countries.objects.all()
            context["all_grapes"] = Grapes.objects.all()
            context["producers"] = Producers.objects.all()
            context["wine_types"] = WineTypes.objects.all()
            return render(request, "edit_wine.html", context)
        return redirect("Home")


def edit_purchase(request, wine_id: int, purchase_id: int):
    if request.method == "POST":
        purchase = Purchases.objects.get(id=purchase_id)
        purchase.date = date_str_to_int(request.POST.get("purchase-date"))
        purchase.quantity = int(request.POST.get("quantity")) if request.POST.get("quantity") else None
        purchase.price = float(request.POST.get("price")) if request.POST.get("price") else None
        purchase.vintage = int(request.POST.get("vintage")) if request.POST.get("vintage") else None
        purchase.why = request.POST.get("why") if request.POST.get("why") else None
        purchase.store = g_or_c_store(request.POST.get("store"))
        purchase.save()
        return redirect("Edit Wine", wine_id=wine_id)
    context = wine_profile_base(wine_id, do_purchases=False)
    purchase_query = """
        SELECT
            p.date
            , p.quantity
            , p.vintage
            , s.name
            , p.price
            , p.why
        FROM purchases p
            LEFT JOIN stores s ON s.id = p.store_id
        WHERE p.id = ?;
    """
    conn = get_connection()
    cursor = conn.cursor()
    purchase = cursor.execute(purchase_query, (purchase_id, )).fetchone()
    conn.close()
    if purchase:
        context["purchase_id"] = purchase_id
        if purchase[0]:
            context["date"] = str(purchase[0])
        context["quantity"] = purchase[1]
        context["vintage"] = purchase[2]
        context["store"] = purchase[3]
        context["price"] = purchase[4]
        context["why"] = purchase[5]
        context["stores"] = Stores.objects.all()
        return render(request, "edit_purchase.html", context)
    return redirect("Edit Wine", wine_id=wine_id)


def producer_profile(request, producer_id: int):
    producer = Producers.objects.get(id=producer_id)
    wines_query = """
        SELECT
            max(p2.date)
            , t.type_name
            , w.description
            , a.additional
            , sum(p2.quantity)
            , avg(p2.price)
            , w.rating
            , c2.color
            , w.id
        FROM wines w
            INNER JOIN producers p ON w.producer_id = p.id
            LEFT JOIN purchases p2 ON w.id = p2.wine_id
            LEFT JOIN additionals a ON w.add_id = a.id
            LEFT JOIN wine_types t ON w.type_id = t.id
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
        "wines": [(int_to_date(wine[0]), *wine[1:]) for wine in wines],
        "page_name": "Producer Profile",
        "version": __version__,
    }
    return render(request, "producer_profile.html", context)


def edit_producer(request, producer_id: int):
    if request.method == "POST":
        producer = Producers.objects.get(id=producer_id)
        country = request.POST.get("country")
        producer.name = request.POST.get("producer")
        producer.country = g_or_c_country(country)
        producer.save()
        return redirect("Producer Profile", producer_id=producer_id)
    context = {
        "producer": Producers.objects.get(id=producer_id),
        "countries": Countries.objects.all(),
        "page_name": "Edit Producer",
        "version": __version__,
    }
    return render(request, "edit_producer.html", context)


def country_profile(request, country_id: int):
    country = Countries.objects.get(id=country_id)
    viti_area_query = """
        SELECT
          va.name
          , count(w.id)
          , avg(w.rating)
        FROM viti_areas va
        LEFT JOIN wines w ON va.id = w.viti_area_id
        INNER JOIN countries c ON va.region_id = c.id
        WHERE c.id = ?
        GROUP BY va.id
        ORDER BY va.name;
    """
    wines_query = """
        SELECT
            max(p2.date)
            , t.type_name
            , w.description
            , a.additional
            , sum(p2.quantity)
            , avg(p2.price)
            , w.rating
            , p.name
            , w.id
            , p.id
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN purchases p2 ON w.id = p2.wine_id
            LEFT JOIN additionals a ON w.add_id = a.id
            LEFT JOIN wine_types t ON w.type_id = t.id
            INNER JOIN countries c ON p.country_id = c.id
        WHERE c.id = ?
        GROUP BY w.id
        ORDER BY max(p2.date) DESC;
    """
    conn = get_connection()
    cursor = conn.cursor()
    print(country_id)
    wines = cursor.execute(wines_query, (country_id, )).fetchall()
    viti_areas = cursor.execute(viti_area_query, (country_id, )).fetchall()
    print(viti_areas)
    context = {
        "country": country,
        "flag_exists": flag_exists(country.name),
        "wines": [(int_to_date(wine[0]), *wine[1:]) for wine in wines],
        "viti_areas": viti_areas,
        "page_name": "Country Profile",
        "version": __version__,
    }
    return render(request, "country_profile.html", context)


def inventory(request):
    query = """
        SELECT
            c2.color
            , wt.type_name
            , p.name
            , c.name
            , p3.vintage
            , sub.last_purchase_date
            , w.inventory
            , w.id
            , p.id
            , c.id
        FROM wines w
            LEFT JOIN producers p ON w.producer_id = p.id
            LEFT JOIN countries c ON p.country_id = c.id
            LEFT JOIN colors c2 ON w.color_id = c2.id
            LEFT JOIN wine_types wt ON w.type_id = wt.id
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
        purchase_date = int_to_date(item[5])
        wine_inventory.append((*item[:5], purchase_date, *item[6:]))
    context = {
        "inventory": wine_inventory,
        "page_name": "Country Profile",
        "version": __version__,
    }
    connection.close()
    return render(request, "inventory.html", context)


def change_inventory(request, wine_id: int, sign: str, return_to_inventory: bool=False):
    if sign not in ("add", "subtract"):
        return redirect("Home")
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
    wine.delete()
    # Determine if producer was created for this wine
    query = """
        SELECT
            p.id
        FROM producers p
        INNER JOIN wines w ON p.id = w.producer_id
        WHERE w.id = ? 
        GROUP BY p.id
        HAVING count(w.id) < 2;
    """
    connection = get_connection()
    cursor = connection.cursor()
    cursor.execute(query, (wine_id, ))
    if cursor.rowcount == 1:
        producer = Producers.objects.get(id=cursor.fetchone()[0])
        producer.delete()
    connection.close()
    return redirect("Wine Table")


def delete_purchase(request, wine_id: int, purchase_id: int):
    purchase = Purchases.objects.get(id=purchase_id)
    purchase.delete()
    return redirect("Edit Wine", wine_id=wine_id)
