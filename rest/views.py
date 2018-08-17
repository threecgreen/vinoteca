r"""Still figuring out where exactly the REST framework will be used. It seems
ideal for the wine graph idea, but there's still a lot of design work to figure
out there. May also move most or all other JSON methods over to this views
file."""
from django.http import JsonResponse
from django.shortcuts import render

from vinoteca.models import Colors, Regions, Producers, VitiAreas, WineTypes, \
        Wines, WineGrapes
from rest.serializers import ColorsSerializer, RegionsSerializer, \
        ProducersSerializer, VitiAreasSerializer, WineGrapesSerializer, \
        WinesSerializer, WineTypesSerializer


def rest(request, obj_name: str) -> JsonResponse:
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
        "color": (Colors, ColorsSerializer),
        "region": (Regions, RegionsSerializer),
        "producer": (Producers, ProducersSerializer),
        "viti_area": (VitiAreas, VitiAreasSerializer),
        "wine_type": (WineTypes, WineTypesSerializer),
        "wine": (Wines, WinesSerializer),
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


def graph(request, id: int):
    r"""View for starting the wine graph with a wine with the id of the argument
    `id`."""
    context = {
        "id": id,
        "page_name": "Wine Graph",
    }
    return render(request, "graph.html", context)
