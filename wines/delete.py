# pylint: disable=unused-argument
from django.shortcuts import redirect

from vinoteca.models import Purchases, WineGrapes, Wines


def delete_wine(request, wine_id: int):
    r"""View for deleting a wine."""
    wine = Wines.objects.get(id=wine_id)
    wine_grapes = WineGrapes.objects.filter(wine=wine)
    wine_grapes.delete()
    purchases = Purchases.objects.filter(wine=wine)
    purchases.delete()
    # Determine if producer was created for this wine
    if Wines.objects.filter(producer__id=wine.producer.id).count() == 1:
        wine.producer.delete()
    wine.delete()
    return redirect("Wines:Wines")


def delete_purchase(request, wine_id: int, purchase_id: int):
    r"""View for handling delete purchase request."""
    purchase = Purchases.objects.get(id=purchase_id)
    if purchase.wine.id != wine_id:
        raise ValueError("Wine id and purchase id did not match.")
    purchase.delete()
    return redirect("Wines:Edit Wine", wine_id=wine_id)
