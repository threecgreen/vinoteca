"""Contains views for interacting with Places: ie, regions, viticultural areas,
and stores."""
from django.db.models import Count, Max, Sum, Avg
from django.shortcuts import render

from vinoteca.models import Regions, Wines, VitiAreas
from vinoteca.utils import flag_exists


def region_profile(request, region_id: int):
    r"""View for viewing information about the wines, producers and viticultural
    areas of a particular region."""
    region = Regions.objects.get(id=region_id)
    viti_areas = VitiAreas.objects.filter(region__id=region.id) \
        .annotate(total_quantity=Count("wines__id")) \
        .annotate(avg_rating=Avg("wines__rating")) \
        .order_by("name")
    wines = Wines.objects.filter(producer__region__id=region.id) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .prefetch_related("producer", "wine_type", "color") \
        .order_by("-last_purchased_date")
    context = {
        "region": region,
        "flag_exists": flag_exists(region.name),
        "wines": list(wines),
        "viti_areas": list(viti_areas),
        "page_name": "Region Profile",
    }
    return render(request, "region_profile.html", context)
