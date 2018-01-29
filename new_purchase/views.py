from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from view.views import wine_profile_base
from vinoteca import __version__
from vinoteca.models import (Colors, Countries, Grapes, Producers, Stores,
                             WineTypes, Wines)
from vinoteca.utils import (g_or_c_country, g_or_c_producer, g_or_c_store,
                            g_or_c_wine_type, c_wine, c_purchase, empty_to_none,
                            g_or_c_viti_area, c_wine_grape, get_flag_countries)
from vinoteca.views import get_connection


def get_producer_country(request) -> JsonResponse:
    conn = get_connection()
    cursor = conn.cursor()
    producer = request.GET.get("producer")
    query = """
        SELECT
            c.name
        FROM producers p
            LEFT JOIN countries c
                ON p.country_id = c.id
        WHERE p.name LIKE ?
        LIMIT 1
    """
    if producer:
        country_name = cursor.execute(query, (producer, )).fetchone()
        conn.close()
        return JsonResponse({"country_name": country_name[0]
                            if country_name else None})
    else:
        conn.close()
        return JsonResponse({"country_name": None})


def get_country_viti_areas(request) -> JsonResponse:
    conn = get_connection()
    cursor = conn.cursor()
    # Retrieve data from JSON request data
    country = request.GET.get("country")
    query = """
        SELECT
            v.name
        FROM viti_areas v
            INNER JOIN countries c
                ON c.id = v.region_id
        WHERE c.name LIKE ?;
    """
    if country:
        viti_areas = cursor.execute(query, (country, )).fetchall()
        conn.close()
        return JsonResponse({area[0]: None for area in viti_areas})
    else:
        conn.close()
        return JsonResponse({})


def search_wines(request) -> JsonResponse:
    conn = get_connection()
    cursor = conn.cursor()
    wine_type = empty_to_none(request.GET.get("wine_type"))
    color = empty_to_none(request.GET.get("color"))
    producer = empty_to_none(request.GET.get("producer"))
    country = empty_to_none(request.GET.get("country"))
    params = [color, wine_type, producer, country]
    params = [param for param in params if param is not None]
    if len(params) > 0:
        query = """
            SELECT
                w.id
                , w.description
                , w.notes
                , cl.color
                , pro.name
                , cn.name
                , t.type_name
            FROM wines w
                LEFT JOIN producers pro
                    ON w.producer_id = pro.id
                LEFT JOIN countries cn
                    ON pro.country_id = cn.id
                LEFT JOIN wine_types t
                    ON w.type_id = t.id
                LEFT JOIN colors cl
                    ON w.color_id = cl.id
            WHERE
                t.type_name LIKE coalesce(?, t.type_name)
                AND cl.color LIKE coalesce(?, cl.color)
                AND pro.name LIKE coalesce(?, pro.name)
                AND cn.name LIKE coalesce(?, cn.name);
        """
        context = {"wine_results": cursor.execute(query, (wine_type, color,
                   producer, country)).fetchall()}
        if context["wine_results"] is not None:
            conn.close()
            return JsonResponse({
                "results": render_to_string("search_results.html", context)
            })
    conn.close()
    return JsonResponse({"results": []})


def insert_new_purchase_and_wine(request):
    store = empty_to_none(request.POST.get("store"))
    purchase_date = empty_to_none(request.POST.get("purchase-date"))
    wine_type = empty_to_none(request.POST.get("wine-type"))
    producer = empty_to_none(request.POST.get("producer"))
    country = empty_to_none(request.POST.get("country"))
    description = empty_to_none(request.POST.get("description"))
    price = empty_to_none(request.POST.get("price"))
    viti_area = empty_to_none(request.POST.get("viti-area"))
    if price:
        price = float(price)
    why = empty_to_none(request.POST.get("why"))
    notes = empty_to_none(request.POST.get("notes"))
    color = empty_to_none(request.POST.get("color"))
    if request.POST.get("have-rating"):
        rating = int(request.POST.get("rating"))
    else:
        rating = None
    vintage = int(request.POST.get("vintage"))
    quantity = int(request.POST.get("quantity"))
    inventory = quantity if request.POST.get("add-to-inventory") else 0
    color = empty_to_none(Colors.objects.get(color=color))
    store = g_or_c_store(store)
    wine_type = g_or_c_wine_type(wine_type)
    country = empty_to_none(g_or_c_country(country))
    producer = g_or_c_producer(producer, country)
    viti_area = g_or_c_viti_area(viti_area, country)
    wine = c_wine(description, notes, producer, wine_type, color, rating,
                  inventory, viti_area)
    c_purchase(wine, store, price, why, purchase_date, vintage, quantity)
    # Grape composition
    if request.POST.get("grape-1"):
        for i in range(1, 6):
            grape = empty_to_none(request.POST.get(f"grape-{i}"))
            percent = int(empty_to_none(request.POST.get(f"grape-{i}-pct")))
            if grape and 0 < percent <= 100:
                c_wine_grape(wine, grape, percent)
            else:
                # No more grapes
                break

    if request.FILES.get("wine-image"):
        wine_image = request.FILES["wine-image"]
        fs = FileSystemStorage()
        fs.save(str(wine.id) + ".png", wine_image)

    return redirect("Wine Profile", wine_id=wine.id)


def first_new_purchase(request):
    if request.method == "POST":
        return insert_new_purchase_and_wine(request)
    else:
        context = {
            "colors": Colors.objects.all(),
            "countries": Countries.objects.all(),
            "flags": get_flag_countries(),
            "producers": Producers.objects.all(),
            "stores": Stores.objects.all(),
            "grapes": Grapes.objects.all(),
            "wine_types": WineTypes.objects.all(),
            "page_name": "New Purchase",
            "version": __version__,
        }
        return render(request, "first_time_wine.html", context)


def prev_new_purchase_search(request):
    context = {
        "colors": Colors.objects.all(),
        "countries": Countries.objects.all(),
        "producers": Producers.objects.all(),
        "wine_types": WineTypes.objects.all(),
        "page_name": "New Purchase",
        "version": __version__,
    }
    return render(request, "prev_wine_search.html", context)


def insert_new_purchase(request, wine_id):
    store = empty_to_none(request.POST.get("store"))
    purchase_date = empty_to_none(request.POST.get("purchase-date"))
    price = empty_to_none(request.POST.get("price"))
    if price:
        price = float(price)
    why = empty_to_none(request.POST.get("why"))
    vintage = int(request.POST.get("vintage")) if request.POST.get("vintage") else None
    quantity = int(request.POST.get("quantity"))
    store = g_or_c_store(store)
    wine = Wines.objects.get(id=wine_id)
    c_purchase(wine, store, price, why, purchase_date, vintage, quantity)
    return redirect("Wine Profile", wine_id=wine_id)


def prev_purchase(request, wine_id):
    if request.method == "POST":
        return insert_new_purchase(request, wine_id)
    else:
        context = wine_profile_base(wine_id)
        context["stores"] = Stores.objects.all()
        if context:
            return render(request, "prev_wine.html", context)
        else:
            return redirect("New Purchase Previous")
