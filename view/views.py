from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, redirect
from vinoteca.__init__ import __version__
from vinoteca.models import Additionals, Colors, Countries, Producers, Purchases, Stores, Wines, WineTypes
from vinoteca.utils import get_connection, int_to_date, date_str_to_int, g_or_c_wine_type, g_or_c_store, \
    g_or_c_producer, g_or_c_country, g_or_c_additional, empty_to_none


def wine_table(request):
    wines_all = Wines.objects.all().order_by("producer__country__name",
                                             "producer__name")
    # 50 wines per page
    paginator = Paginator(wines_all, 30)
    page = request.GET.get("page")
    try:
        wines = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        wines = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        wines = paginator.page(paginator.num_pages)
    context = {
        "colors": Colors.objects.all(),
        "countries": Countries.objects.all(),
        "flags": ["Argentina", "Australia", "Chile", "France", "Germany",
                  "Greece", "Italy", "New Zealand", "Portugal", "Slovenia",
                  "South Africa", "Spain", "Austria"],
        "producers": Producers.objects.all(),
        "wines": wines,
        "wine_types": WineTypes.objects.all(),
        "num_pages": paginator.num_pages,
        "page_name": "Wine Table",
        "version": __version__,
    }
    return render(request, "wines_table.html", context)


def filter_table(request):
    color = empty_to_none(request.GET.get("color"))
    wine_type = empty_to_none(request.GET.get("wine-type"))
    producer = empty_to_none(request.GET.get("producer"))
    country = empty_to_none(request.GET.get("country"))
    rating_op = empty_to_none(request.GET.get("rating-op"))
    rating = int(request.GET.get("rating")) if request.GET.get("rating") else None
    params = [color, wine_type, producer, country, bool(rating and rating_op)]
    params = [param for param in params if param]
    if len(params) > 0:
        query = """
            SELECT
                w.id
                , cl.color
                , t.type_name
                , pro.name
                , cn.name
                , w.description
                , a.additional
                , w.notes
                , w.rating
            FROM wines w
                LEFT JOIN producers pro
                    ON pro.id = w.producer_id
                LEFT JOIN countries cn
                    ON cn.id = pro.country_id
                LEFT JOIN colors cl
                    ON cl.id = w.color_id
                LEFT JOIN wine_types t
                    ON t.id = w.type_id
                LEFT JOIN additionals a
                    ON a.id = w.add_id
            WHERE
                t.type_name LIKE coalesce(?, t.type_name)
                AND cl.color LIKE coalesce(?, cl.color)
                AND pro.name LIKE coalesce(?, pro.name)
                AND cn.name LIKE coalesce(?, cn.name)
                {extra_clause}
            ORDER BY cn.name AND w.rating DESC;
        """
        if rating_op and rating and rating_op in (">", "=", "<"):
            extra_clause = "AND w.rating " + rating_op + " ? "
            params = (wine_type, color, producer, country, rating)
        else:
            extra_clause = ""
            params = (wine_type, color, producer, country)
        conn = get_connection()
        cursor = conn.cursor()
        wines = cursor.execute(query.format(extra_clause=extra_clause), params).fetchall()
        # 30 wines per page
        # paginator = Paginator(wines, 30)
        # page = request.GET.get("page")
        # try:
        #     wines = paginator.page(page)
        # except PageNotAnInteger:
        #     # If page is not an integer, deliver first page.
        #     wines = paginator.page(1)
        # except EmptyPage:
        #     # If page is out of range (e.g. 9999), deliver last page of results.
        #     wines = paginator.page(paginator.num_pages)
        context = {
            "colors": Colors.objects.all(),
            "countries": Countries.objects.all(),
            "flags": ["Argentina", "Australia", "Chile", "France", "Germany",
                      "Greece", "Italy", "New Zealand", "Portugal", "Slovenia",
                      "South Africa", "Spain", "Austria"],
            "producers": Producers.objects.all(),
            "wines": wines,
            "wine_types": WineTypes.objects.all(),
            # "num_pages": paginator.num_pages,
            "page_name": "Wine Table",
            "version": __version__,
        }

        return render(request, "filter_sort_table.html", context)
    return redirect("Wine Table")


