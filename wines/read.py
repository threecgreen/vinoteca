# pylint: disable=unused-argument
from pathlib import Path

import attr
from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.views import View

from vinoteca.models import Colors, Purchases, Wines, WineGrapes
from vinoteca.utils import get_connection, empty_to_none


def search_wines_view(request):
    r"""Search page view. Search logic is implemented in search_wines function,
    not here."""
    context = {
        "colors": Colors.objects.all(),
        "page_name": "New Purchase",
    }
    return render(request, "prev_wine_search.html", context)


def search_wines_results_view(request) -> JsonResponse:
    r"""Render a search results table inserted into a JSON object for live
    search results of existing wines."""
    @attr.s
    class WineSearchResult(object):
        r"""Query result attrs object for wine search results. Makes for easier
        and clearer access to wine attributes in the template."""
        id = attr.ib(type=int)
        color = attr.ib(type=str)
        name = attr.ib(type=str)
        producer = attr.ib(type=str)
        region = attr.ib(type=str)
        wine_type = attr.ib(type=str)
        viti_area = attr.ib(type=str)

    conn = get_connection()
    cursor = conn.cursor()
    wine_type = empty_to_none(request.GET.get("wine_type"))
    color = empty_to_none(request.GET.get("color"))
    producer = empty_to_none(request.GET.get("producer"))
    region = empty_to_none(request.GET.get("region"))
    viti_area = empty_to_none(request.GET.get("viti_area"))
    params = [color, wine_type, producer, region, viti_area]
    params = [param for param in params if param is not None]
    if params:
        query = """
            SELECT
                w.id
                , cl.name
                , w.name
                , pro.name
                , r.name
                , t.name
                , v.name
            FROM wines w
                LEFT JOIN producers pro ON w.producer_id = pro.id
                LEFT JOIN regions r ON pro.region_id = r.id
                LEFT JOIN wine_types t ON w.wine_type_id = t.id
                LEFT JOIN colors cl ON w.color_id = cl.id
                LEFT JOIN viti_areas v on w.viti_area_id = v.id
            WHERE
                t.name LIKE coalesce(?, t.name)
                AND cl.name LIKE coalesce(?, cl.name)
                AND pro.name LIKE coalesce(?, pro.name)
                AND r.name LIKE coalesce(?, r.name)
                and (
                    ? is null or ? like v.name
                );
        """
        results = cursor.execute(query, (wine_type, color, producer, region,
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


def wines_view(request):
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
    wines_ = [WineTableDatum(*row) for row in cursor.execute(wine_query).fetchall()]
    conn.close()
    context = {
        "wines": wines_,
        "page_name": "Wine Table",
    }
    return render(request, "wines.html", context)


class WineProfileView(View):
    r"""Contains views for interacting with a particular wine."""
    template_name = "wine_profile.html"

    @staticmethod
    def get_base_context(wine_id: int, do_purchases: bool = True):
        r"""Fetches wine data used in several views into context."""
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
