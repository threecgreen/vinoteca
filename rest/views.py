r"""Still figuring out where exactly the REST framework will be used. It seems
ideal for the wine graph idea, but there's still a lot of design work to figure
out there. May also move most or all other JSON methods over to this views
file."""
# pylint: disable=too-many-ancestors
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from places.serializers import VitiAreaNameSerializer
from producers.serializers import ProducerNameSerializer
from wine_attrs.serializers import (
    ColorNamesSerializer, WineTypeNameSerializer, GrapeNameSerializer, StoreNameSerializer
)
from vinoteca.models import Colors, Grapes, Producers, Stores, VitiAreas, WineTypes
from vinoteca.utils import get_logger, place_json, RequestLocation


LOGGER = get_logger("rest")


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
