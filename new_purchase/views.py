import attr
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from view.views import wine_profile_base
from vinoteca import __version__
from vinoteca.models import (Colors, Countries, Grapes, Producers, Stores,
                             VitiAreas, WineTypes, Wines)
from vinoteca.utils import (g_or_c_country, g_or_c_producer, g_or_c_store,
                            g_or_c_wine_type, c_wine, c_purchase, empty_to_none, g_or_c_viti_area,
                            c_or_u_wine_grapes, get_flag_countries, default_vintage_year)
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
    @attr.s
    class WineSearchResult(object):
        id = attr.ib(type=int)
        color = attr.ib(type=str)
        name = attr.ib(type=str)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        type = attr.ib(type=str)
        viti_area = attr.ib(type=str)

    conn = get_connection()
    cursor = conn.cursor()
    wine_type = empty_to_none(request.GET.get("wine_type"))
    color = empty_to_none(request.GET.get("color"))
    producer = empty_to_none(request.GET.get("producer"))
    country = empty_to_none(request.GET.get("country"))
    viti_area = empty_to_none(request.GET.get("viti_area"))
    params = [color, wine_type, producer, country, viti_area]
    params = [param for param in params if param is not None]
    if len(params) > 0:
        query = """
            SELECT
                w.id
                , cl.color
                , w.name
                , pro.name
                , cn.name
                , t.type_name
                , v.name
            FROM wines w
                LEFT JOIN producers pro ON w.producer_id = pro.id
                LEFT JOIN countries cn ON pro.country_id = cn.id
                LEFT JOIN wine_types t ON w.type_id = t.id
                LEFT JOIN colors cl ON w.color_id = cl.id
                LEFT JOIN viti_areas v on w.viti_area_id = v.id
            WHERE
                t.type_name LIKE coalesce(?, t.type_name)
                AND cl.color LIKE coalesce(?, cl.color)
                AND pro.name LIKE coalesce(?, pro.name)
                AND cn.name LIKE coalesce(?, cn.name)
                and (
                    ? is null or ? like v.name
                );
        """
        results = cursor.execute(query, (wine_type, color, producer, country,
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
    name = empty_to_none(request.POST.get("name"))
    color = empty_to_none(request.POST.get("color"))
    if request.POST.get("have-rating"):
        rating = int(request.POST.get("rating")) if empty_to_none(request.POST.get("rating")) \
            else None
    else:
        rating = None
    vintage = int(request.POST.get("vintage")) if request.POST.get("vintage") else None
    quantity = int(request.POST.get("quantity"))
    inventory = quantity if request.POST.get("add-to-inventory") else 0
    color = empty_to_none(Colors.objects.get(color=color))
    store = g_or_c_store(store)
    wine_type = g_or_c_wine_type(wine_type)
    country = g_or_c_country(country)
    producer = g_or_c_producer(producer, country)
    viti_area = g_or_c_viti_area(viti_area, country)
    wine = c_wine(description, notes, name, producer, wine_type, color, rating,
                  inventory, viti_area)
    c_purchase(wine, store, price, why, purchase_date, vintage, quantity)
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

    if request.FILES.get("wine-image"):
        wine_image = request.FILES["wine-image"]
        fs = FileSystemStorage()
        fs.save(str(wine.id) + ".png", wine_image)
        # Convert to PNG to match extension
        convert_to_png((Path(settings.MEDIA_ROOT) / f"{wine_id}.png").resolve())

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
            "default_vintage": default_vintage_year(),
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
        "viti_areas": VitiAreas.objects.all(),
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
        context["default_vintage"] = default_vintage_year()
        if context:
            return render(request, "prev_wine.html", context)
        else:
            return redirect("New Purchase Previous")
