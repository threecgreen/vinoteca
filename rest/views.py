r"""Still figuring out where exactly the REST framework will be used. It seems
ideal for the wine graph idea, but there's still a lot of design work to figure
out there. May also move most or all other JSON methods over to this views
file."""
import logging

from django.http import JsonResponse, HttpResponse
from rest_framework import generics, mixins

from rest.serializers import (
    ColorSerializer, RegionSerializer, ProducerSerializer,
    VitiAreaSerializer, WineTypeSerializer, WineSerializer,
    ColorNamesSerializer, ProducerNameSerializer, VitiAreaNameSerializer,
    WineTypeNameSerializer, GrapeNameSerializer, StoreNameSerializer,
    WineGrapeSerializer, GrapeSerializer
)
from vinoteca.models import (
    Colors, Grapes, Regions, Producers, Stores, VitiAreas, WineTypes, Wines,
    WineGrapes
)
from vinoteca.utils import get_region_flags


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


class ProducerList(generics.ListAPIView):
    r"""Allows queries about Producers based on their Region and id."""
    queryset = Producers.objects.all()
    serializer_class = ProducerSerializer
    filterset_fields = ("id", "region_id")


class RegionList(generics.ListAPIView):
    r"""Allow queries about Regions based on their id."""
    queryset = Regions.objects.all()
    serializer_class = RegionSerializer
    filterset_fields = ("id", "producers__name")


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
    queryset = Wines.objects.all()
    serializer_class = WineSerializer
    filterset_fields = ("id", "color_id", "producer_id", "viti_area_id",
                        "wine_type_id")


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
        """ Grape update API, need to submit both `id` and `name` fields at the
        same time, or django will prevent to do update for field missing."""
        return self.update(request, *args, **kwargs)


CLIENT_SIDE_LOGGER = logging.getLogger("ClientSide")


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
            return JsonResponse({"success": False})
        if level == "critical":
            CLIENT_SIDE_LOGGER.critical(f"{module}: {message}")
        elif level == "error":
            CLIENT_SIDE_LOGGER.error(f"{module}: {message}")
        elif level == "warning":
            CLIENT_SIDE_LOGGER.warning(f"{module}: {message}")
        elif level == "info":
            CLIENT_SIDE_LOGGER.warning(f"{module}: {message}")
        else:
            CLIENT_SIDE_LOGGER.debug(f"{module}: {message}")
        return JsonResponse({"success": True})
    else:
        raise HttpResponse(statuscode=405)