def sort_table(request):
    orderings = {
        "country_name": "cn.name",
        "producer_name": "pro.name",
        "rating": "w.rating DESC",
        "type": "t.type_name"
    }
    sort1 = request.GET.get("sort-1")
    sort2 = request.GET.get("sort-2")
    sort3 = request.GET.get("sort-3")
    params = [sort1, sort2, sort3]
    params = [param for param in params if param and param in orderings.keys()]
    print(params)
    if len(params) > 0:
        query = """
            SELECT
                w.id
                , cl.color
                , t.type_name
                , pro.name
                , cn.name
                , w.description
                , a.additional
                , w.notes
                , w.rating
            FROM wines w
                LEFT JOIN producers pro
                    ON pro.id = w.producer_id
                LEFT JOIN countries cn
                    ON cn.id = pro.country_id
                LEFT JOIN colors cl
                    ON cl.id = w.color_id
                LEFT JOIN wine_types t
                    ON t.id = w.type_id
                LEFT JOIN additionals a
                    ON a.id = w.add_id
            ORDER BY
            {order_by_clauses} ;
        """
        if len(params) == 1:
            clauses = orderings[params[0]]
        else:
            clauses = ""
            for i, param in enumerate(params):
                if i > 0:
                    clauses += " AND "
                clauses += orderings[param]

        conn = get_connection()
        cursor = conn.cursor()
        wines = cursor.execute(query.format(order_by_clauses=clauses)).fetchall()
        # 30 wines per page
        # paginator = Paginator(wines, 30)
        # page = request.GET.get("page")
        # try:
        #     wines = paginator.page(page)
        # except PageNotAnInteger:
        #     # If page is not an integer, deliver first page.
        #     wines = paginator.page(1)
        # except EmptyPage:
        #     # If page is out of range (e.g. 9999), deliver last page of results.
        #     wines = paginator.page(paginator.num_pages)
        context = {
            "colors": Colors.objects.all(),
            "countries": Countries.objects.all(),
            "flags": ["Argentina", "Australia", "Chile", "France", "Germany",
                      "Greece", "Italy", "New Zealand", "Portugal", "Slovenia",
                      "South Africa", "Spain", "Austria"],
            "producers": Producers.objects.all(),
            "wines": wines,
            "wine_types": WineTypes.objects.all(),
            # "num_pages": paginator.num_pages,
            "page_name": "Wine Table",
            "version": __version__,
        }

        return render(request, "filter_sort_table.html", context)
    return redirect("Wine Table")


