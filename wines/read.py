# pylint: disable=unused-argument
from pathlib import Path
from typing import NamedTuple, Tuple

from django.conf import settings
from django.db.models import Max, Sum, Avg
from django.shortcuts import render
from django.views import View
from rest_framework import generics, response, views

from vinoteca.models import Colors, Purchases, Wines, WineGrapes
from vinoteca.utils import empty_to_none, get_connection, get_logger, TableColumn
from .serializers import WineSearchResultSerializer, WineSerializer
from .models import WineSearchResult


LOGGER = get_logger("wines.read")


class WineProfileView(View):
    r"""Contains views for interacting with a particular wine."""
    template_name = "wine_profile.html"

    @staticmethod
    def get_base_context(wine_id: int, do_purchases: bool = True):
        r"""Fetches wine data used in several views into context."""
        LOGGER.debug(f"Fetching wine context for wine with id {wine_id}")
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
                            wine_id
                            , max(date) as max_date
                        FROM purchases
                        WHERE wine_id = %s
                    ) sub ON sub.max_date = p.date
                        AND sub.wine_id = p.wine_id;
                """
        with get_connection() as conn:
            cursor = conn.cursor()
            recent_vintage = cursor.execute(recent_vintage_query, [wine_id]).fetchone()
        LOGGER.debug(f"Fetching grape data for wine with id {wine_id}")
        grapes = (WineGrapes.objects
                  .filter(wine__id=wine.id)
                  .order_by("-percent", "grape__name"))
        LOGGER.debug(f"Found {grapes.count()} grapes")
        has_img = (Path(settings.MEDIA_ROOT) / f"{wine_id}.png").is_file()

        context = {
            "grapes": list(grapes),
            "recent_vintage": recent_vintage[0] if recent_vintage else None,
            "wine": wine,
            "has_img": has_img,
            "page_name": f"{wine.name} {wine.wine_type.name}" if wine.name else wine.wine_type.name,
        }
        if do_purchases:
            context["purchases"] = Purchases.objects.filter(wine__id=wine.id) \
                .prefetch_related("store") \
                .order_by("-date")
        return context

    def get(self, request, wine_id: int):
        context = self.get_base_context(wine_id)
        return render(request, self.template_name, context)


def search_wines_view(request):
    r"""Search page view. Search logic is implemented in search_wines function,
    not here."""
    context = {
        "colors": Colors.objects.all(),
        "page_name": "Search Wines",
    }
    return render(request, "search_wines.html", context)


class WineList(generics.ListAPIView):
    r"""Allow queries about Wines based on their id, Color, Producer, VitiArea,
    and WineType."""
    queryset = Wines.objects.all() \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .prefetch_related("wine_type", "color", "viti_area", "producer") \
        .order_by("-last_purchased_date")
    serializer_class = WineSerializer
    filterset_fields = ("id", "producer_id", "producer__region_id", "wine_type_id",
                        "viti_area_id")


class SearchWines(views.APIView):
    @staticmethod
    def dictfetchall(cursor):
        """Returns all rows from a cursor as a dict"""
        desc = cursor.description
        return [
            dict(zip([col[0] for col in desc], row))
            for row in cursor.fetchall()
        ]

    @staticmethod
    def wrap_in_wild_cards(params: Tuple[str]) -> Tuple[str]:
        """If exact match fails, we want to try with wildcards. This function
        wraps all non-null query parameters in the SQL wildcard '%'."""
        return tuple(f"%{p}%" if p is not None else p for p in params)

    def get(self, request):
        wine_type = empty_to_none(request.GET.get("wine_type"))
        color = empty_to_none(request.GET.get("color"))
        producer = empty_to_none(request.GET.get("producer"))
        region = empty_to_none(request.GET.get("region"))
        viti_area = empty_to_none(request.GET.get("viti_area"))
        params = [color, wine_type, producer, region, viti_area]
        params = [param for param in params if param is not None]
        if not params:
            return response.Response([], 204, content_type='application/json')
        params = [
            wine_type,
            color,
            producer,
            region,
            viti_area,
        ]
        query = """
        SELECT
            w.id
            , cl.name as color
            , w.name
            , pro.name as producer
            , r.name as region
            , t.name as wine_type
            , v.name as viti_area
        FROM wines w
            LEFT JOIN producers pro ON w.producer_id = pro.id
            LEFT JOIN regions r ON pro.region_id = r.id
            LEFT JOIN wine_types t ON w.wine_type_id = t.id
            LEFT JOIN colors cl ON w.color_id = cl.id
            LEFT JOIN viti_areas v on w.viti_area_id = v.id
        WHERE
            t.name LIKE coalesce(%s, t.name)
            AND cl.name LIKE coalesce(%s, cl.name)
            AND pro.name LIKE coalesce(%s, pro.name)
            AND r.name LIKE coalesce(%s, r.name)
            AND (
                w.viti_area_id IS NULL
                OR v.name LIKE coalesce(%s, v.name)
            )
            ORDER BY coalesce(w.name || ' ', ''"""  """) || t.name;
        """
        results = WineSearchResult.objects.raw(query, params)
        # Rerun with wildcards if empty
        serializer = WineSearchResultSerializer(results, many=True)
        if not serializer.data:
            results = WineSearchResult.objects.raw(query, self.wrap_in_wild_cards(params))
            serializer = WineSearchResultSerializer(results, many=True)
        return response.Response(serializer.data)


class WineTableDatum(NamedTuple):
    r"""Attrs object for wine table data. Each instance contains the
    information required about one wine for one row in the table."""
    id: int
    description: str
    rating: int
    region: str
    producer: str
    name: str
    type: str
    color: str
    inventory: int
    vintage: int
    viti_area: str
    producer_id: int
    region_id: int
    wine_type_id: int


def wines_view(request):
    r"""View for viewing all wines together in a tabular, filterable format."""
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
    columns = TableColumn.from_list([
        TableColumn("Color", placeholder="Select a color"), "Inventory", "Name and Type",
        "Producer", "Region", "Viticultural Area", TableColumn("Vintage", num_col=True),
        "Description", TableColumn("Rating", num_col=True)
    ])
    context = {
        "columns": columns,
        "wines": wines_,
        "page_name": "Wines Table",
    }
    return render(request, "wines.html", context)
