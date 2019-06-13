r""""Contains models for data used in dashboards. These models correspond with
queries, not database tables and are therefore not managed."""
from django.db import models


class InventoryWine(models.Model):
    r"""Represents one wine in the inventory."""
    wine_id = models.IntegerField(primary_key=True)
    color = models.TextField()
    name = models.TextField()
    wine_type_id = models.IntegerField(unique=True)
    wine_type = models.TextField()
    producer_id = models.IntegerField(unique=True)
    producer = models.TextField()
    region_id = models.IntegerField(unique=True)
    region = models.TextField()
    vintage = models.IntegerField()
    last_purchase_date = models.IntegerField()
    inventory_cnt = models.IntegerField()
    last_price = models.FloatField()

    class Meta:
        managed = False

    def __repr__(self):
        return (f"<InventoryWine(wine_id={self.wine_id}, color={self.color}, "
                f"name={self.name}, wine_type_id={self.wine_type_id}, wine_type={self.wine_type}, "
                f"producer_id={self.producer_id}, producer={self.producer}, region_id={self.region_id}, "
                f"region={self.region}, vintage={self.vintage}, last_purchase_date={self.last_purchase_date}, "
                f"inventory_cnt={self.inventory_cnt}, last_price={self.last_price})>")


class Year(models.Model):
    r"""Contains aggregate data about all the wine purchases in a year."""
    year = models.IntegerField(primary_key=True)
    quantity = models.IntegerField()
    price = models.FloatField()
    avg_price = models.FloatField()
    avg_vintage = models.FloatField()

    class Meta:
        managed = False

    def __repr__(self):
        return (f"<Year(year={self.year}, quantity={self.quantity}, price={self.price}, "
                f"avg_price={self.avg_price}, avg_vintage={self.avg_vintage})>")
