from django.db.models import Count, Max, Sum, Avg
from django.shortcuts import render, redirect

from vinoteca.models import (
    Colors, Regions, Producers, Purchases, Wines, WineTypes, WineGrapes,
    VitiAreas
)
from vinoteca.utils import (
    get_connection, int_to_date, date_str_to_int, g_or_c_wine_type,
    g_or_c_store, g_or_c_producer, g_or_c_region, flag_exists,
    empty_to_none, g_or_c_viti_area, handle_grapes
)

def producer_profile(request, producer_id: int):
    r"""View for wine producer information."""
    producer = Producers.objects.get(id=producer_id)
    wines = Wines.objects.filter(producer__id=producer.id) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .prefetch_related("wine_type", "color")
    context = {
        "producer": producer,
        "wines": list(wines),
        "page_name": "Producer Profile",
    }
    return render(request, "producer_profile.html", context)


def edit_producer(request, producer_id: int):
    r"""View for editing wine producer information."""
    if request.method == "POST":
        producer = Producers.objects.get(id=producer_id)
        region = request.POST.get("region")
        producer.name = request.POST.get("producer")
        producer.region = g_or_c_region(region)
        producer.save()
        return redirect("Producers:Producer Profile", producer_id=producer_id)
    context = {
        "producer": Producers.objects.get(id=producer_id),
        "page_name": "Edit Producer",
    }
    return render(request, "edit_producer.html", context)