def wine_profile_base(wine_id: int, do_purchases: bool=True):
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
                FROM wines w
                    LEFT JOIN wine_types t
                        ON w.type_id = t.id
                    LEFT JOIN producers p
                        ON w.producer_id = p.id
                    LEFT JOIN countries cn
                        ON p.country_id = cn.id
                    LEFT JOIN colors cl
                        ON w.color_id = cl.id
                    LEFT JOIN additionals a
                        ON w.add_id = a.id
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
                LEFT JOIN stores s
                    ON p.store_id = s.id
            WHERE p.wine_id = ?
            ORDER BY p.date;
        """
        conn = get_connection()
        cursor = conn.cursor()
        wine_info = cursor.execute(wine_query, (wine_id, )).fetchone()
        context = {
            "wine_id": wine_id,
            "notes": wine_info[0],
            "description": wine_info[1],
            "rating": wine_info[2],
            "color": wine_info[3],
            "wine_type": wine_info[4],
            "producer": wine_info[5],
            "country": wine_info[6],
            "additional": wine_info[7],
            "producer_id": wine_info[8],
            "country_id": wine_info[9],
            "page_name": "New Purchase",
            "version": __version__,
        }
        if do_purchases:
            purchases = cursor.execute(purchase_query, (wine_id, )).fetchall()
            context["purchases"] = [(int_to_date(purchase[0]), *purchase[1:])
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
        country = request.POST.get("country")
        additional = request.POST.get("additional")
        wine.description = request.POST.get("description")
        wine.notes = request.POST.get("notes")
        if request.POST.get("have-rating"):
            wine.rating = int(request.POST.get("rating"))
        else:
            wine.rating = None
        wine.color = Colors.objects.get(color=request.POST.get("color"))
        wine.wine_type = g_or_c_wine_type(request.POST.get("wine-type"))
        country = g_or_c_country(country) if country else None
        wine.producer = g_or_c_producer(producer, country)
        wine.add = g_or_c_additional(additional) if additional else None
        wine.save()
        return redirect("Wine Profile", wine_id=wine_id)
    else:
        context = wine_profile_base(wine_id)
        if context:
            context["additionals"] = Additionals.objects.all()
            context["colors"] = Colors.objects.all()
            context["countries"] = Countries.objects.all()
            context["flags"] = ["Argentina", "Australia", "Chile", "France", "Germany",
                                "Greece", "Italy", "New Zealand", "Portugal", "Slovenia",
                                "South Africa", "Spain", "Austria"],
            context["producers"] = Producers.objects.all()
            context["wine_types"] = WineTypes.objects.all()
            return render(request, "edit_wine.html", context)
        return redirect("home")


def edit_purchase(request, wine_id: int, purchase_id: int):
    if request.method == "POST":
        purchase = Purchases.objects.get(id=purchase_id)
        purchase.date = date_str_to_int(request.POST.get("purchase-date"))
        purchase.quantity = int(request.POST.get("quantity")) if request.POST.get("quantity") else None
        purchase.price = float(request.POST.get("price")) if request.POST.get("price") else None
        purchase.vintage = int(request.POST.get("vintage")) if request.POST.get("vintage") else None
        purchase.why = request.POST.get("why") if request.POST.get("why") else None
        purchase.store = g_or_c_store(request.POST.get("store"), request.POST.get("store"))
        purchase.save()
        return redirect("Edit Wine", wine_id=wine_id)
    else:
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
                LEFT JOIN stores s
                    ON s.id = p.store_id
            WHERE p.id = ?;
        """
        conn = get_connection()
        cursor = conn.cursor()
        purchase = cursor.execute(purchase_query, (purchase_id, )).fetchone()
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
        else:
            conn.close()
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
            INNER JOIN producers p
                ON w.producer_id = p.id
            INNER JOIN purchases p2
                ON w.id = p2.wine_id
            INNER JOIN additionals a
                ON w.add_id = a.id
            INNER JOIN wine_types t
                ON w.type_id = t.id
            INNER JOIN colors c2 
                ON w.color_id = c2.id
        WHERE p.id = ?
        GROUP BY w.id
        ORDER BY rating DESC , max(p2.date) DESC;
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
    pass


def country_profile(request, country_id: int):
    country = Countries.objects.get(id=country_id)
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
            INNER JOIN producers p
                ON w.producer_id = p.id
            INNER JOIN purchases p2
                ON w.id = p2.wine_id
            INNER JOIN additionals a
                ON w.add_id = a.id
            INNER JOIN wine_types t
                ON w.type_id = t.id
            INNER JOIN countries c 
                ON p.country_id = c.id
        WHERE c.id = ?
        GROUP BY w.id
        ORDER BY rating DESC , max(p2.date) DESC;
    """
    conn = get_connection()
    cursor = conn.cursor()
    wines = cursor.execute(wines_query, (country_id, )).fetchall()
    context = {
        "country": country,
        "wines": [(int_to_date(wine[0]), *wine[1:]) for wine in wines],
        "page_name": "Country Profile",
        "version": __version__,
    }
    return render(request, "country_profile.html", context)


def edit_country(request, country_id: int):
    pass


def store_profile(request, store_id: int):
    pass


def edit_store(request, store_id: int):
    pass
