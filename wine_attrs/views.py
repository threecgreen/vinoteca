r"""Contains views for CRUD functionality for WineTypes and Colors which are
'wine attributes.'"""
from django.db.models import Avg, Max, Sum
from django.shortcuts import render

from vinoteca.models import Wines, WineTypes, WineGrapes
from vinoteca.utils import c_or_u_wine_grapes, empty_to_none, get_logger, TableColumn


LOGGER = get_logger("wine_attrs")


def wine_type_profile(request, wine_type_id: int):
    r"""View for profiles of types of wine or wine types."""
    wine_type = WineTypes.objects.get(id=wine_type_id)
    wines = Wines.objects.filter(wine_type__id=wine_type_id) \
        .annotate(last_purchased_date=Max("purchases__date")) \
        .annotate(total_quantity=Sum("purchases__quantity")) \
        .annotate(avg_price=Avg("purchases__price")) \
        .prefetch_related("producer", "color", "producer__region", "viti_area") \
        .order_by("-last_purchased_date")
    columns = TableColumn.from_list([
        "Last Purchased", "Color", "Name", "Producer", "Region",
        "Viticultural Area", TableColumn("Total Quantity", num_col=True),
        TableColumn("Avg Price", num_col=True), TableColumn("Rating", num_col=True)
    ])
    context = {
        "wines": wines,
        "columns": columns,
        "wine_type": wine_type,
        "page_name": "Wine Type Profile",
    }
    return render(request, "wine_type_profile.html", context)


def handle_grapes(request, wine):
    r"""Create Grape and WineGrapes objects for a new wine or when a wine has
    been edited."""
    LOGGER.debug(f"Handling grape changes for POST request {request.POST}")
    LOGGER.debug("Preparing for overwriting grape data by removing old wine grapes.")
    WineGrapes.objects.filter(wine__id=wine.id).delete()
    i = 1
    while request.POST.get(f"grape-{i}"):
        grape = empty_to_none(request.POST.get(f"grape-{i}"))
        percent = empty_to_none(request.POST.get(f"grape-{i}-pct"), int)
        LOGGER.debug(f"Handling grape {grape} and percent {percent}")
        if grape and (percent is None or 0 < percent <= 100):
            c_or_u_wine_grapes(wine, grape, percent)
        else:
            LOGGER.debug("No more grape data")
            # No more grapes
            break
        i += 1
