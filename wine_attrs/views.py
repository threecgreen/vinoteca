r"""Contains views for CRUD functionality for WineTypes and Colors which are
'wine attributes.'"""
from django.db.models import Avg, Count, Max, Sum
from django.shortcuts import render
from rest_framework import generics, mixins

from vinoteca.models import Colors, Grapes, Purchases, Wines, WineTypes, WineGrapes
from vinoteca.utils import c_or_u_wine_grapes, empty_to_none, get_logger, TableColumn
from .serializers import (
    ColorSerializer, GrapeSerializer, PurchaseSerializer, WineGrapeSerializer,
    WineTypeSerializer
)


LOGGER = get_logger("wine_attrs")


# def grape(request):
#     r"""Creates combined serialization of WineGrapes and Grapes objects
#     given a wine id as a HTTP request argument 'id'."""
#     wine_id = request.GET.get("id")
#     wine_grapes = WineGrapes.objects.filter(wine_id=wine_id)
#     content = []
#     for wine_grape in wine_grapes:
#         content.append({
#             "wine": wine_id,
#             "grape": wine_grape.grape.name,
#             "percent": wine_grape.percent
#         })
#     return JsonResponse(content, safe=False)


class WineGrapeList(generics.ListAPIView):
    queryset = WineGrapes.objects.all().prefetch_related("grape")
    serializer_class = WineGrapeSerializer
    filterset_fields = ("wine", "grape")


class ColorList(generics.ListAPIView):
    r"""Allows queries about Colors based on their id."""
    queryset = Colors.objects.all()
    serializer_class = ColorSerializer
    filterset_fields = ("id",)


class WineTypeList(generics.ListAPIView):
    r"""Allow queries about WineTypes based on their id."""
    queryset = WineTypes.objects.all()
    serializer_class = WineTypeSerializer
    filterset_fields = ("id",)


class GrapeView(generics.GenericAPIView,
                mixins.ListModelMixin,
                mixins.UpdateModelMixin):
    queryset = Grapes.objects.all() \
        .annotate(wines=Count("winegrapes__id", distinct=True))
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


def wine_type_profile(request, wine_type_id: int):
    r"""View for profiles of types of wine or wine types."""
    wine_type = WineTypes.objects.get(id=wine_type_id)
    wines = Wines.objects.filter(wine_type__id=wine_type_id) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .prefetch_related("producer", "color", "producer__region", "viti_area") \
        .order_by("-last_purchased_date")
    columns = TableColumn.from_list([
        "Last Purchased", "Color", "Name", "Producer", "Region",
        "Viticultural Area", TableColumn("Total Quantity", num_col=True),
        TableColumn("Avg Price", num_col=True), TableColumn("Rating", num_col=True)
    ])
    context = {
        "wines": wines,
        "columns": columns,
        "wine_type": wine_type,
        "page_name": "Wine Type Profile",
    }
    return render(request, "wine_type_profile.html", context)


def handle_grapes(request, wine):
    r"""Create Grape and WineGrapes objects for a new wine or when a wine has
    been edited."""
    LOGGER.debug(f"Handling grape changes for POST request {request.POST}")
    LOGGER.debug("Preparing for overwriting grape data by removing old wine grapes.")
    WineGrapes.objects.filter(wine__id=wine.id).delete()
    i = 1
    while request.POST.get(f"grape-{i}"):
        grape = empty_to_none(request.POST.get(f"grape-{i}"))
        percent = empty_to_none(request.POST.get(f"grape-{i}-pct"), int)
        LOGGER.debug(f"Handling grape {grape} and percent {percent}")
        if grape and (percent is None or 0 < percent <= 100):
            c_or_u_wine_grapes(wine, grape, percent)
        else:
            LOGGER.debug("No more grape data")
            # No more grapes
            break
        i += 1
