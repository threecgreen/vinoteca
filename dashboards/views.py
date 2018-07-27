import attr
import sqlite3
from datetime import date

from django.db.models import Avg, Count, Sum
from django.db.models.functions import Coalesce
from django.shortcuts import render
from typing import List

from vinoteca.models import Purchases, Wines, WineTypes, Regions, Colors, Producers
from vinoteca.utils import get_connection, int_to_date


def recent_purchases_dash(limit: int) -> List[Purchases]:
    return Purchases.objects.prefetch_related("wine", "wine__wine_type", "wine__producer",
                                              "wine__producer__region", "store") \
        .order_by("-date")[:limit]


def top_purchase_wine_types_dash(limit: int) -> List[WineTypes]:
    return WineTypes.objects.annotate(quantity=Sum(Coalesce("wines__purchases__quantity", 1))) \
        .annotate(variety=Count('wines')) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("-variety")[:limit]


@attr.s
class ByTheNumbers(object):
    liters_of_wine = attr.ib(type=int)
    most_common_date = attr.ib(type=date)
    total_purchase_count = attr.ib(type=int)
    variety_count = attr.ib(type=int)


def by_the_numbers_dash(conn: sqlite3.Connection) -> ByTheNumbers:
    cursor = conn.cursor()
    query = """
        SELECT 
            sum(coalesce(p.quantity, 1)) * 0.75,
            count(p.id)
        FROM purchases p;
    """
    liters_of_wine, total_purchase_count = cursor.execute(query).fetchone()
    query = """
        SELECT
            (p.date % 10000) + 20000000
        FROM purchases p
        WHERE p.date IS NOT NULL
        GROUP BY (p.date % 10000)
        ORDER BY count(p.id) DESC
        LIMIT 1;
    """
    most_common_date = int_to_date(cursor.execute(query).fetchone()[0])
    variety_count = Wines.objects.all().count()
    return ByTheNumbers(liters_of_wine, most_common_date, total_purchase_count, variety_count)


def regions_dash(limit: int) -> List[Regions]:
    return Regions.objects.annotate(producer_count=Count("producers", distinct=True)) \
        .annotate(variety=Count("producers__wines", distinct=True)) \
        .annotate(avg_rating=Avg("producers__wines__rating")) \
        .annotate(avg_price=Avg("producers__wines__purchases__price")) \
        .order_by("-variety")[:limit]


def color_dash() -> List[Colors]:
    return list(Colors.objects.annotate(quantity=Sum(Coalesce("wines__purchases__quantity", 1)))
                .annotate(variety=Count("wines", distinct=True))
                .annotate(avg_price=Avg("wines__purchases__price"))
                .order_by("-quantity"))


def producers_dash(limit: int) -> List[Producers]:
    return Producers.objects.annotate(quantity=Sum(Coalesce("wines__purchases__quantity", 1))) \
        .annotate(avg_rating=Avg("wines__rating")) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("-avg_rating", "-quantity")[:limit]


@attr.s
class Year(object):
    year = attr.ib(type=int)
    quantity = attr.ib(type=int)
    price = attr.ib(type=float)
    avg_price = attr.ib(type=float)
    avg_vintage = attr.ib(type=float)


def purchases_by_year(conn: sqlite3.Connection) -> List[Year]:
    # Convert dates to years by integer division with divisor of 10,000

    query = """
        SELECT
            p.date / 10000
            , sum(coalesce(p.quantity, 1))
            , sum(p.price)
            , avg(p.price)
            , avg(p.vintage)
        FROM purchases p
        WHERE p.date IS NOT NULL
        GROUP BY p.date / 10000
        ORDER BY p.date / 10000;
    """
    cursor = conn.cursor()
    return [Year(*row) for row in cursor.execute(query).fetchall()]


def dashboards(request):
    conn = get_connection()
    context = {
        "btn": by_the_numbers_dash(conn),
        "colors": color_dash(),
        "regions": regions_dash(6),
        "producers": producers_dash(7),
        "purchases": recent_purchases_dash(10),
        "top_wine_types": top_purchase_wine_types_dash(10),
        "years": purchases_by_year(conn),
        "page_name": "Dashboards",
    }
    conn.close()
    return render(request, "dashboards.html", context)
