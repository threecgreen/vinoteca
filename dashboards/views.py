r"""Implements views (business logic) for the various dashboards displayed on the
home page and the dashboard page."""
import sqlite3
from datetime import date
from typing import List

import attr
from django.db.models import Avg, Count, Sum
from django.db.models.functions import Coalesce
from django.shortcuts import render

from vinoteca.models import Purchases, Wines, WineTypes, Regions, Colors, \
        Producers, Grapes, VitiAreas
from vinoteca.utils import get_connection, int_to_date, wine_count


def recent_purchases(limit: int) -> List[Purchases]:
    r"""Fetches information about recently purchased wines. The number of recent
    wines is controlled by the `limit` argument."""
    return Purchases.objects.prefetch_related("wine", "wine__wine_type", "wine__producer",
                                              "wine__producer__region", "store") \
        .order_by("-date")[:limit]


def top_wine_types(limit: int) -> List[WineTypes]:
    r"""Fetches information about the most popular wine types by the number of
    different wines of that type. The number is controlled by the `limit`
    argument."""
    return WineTypes.objects.annotate(quantity=Sum(Coalesce("wines__purchases__quantity", 1))) \
        .annotate(variety=Count('wines')) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("-variety")[:limit]


@attr.s
class ByTheNumbers(object):
    r"""Return attrs object for by_the_numbers function."""
    liters_of_wine = attr.ib(type=int)
    most_common_date = attr.ib(type=date)
    total_purchase_count = attr.ib(type=int)
    variety_count = attr.ib(type=int)


def by_the_numbers(conn: sqlite3.Connection) -> ByTheNumbers:
    r"""Fetches some basic statistics on the user's wine library including:
        * Number of liters of wine consumed
        * Total number of purchases
        * Most common purchase date
        * Total number of purchased wine varieties"""
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
    mcd_result = cursor.execute(query).fetchone()[0]
    most_common_date = int_to_date(mcd_result) if mcd_result else None
    variety_count = Wines.objects.all().count()
    return ByTheNumbers(liters_of_wine, most_common_date, total_purchase_count, variety_count)


def top_regions(limit: int) -> List[Regions]:
    r"""Fetches informations about the most popular wine regions in the user's
    data based on the number of purchased wine varieties from each region.
    The number of regions is controlled by the `limit` parameter."""
    return Regions.objects.annotate(producer_count=Count("producers", distinct=True)) \
        .annotate(variety=Count("producers__wines", distinct=True)) \
        .annotate(avg_rating=Avg("producers__wines__rating")) \
        .annotate(avg_price=Avg("producers__wines__purchases__price")) \
        .order_by("-variety")[:limit]


def purchases_by_color() -> List[Colors]:
    r"""Fetches information about the most popular wine colors in the user's
    data based on the number of the number of bottles purchased of each
    color. The number of colors is controlled by the `limit` parameter."""
    return list(Colors.objects.annotate(quantity=Sum("wines__purchases__quantity"))
                .annotate(variety=Count("wines", distinct=True))
                .annotate(avg_price=Avg("wines__purchases__price"))
                .order_by("-quantity"))


def top_producers(limit: int) -> List[Producers]:
    r"""Fetches information about the most popular wine producers in the user's
    data based on the average rating and number of bottles purchased from each
    producer. The number of producers is controlled by the `limit` parameter."""
    return Producers.objects.annotate(quantity=Sum(Coalesce("wines__purchases__quantity", 1))) \
        .annotate(avg_rating=Avg("wines__rating")) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("-avg_rating", "-quantity")[:limit]


@attr.s
class Year(object):
    r"""Return attrs object for the purchases_by_year function."""
    year = attr.ib(type=int)
    quantity = attr.ib(type=int)
    price = attr.ib(type=float)
    avg_price = attr.ib(type=float)
    avg_vintage = attr.ib(type=float)


def purchases_by_year(conn: sqlite3.Connection) -> List[Year]:
    r"""Fetches information about the wine purchases grouped by purchase
    year. Takes a SQLite connection as an argument."""
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


def top_grape_varieties(limit: int) -> List[Grapes]:
    r"""Fetches information about the most popular grape varieties in the user's
    data based on the number of the number of wine varities made using the grape
    and the average price. The number of grape varieties is controlled by the
    `limit` parameter."""
    # TODO: possibly rewrite in SQL to better calculate average pct with
    # coalesce and wine-weighted avg price
    return Grapes.objects.annotate(wine_varieties=Count("winegrapes__wine", distinct=True)) \
        .annotate(avg_price=Count("winegrapes__wine__purchases__price")) \
        .annotate(avg_pct=Avg("winegrapes__percent")) \
        .order_by("-wine_varieties", "-avg_price")[:limit]


def top_viti_areas(limit: int) -> List[VitiAreas]:
    r"""Fetches information about the most popular viticultural areas in the
    user's data based on the number of the number of different wine varieties
    and the number of producers from the area. The number of viticultural areas
    is controlled by the `limit` parameter."""
    return VitiAreas.objects.annotate(varieties=Count("wines", distinct=True)) \
        .annotate(producers=Count("wines__producer", distinct=True)) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("-varieties", "-producers")[:limit]


def dashboards(request):
    r"""Collective dashboard view function that calls all the data functions
    and assembles them into a context for rendering in the template."""
    conn = get_connection()
    context = {
        "btn": by_the_numbers(conn),
        "colors": purchases_by_color(),
        "grapes": top_grape_varieties(6),
        "regions": top_regions(10),
        "producers": top_producers(10),
        "purchases": recent_purchases(10),
        "top_wine_types": top_wine_types(10),
        "viti_areas": top_viti_areas(5),
        "years": purchases_by_year(conn),
        "wine_count": wine_count(),
        "page_name": "Dashboards",
    }
    conn.close()
    return render(request, "dashboards.html", context)
