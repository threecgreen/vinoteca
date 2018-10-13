r"""Contains views for CRUD functionality for WineTypes and Colors which are
'wine attributes.'"""
from django.db.models import Avg, Max, Sum
from django.shortcuts import render

from vinoteca.models import Wines, WineTypes


def wine_type_profile(request, wine_type_id: int):
    r"""View for profiles of types of wine or wine types."""
    wine_type = WineTypes.objects.get(id=wine_type_id)
    wines = Wines.objects.filter(wine_type__id=wine_type_id) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .prefetch_related("producer", "color", "producer__region") \
        .order_by("-last_purchased_date")
    context = {
        "wines": wines,
        "wine_type": wine_type,
        "page_name": "Wine Type Profile",
    }
    return render(request, "wine_type_profile.html", context)
