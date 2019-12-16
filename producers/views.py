"""Contains views for interacting with data regarding wine producers."""
from django.shortcuts import render, redirect
from rest_framework import generics, mixins

from vinoteca.models import Producers
from vinoteca.utils import empty_to_none, g_or_c_region, get_logger
from .serializers import ProducerSerializer


LOGGER = get_logger("producers")


class ProducerView(generics.ListAPIView,
                   mixins.ListModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin):
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

    def delete(self, request, *args, **kwargs):
        try:
            return self.destroy(request, *args, **kwargs)
        except Exception as err:
            LOGGER.warning(err)
            raise err


def producer_profile(request, producer_id: int):
    r"""View for wine producer information."""
    producer = Producers.objects.get(id=producer_id)
    context = {
        "producer": producer,
        "page_name": "Producer Profile",
    }
    return render(request, "producer_profile.html", context)


def edit_producer(request, producer_id: int):
    r"""View for editing wine producer information."""
    if request.method == "POST":
        LOGGER.debug(f"Received the following POST data for editing producer with "
                     f"id {producer_id}:\n{request.POST}")
        producer = Producers.objects.get(id=producer_id)
        region = empty_to_none(request.POST.get("region"))
        producer.name = request.POST.get("producer")
        if region is not None:
            producer.region = g_or_c_region(region)
        producer.save()
        return redirect("Producers:Producer Profile", producer_id=producer_id)
    context = {
        "producer": Producers.objects.get(id=producer_id),
        "page_name": "Edit Producer",
    }
    return render(request, "edit_producer.html", context)
