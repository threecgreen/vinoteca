"""Contains views for interacting with Places: ie, regions, viticultural areas,
and stores."""
from django.db.models import Count, Max, Sum, Avg
from django.shortcuts import render

from vinoteca.models import Regions, Wines, VitiAreas
from vinoteca.utils import flag_exists, get_logger, TableColumn


LOGGER = get_logger("places")


def region_profile(request, region_id: int):
    r"""View for viewing information about the wines, producers and viticultural
    areas of a particular region."""
    region = Regions.objects.get(id=region_id)
    context = {
        "region": region,
        "flag_exists": flag_exists(region.name),
        "page_name": "Region Profile",
    }
    return render(request, "region_profile.html", context)
