"""Contains views for interacting with data regarding wine producers."""
from django.db.models import Max, Sum, Avg
from django.shortcuts import render, redirect

from vinoteca.models import (
    Producers, Wines
)
from vinoteca.utils import g_or_c_region, TableColumn

def producer_profile(request, producer_id: int):
    r"""View for wine producer information."""
    producer = Producers.objects.get(id=producer_id)
    wines = Wines.objects.filter(producer__id=producer.id) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .prefetch_related("wine_type", "color", "viti_area")
    columns = TableColumn.from_list([
        "Last Purchased", "Color", "Name and Type", "Viticultural Area",
        TableColumn("Total Quantity", num_col=True), TableColumn("Avg Price", num_col=True),
        TableColumn("Rating", num_col=True)
    ])
    context = {
        "columns": columns,
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
