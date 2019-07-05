r""""Contains models for data used in dashboards. These models correspond with
queries, not database tables and are therefore not managed."""
from django.db import models


class InventoryWine(models.Model):
    r"""Represents one wine in the inventory."""
    id = models.IntegerField(primary_key=True)
    color = models.TextField()
    name = models.TextField()
    wine_type_id = models.IntegerField(unique=True)
    wine_type = models.TextField()
    producer_id = models.IntegerField(unique=True)
    producer = models.TextField()
    region_id = models.IntegerField(unique=True)
    region = models.TextField()
    vintage = models.IntegerField()
    last_purchased_date = models.IntegerField()
    inventory = models.IntegerField(null=True)
    last_purchased_price = models.FloatField(null=True)

    class Meta:
        managed = False

    def __repr__(self):
        return (f"<InventoryWine(id={self.id}, color={self.color}, "
                f"name={self.name}, wine_type_id={self.wine_type_id}, wine_type={self.wine_type}, "
                f"producer_id={self.producer_id}, producer={self.producer}, "
                f"region_id={self.region_id}, region={self.region}, vintage={self.vintage}, "
                f"last_purchased_date={self.last_purchased_date}, "
                f"inventory={self.inventory}, last_purchased_price={self.last_purchased_price})>")


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
