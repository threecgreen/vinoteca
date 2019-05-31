"""Contains views for interacting with data regarding wine producers."""
from django.db.models import Max, Sum, Avg
from django.shortcuts import render, redirect

from vinoteca.models import (
    Producers, Wines
)
from vinoteca.utils import empty_to_none, g_or_c_region, get_logger, TableColumn


LOGGER = get_logger("producers")


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
