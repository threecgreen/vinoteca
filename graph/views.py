from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

import vinoteca
from vinoteca.models import Colors, Countries, Producers, VitiAreas, \
    WineGrapes, WineTypes, Wines
from graph.serializers import *


def rest(request, obj_name: str) -> JsonResponse:
    relations = {
        "color": (Colors, ColorsSerializer),
        "country": (Countries, CountriesSerializer),
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
    wine_id = request.GET.get("id")
    wine_grapes = WineGrapes.objects.filter(wine_id=wine_id)
    content = []
    for grape in wine_grapes:
        content.append({
            "wine": wine_id,
            "grape": grape.grape.name,
            "percent": grape.percent
        })
    return JsonResponse(content, safe=False)


def graph(request, id: int):
    context = {
        "id": id,
        "page_name": "Wine Graph",
        "version": vinoteca.VERSION
    }
    return render(request, "graph.html", context)
