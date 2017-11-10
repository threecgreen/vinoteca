import sqlite3
from collections import namedtuple
from django.shortcuts import render
from vinoteca.__init__ import __version__
from vinoteca.utils import get_connection, int_to_date


def recent_purchases_dash(conn: sqlite3.Connection, limit: int):
    query = """
        SELECT
            p.date
            , s.name
            , p2.name
            , c.name
            , t.type_name
            , p.price
            , p.quantity
            , w.id
        FROM purchases p
            LEFT JOIN wines w
                ON p.wine_id = w.id
            LEFT JOIN wine_types t
                ON w.type_id = t.id
            LEFT JOIN producers p2
                ON w.producer_id = p2.id
            LEFT JOIN countries c
                ON p2.country_id = c.id
            LEFT JOIN stores s
                ON p.store_id = s.id
        ORDER BY p.date DESC
        LIMIT ?;
    """
    cursor = conn.cursor()
    q_results = cursor.execute(query, (limit, )).fetchall()
    recent_purchases = []
    for item in q_results:
        # Convert YYYYMMDD date format to date object for formatting
        purchase_date = int_to_date(item[0])
        recent_purchases.append((purchase_date, *item[1:]))
    return recent_purchases


def top_purchase_categories_dash(conn: sqlite3.Connection, limit: int):
    query = """
        SELECT
            t.type_name
            , sum(coalesce(p.quantity, 1))
            , count(w.id)
            , avg(p.price)
        FROM wine_types t
            LEFT JOIN wines w
                ON t.id = w.type_id
            LEFT JOIN purchases p
                ON w.id = p.wine_id
        GROUP BY t.id
        ORDER BY count(w.id) DESC
        LIMIT ?;
    """
    cursor = conn.cursor()
    return cursor.execute(query, (limit, )).fetchall()


ByTheNumbers = namedtuple("ByTheNumbers", ["liters_of_wine", "most_common_date", "total_purchase_count",
                                           "variety_count"])


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
    query = """
        SELECT
            count(w.id)
        FROM wines w;
    """
    variety_count = cursor.execute(query).fetchone()[0]
    return ByTheNumbers(liters_of_wine, most_common_date, total_purchase_count, variety_count)


def countries_dash(conn: sqlite3.Connection, limit: int):
    query = """
        SELECT
            c.name
            , count(DISTINCT pro.id)
            , count(w.id)
            , avg(w.rating)
            , avg(pur.price)
        FROM countries c 
            LEFT JOIN producers pro
                ON c.id = pro.country_id
            LEFT JOIN wines w 
                ON pro.id = w.producer_id
            LEFT JOIN purchases pur
                ON w.id = pur.wine_id
        GROUP BY c.id
        ORDER BY count(pur.id) DESC
        LIMIT ?;
    """
    cursor = conn.cursor()
    return cursor.execute(query, (limit, )).fetchall()


def color_dash(conn: sqlite3.Connection):
    query = """
        SELECT
            c.color
            , sum(coalesce(p.quantity, 1))
            , count(w.id)
            , avg(p.price)
        FROM colors c
            LEFT JOIN wines w
                ON c.id = w.color_id
            LEFT JOIN purchases p
                ON w.id = p.wine_id
        GROUP BY c.color
        ORDER BY count(coalesce(p.quantity, 1)) DESC;
    """
    cursor = conn.cursor()
    return cursor.execute(query).fetchall()


def producers_dash(conn: sqlite3.Connection, limit: int):
    query = """
        SELECT 
            pro.name
            , sum(coalesce(pur.quantity, 1))
            , avg(w.rating)
            , avg(pur.price)
        FROM producers pro
            LEFT JOIN wines w 
                ON pro.id = w.producer_id
            LEFT JOIN purchases pur
                ON w.id = pur.wine_id
        GROUP BY pro.id
        ORDER BY 
            avg(w.rating) DESC
            , sum(coalesce(pur.quantity, 1)) DESC 
        LIMIT ?;
    """
    cursor = conn.cursor()
    return cursor.execute(query, (limit, )).fetchall()


def purchases_by_year(conn: sqlite3.Connection):
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
    return cursor.execute(query).fetchall()


def dashboards(request):
    conn = get_connection()
    context = {
        "btn": by_the_numbers_dash(conn),
        "colors": color_dash(conn),
        "countries": countries_dash(conn, 6),
        "producers": producers_dash(conn, 7),
        "purchases": recent_purchases_dash(conn, 10),
        "top_categories": top_purchase_categories_dash(conn, 10),
        "years": purchases_by_year(conn),
        "page_name": "Home",
        "version": __version__,
    }
    conn.close()
    return render(request, "dashboards.html", context)

