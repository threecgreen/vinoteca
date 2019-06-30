"""Contains views for interacting with Places: ie, regions, viticultural areas,
and stores."""
from typing import List
from django.db.models import Count, Avg
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics, mixins

from vinoteca.models import Regions, VitiAreas
from vinoteca.utils import flag_exists, get_logger, get_region_flags
from .serializers import RegionSerializer, VitiAreaSerializer, VitiAreaStatsSerializer


LOGGER = get_logger("places")


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


class VitiAreaList(generics.ListAPIView):
    r"""Allow queries about VitiAreas based on their id and Region."""
    queryset = VitiAreas.objects.all()
    serializer_class = VitiAreaSerializer
    filterset_fields = ("id", "region__name")


class VitiAreaStats(generics.ListAPIView):
    queryset = VitiAreas.objects.all() \
        .annotate(total_quantity=Count("wines__id")) \
        .annotate(avg_rating=Avg("wines__rating")) \
        .annotate(avg_price=Avg("wines__purchases__price")) \
        .order_by("name")
    serializer_class = VitiAreaStatsSerializer
    filterset_fields = ("id", "region_id")


def region_all_names(_) -> List[JsonResponse]:
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
