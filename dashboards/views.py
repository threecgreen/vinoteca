import attr
import sqlite3
from datetime import date

from django.db.models import Avg, Count, Sum
from django.db.models.functions import Coalesce
from django.shortcuts import render
from typing import List

from vinoteca.models import Purchases, Wines, WineTypes
from vinoteca.utils import get_connection, int_to_date


def recent_purchases_dash(limit: int) -> List[Purchases]:
    return Purchases.objects.prefetch_related("wine", "wine__wine_type", "wine__producer",
                                              "wine__producer__region", "store") \
        .order_by("-date")[:limit]


@attr.s
class TopPurchaseWineType(object):
    wine_type = attr.ib(type=str)
    quantity = attr.ib(type=int)
    variety = attr.ib(type=int)
    avg_price = attr.ib(type=float)
    id = attr.ib(type=int)


def top_purchase_wine_types_dash(conn: sqlite3.Connection, limit: int) -> List[TopPurchaseWineType]:
    return WineTypes.objects.annotate(quantity=Sum(Coalesce("wines__purchases__quantity", 1))) \
        .annotate(variety=Count('wines')) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("-variety")[:limit]
    # query = """
    #     SELECT
    #         t.name
    #         , sum(coalesce(p.quantity, 1))
    #         , count(w.id)
    #         , avg(p.price)
    #         , t.id
    #     FROM wine_types t
    #         LEFT JOIN wines w ON t.id = w.wine_type_id
    #         LEFT JOIN purchases p ON w.id = p.wine_id
    #     GROUP BY t.id
    #     ORDER BY count(w.id) DESC
    #     LIMIT ?;
    # """
    # cursor = conn.cursor()
    # return [TopPurchaseWineType(*row) for row in cursor.execute(query, (limit, )).fetchall()]


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


@attr.s
class Region(object):
    name = attr.ib(type=str)
    producer_count = attr.ib(type=int)
    wine_count = attr.ib(type=int)
    avg_rating = attr.ib(type=float)
    avg_price = attr.ib(type=float)


def regions_dash(conn: sqlite3.Connection, limit: int) -> List[Region]:
    query = """
        SELECT
            r.name
            , count(DISTINCT pro.id)
            , count(w.id)
            , avg(w.rating)
            , avg(pur.price)
        FROM regions r
            LEFT JOIN producers pro ON r.id = pro.region_id
            LEFT JOIN wines w ON pro.id = w.producer_id
            LEFT JOIN purchases pur ON w.id = pur.wine_id
        GROUP BY r.id
        ORDER BY count(pur.id) DESC
        LIMIT ?;
    """
    cursor = conn.cursor()
    return [Region(*row) for row in cursor.execute(query, (limit, )).fetchall()]


@attr.s
class Type(object):
    name = attr.ib(type=str)
    quantity = attr.ib(type=int)
    variety = attr.ib(type=int)
    avg_price = attr.ib(type=float)


def color_dash(conn: sqlite3.Connection) -> List[Type]:
    query = """
        SELECT
            c.name
            , sum(coalesce(p.quantity, 1))
            , count(w.id)
            , avg(p.price)
        FROM colors c
            LEFT JOIN wines w ON c.id = w.color_id
            LEFT JOIN purchases p ON w.id = p.wine_id
        GROUP BY c.name
        ORDER BY count(coalesce(p.quantity, 1)) DESC;
    """
    cursor = conn.cursor()
    return [Type(*row) for row in cursor.execute(query).fetchall()]


@attr.s
class Producer(object):
    id = attr.ib(type=int)
    name = attr.ib(type=str)
    quantity = attr.ib(type=int)
    avg_rating = attr.ib(type=float)
    avg_price = attr.ib(type=float)


def producers_dash(conn: sqlite3.Connection, limit: int) -> List[Producer]:
    query = """
        SELECT 
            pro.id
            , pro.name
            , sum(coalesce(pur.quantity, 1))
            , avg(w.rating)
            , avg(pur.price)
        FROM producers pro
            LEFT JOIN wines w ON pro.id = w.producer_id
            LEFT JOIN purchases pur ON w.id = pur.wine_id
        GROUP BY pro.id
        ORDER BY 
            avg(w.rating) DESC
            , sum(coalesce(pur.quantity, 1)) DESC 
        LIMIT ?;
    """
    cursor = conn.cursor()
    return [Producer(*row) for row in cursor.execute(query, (limit, )).fetchall()]


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
        "colors": color_dash(conn),
        "regions": regions_dash(conn, 6),
        "producers": producers_dash(conn, 7),
        "purchases": recent_purchases_dash(10),
        "top_wine_types": top_purchase_wine_types_dash(conn, 10),
        "years": purchases_by_year(conn),
        "page_name": "Home",
    }
    conn.close()
    return render(request, "dashboards.html", context)
