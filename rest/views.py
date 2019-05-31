r"""Still figuring out where exactly the REST framework will be used. It seems
ideal for the wine graph idea, but there's still a lot of design work to figure
out there. May also move most or all other JSON methods over to this views
file."""
# pylint: disable=too-many-ancestors
from typing import Tuple
from django.db.models import Count, Max, Sum, Avg
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, mixins, response, views

from rest.serializers import (
    ColorSerializer, RegionSerializer, ProducerSerializer,
    VitiAreaSerializer, WineTypeSerializer, WineSearchResultSerializer,
    ColorNamesSerializer, ProducerNameSerializer, PurchaseSerializer,
    VitiAreaNameSerializer, WineTypeNameSerializer, GrapeNameSerializer,
    StoreNameSerializer, WineGrapeSerializer, GrapeSerializer, WineSerializer,
    VitiAreaStatsSerializer
)
from vinoteca.models import (
    Colors, Grapes, Regions, Producers, Purchases, Stores, VitiAreas, WineTypes,
    Wines, WineGrapes
)
from vinoteca.utils import (
    get_connection, get_region_flags, get_logger, place_json, empty_to_none,
    RequestLocation
)


LOGGER = get_logger("rest")


def region_all_names(_) -> JsonResponse:
    r"""Return regions in JSON with the following format:
    {
        region_name: has_stored_flag
    }"""
    region_flags = get_region_flags()
    regions = {}
    for region in Regions.objects.all():
        regions[region.name] = f"/static/img/flags/{region.name}.svg" if region.name \
                in region_flags else None
    return JsonResponse(regions)


def generic_all_names(_, obj_name: str) -> JsonResponse:
    r"""Generic rest view for serializing the names of all of one object."""
    relations = {
        "color": (Colors, ColorNamesSerializer),
        "grape": (Grapes, GrapeNameSerializer),
        "producer": (Producers, ProducerNameSerializer),
        "store": (Stores, StoreNameSerializer),
        "viti-area": (VitiAreas, VitiAreaNameSerializer),
        "wine-type": (WineTypes, WineTypeNameSerializer),
    }
    model, serializer = relations[obj_name]
    objs = model.objects.all()
    return JsonResponse({serializer(obj).data["name"]: None for obj in objs}, safe=False)


def grape(request):
    r"""Creates combined serialization of WineGrapes and Grapes objects
    given a wine id as a HTTP request argument 'id'."""
    wine_id = request.GET.get("id")
    wine_grapes = WineGrapes.objects.filter(wine_id=wine_id)
    content = []
    for wine_grape in wine_grapes:
        content.append({
            "wine": wine_id,
            "grape": wine_grape.grape.name,
            "percent": wine_grape.percent
        })
    return JsonResponse(content, safe=False)


class WineGrapeList(generics.ListAPIView):
    queryset = WineGrapes.objects.all().prefetch_related("grape")
    serializer_class = WineGrapeSerializer
    filterset_fields = ("wine", "grape")


class ColorList(generics.ListAPIView):
    r"""Allows queries about Colors based on their id."""
    queryset = Colors.objects.all()
    serializer_class = ColorSerializer
    filterset_fields = ("id",)


class VitiAreaList(generics.ListAPIView):
    r"""Allow queries about VitiAreas based on their id and Region."""
    queryset = VitiAreas.objects.all()
    serializer_class = VitiAreaSerializer
    filterset_fields = ("id", "region__name")


class WineTypeList(generics.ListAPIView):
    r"""Allow queries about WineTypes based on their id."""
    queryset = WineTypes.objects.all()
    serializer_class = WineTypeSerializer
    filterset_fields = ("id",)


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
    filterset_fields = ("id", "producer_id", "producer__region_id", "wine_type_id")


