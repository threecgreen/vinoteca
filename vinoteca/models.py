from django.db import models


class Countries(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500, blank=True, null=True)
    is_us = models.IntegerField(default=1)

    class Meta:
        managed = False
        db_table = "countries"


class WineTypes(models.Model):
    id = models.AutoField(primary_key=True)
    type_name = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = "wine_types"


class Additionals(models.Model):
    id = models.AutoField(primary_key=True)
    additional = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "additionals"


class Colors(models.Model):
    id = models.AutoField(primary_key=True)
    color = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = "colors"


class Producers(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500, blank=True, null=True)
    country = models.ForeignKey("Countries", models.DO_NOTHING, db_column="country_id")

    class Meta:
        managed = False
        db_table = "producers"


class Wines(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=500, blank=True, null=True)
    notes = models.CharField(max_length=500, blank=True, null=True)
    rating = models.FloatField(blank=True, null=True)
    producer = models.ForeignKey("Producers", models.DO_NOTHING, db_column="producer_id")
    wine_type = models.ForeignKey("WineTypes", models.DO_NOTHING, db_column="type_id")
    additional = models.ForeignKey("Additionals", models.DO_NOTHING, db_column="add_id")
    color = models.ForeignKey("Colors", models.DO_NOTHING, db_column="color_id")

    class Meta:
        managed = False
        db_table = "wines"


class Stores(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500)
    address = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "stores"


class Purchases(models.Model):
    id = models.AutoField(primary_key=True)
    wine = models.ForeignKey("Wines", models.DO_NOTHING, db_column="wine_id")
    store = models.ForeignKey("Stores", models.DO_NOTHING, db_column="store_id")
    price = models.FloatField(null=True, blank=True)
    quantity = models.IntegerField()
    date = models.IntegerField(null=True, blank=True)
    vintage = models.IntegerField(null=True, blank=True)
    why = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = "purchases"
