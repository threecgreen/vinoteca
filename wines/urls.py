# pylint: disable=invalid-name
from django.urls import path

from wines.create import NewPurchaseView, NewWineView
from wines.read import (
    search_wines_view, search_wines_results_view, WineProfileView, wines_view
)
from wines.update import EditPurchaseView, EditWineView
from wines.delete import delete_purchase, delete_wine

wine_patterns = [
    path("new/", NewWineView.as_view(), name="New Wine"),
    path("<int:wine_id>/new-purchase/", NewPurchaseView.as_view(), name="New Purchase"),

    path("", wines_view, name="Wines"),
    path("search/", search_wines_view, name="Search Wines"),
    path("search/json-results/", search_wines_results_view, name="Search Wines JSON"),
    path("<int:wine_id>/", WineProfileView.as_view(), name="Wine Profile"),

    path("<int:wine_id>/edit/", EditWineView.as_view(), name="Edit Wine"),
    path("<int:wine_id>/purchases/<int:purchase_id>/edit/", EditPurchaseView.as_view(),
         name="Edit Purchase"),

    path("<int:wine_id>/purchases/<int:purchase_id>/delete/", delete_purchase,
         name="Delete Purchase"),
    path("<int:wine_id>/edit/delete/confirmed/", delete_wine, name="Delete Wine"),
]