class VitiAreaStats(generics.ListAPIView):
    queryset = VitiAreas.objects.all() \
        .annotate(total_quantity=Count("wines__id")) \
        .annotate(avg_rating=Avg("wines__rating")) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("name")
    serializer_class = VitiAreaStatsSerializer
    filterset_fields = ("id", "region_id")


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
        with get_connection() as conn:
            cursor = conn.cursor()
            wine_type = empty_to_none(request.GET.get("wine_type"))
            color = empty_to_none(request.GET.get("color"))
            producer = empty_to_none(request.GET.get("producer"))
            region = empty_to_none(request.GET.get("region"))
            viti_area = empty_to_none(request.GET.get("viti_area"))
            params = [color, wine_type, producer, region, viti_area]
            params = [param for param in params if param is not None]
            if not params:
                return response.Response({}, 204)
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
            params = [
                wine_type,
                color,
                producer,
                region,
                viti_area,
            ]
            cursor.execute(query, params)
            # Rerun with wildcards if empty
            serializer = WineSearchResultSerializer(self.dictfetchall(cursor), many=True)
            if not serializer.data:
                cursor.execute(query, self.wrap_in_wild_cards(params))
                serializer = WineSearchResultSerializer(self.dictfetchall(cursor), many=True)
            return response.Response(serializer.data)


class GrapeView(generics.GenericAPIView,
                mixins.ListModelMixin,
                mixins.UpdateModelMixin):
    queryset = Grapes.objects.all()
    serializer_class = GrapeSerializer
    filterset_fields = ("id", "name")
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        """Grape update API, need to submit both `id` and `name` fields at the
        same time, or django will prevent to do update for field missing."""
        try:
            return self.update(request, *args, **kwargs)
        except Exception as err:
            LOGGER.warning(err)
            raise err


class ProducerView(generics.ListAPIView,
                   mixins.ListModelMixin,
                   mixins.UpdateModelMixin):
    queryset = Producers.objects.all()
    serializer_class = ProducerSerializer
    filterset_fields = ("id", "region_id")
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        try:
            return self.update(request, *args, **kwargs)
        except Exception as err:
            LOGGER.warning(err)
            raise err


class RegionView(generics.ListAPIView,
                 mixins.ListModelMixin,
                 mixins.UpdateModelMixin,
                 mixins.CreateModelMixin):
    r"""Allow queries about Regions based on their id."""
    queryset = Regions.objects.all()
    serializer_class = RegionSerializer
    filterset_fields = ("id", "name", "producers__name")
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        try:
            return self.update(request, *args, **kwargs)
        except Exception as err:
            LOGGER.warning(err)
            raise err

    def post(self, request, *args, **kwargs):
        try:
            return self.create(request, *args, **kwargs)
        except Exception as err:
            LOGGER.warning(err)
            raise err


class PurchaseView(generics.ListAPIView,
                   mixins.ListModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.CreateModelMixin,
                   mixins.DestroyModelMixin):
    # TODO: include store name in query
    queryset = Purchases.objects.all()
    serializer_class = PurchaseSerializer
    filterset_fields = ("id", "wine__name", "wine")
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


CLIENT_SIDE_LOGGER = get_logger("client_side")


@csrf_exempt
@place_json(RequestLocation.POST)
def write_client_side_logs(request):
    r"""Allows errors on the client-side to be written to the unified vinoteca
    logs.

    Data Format:
      - level: one of Critical, Error, Warning, Info, or Debug
      - module: the file name source of the error
      - message: error details"""
    if request.method == "POST":
        level = request.POST.get("level")
        module = request.POST.get("module")
        message = request.POST.get("message")
        if any([field is None for field in (level, message, module)]):
            return JsonResponse({"success": False}, status=400)
        if level == "critical":
            CLIENT_SIDE_LOGGER.critical(f"{module}: {message}")
        elif level == "error":
            CLIENT_SIDE_LOGGER.error(f"{module}: {message}")
        elif level == "warning":
            CLIENT_SIDE_LOGGER.warning(f"{module}: {message}")
        elif level == "info":
            CLIENT_SIDE_LOGGER.info(f"{module}: {message}")
        else:
            CLIENT_SIDE_LOGGER.debug(f"{module}: {message}")
        return JsonResponse({"success": True})
    return JsonResponse({"success": False}, status=405)
