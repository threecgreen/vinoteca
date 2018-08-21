r"""Still figuring out where exactly the REST framework will be used. It seems
ideal for the wine graph idea, but there's still a lot of design work to figure
out there. May also move most or all other JSON methods over to this views
file."""
from django.http import JsonResponse
from django.shortcuts import render

from rest.serializers import (
    ColorSerializer, RegionSerializer, ProducerSerializer,
    VitiAreaSerializer, WineTypeSerializer, WineSerializer,
    ColorNamesSerializer, ProducerNameSerializer, VitiAreaNameSerializer,
    WineTypeNameSerializer, GrapeNameSerializer, StoreNameSerializer
)
from vinoteca.models import (
    Colors, Grapes, Regions, Producers, Stores, VitiAreas, WineTypes, Wines,
    WineGrapes
)
from vinoteca.utils import get_region_flags


def region_all_names(request) -> JsonResponse:
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



def generic_all_names(request, obj_name: str) -> JsonResponse:
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


def generic_serialize(request, obj_name: str) -> JsonResponse:
    r"""Serializes an object of given an 'id' attribute in the HTTP request
    object and the object name passed as argument `obj_name`. Currently
    supports:
        * Colors
        * Regions
        * Producers
        * VitiAreas
        * WineTypes
        * Wines"""
    relations = {
        "color": (Colors, ColorSerializer),
        "region": (Regions, RegionSerializer),
        "producer": (Producers, ProducerSerializer),
        "viti_area": (VitiAreas, VitiAreaSerializer),
        "wine_type": (WineTypes, WineTypeSerializer),
        "wine": (Wines, WineSerializer),
    }
    obj_id = request.GET.get("id")
    model, serializer = relations[obj_name]
    try:
        obj = model.objects.get(id=obj_id)
    except model.DoesNotExist:
        return JsonResponse({})
    return JsonResponse(serializer(obj).data, safe=False)


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


def graph(request, id_: int):
    r"""View for starting the wine graph with a wine with the id of the argument
    `id`."""
    context = {
        "id": id_,
        "page_name": "Wine Graph",
    }
    return render(request, "graph.html", context)
