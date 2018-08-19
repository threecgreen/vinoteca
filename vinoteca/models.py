r"""Contains all Django ORM models for vinoteca data. This file is therefore
the equivalent of the database schema since Django manages the database. Each
class corresponds to a table in the database."""
from django.db import models


class Colors(models.Model):
    r"""Wine colors such as red, white, sparkling, etc."""
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'colors'


class Regions(models.Model):
    r"""Regions which are states of the US and countries other than the US."""
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)
    is_us = models.IntegerField()

    class Meta:
        db_table = 'regions'


class Grapes(models.Model):
    r"""Grapes used to make wines."""
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'grapes'


class Producers(models.Model):
    r"""Wine producers."""
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)
    region = models.ForeignKey("Regions", models.DO_NOTHING,
                               db_column="region_id", null=True, db_index=True)

    class Meta:
        db_table = 'producers'


class Purchases(models.Model):
    r"""Represents one purchase of one wine."""
    id = models.AutoField(primary_key=True)
    store = models.ForeignKey('Stores', models.DO_NOTHING, null=True, db_index=True)
    wine = models.ForeignKey('Wines', models.DO_NOTHING, db_index=True)
    price = models.FloatField(null=True)
    quantity = models.IntegerField(null=True)
    date = models.IntegerField(null=True, db_index=True)
    vintage = models.IntegerField(null=True)
    memo = models.TextField(null=True)

    class Meta:
        db_table = 'purchases'


class Stores(models.Model):
    r"""A store or other place where wine is obtained such as as a gift."""
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'stores'


class VitiAreas(models.Model):
    r"""Viticultural areas. Usually controlled places of origin for wines like
    'a Bordeaux.'"""
    id = models.AutoField(primary_key=True)
    name = models.TextField(db_index=True)
    region = models.ForeignKey("Regions", models.DO_NOTHING,
                               db_column="region_id", db_index=True)

    class Meta:
        db_table = 'viti_areas'


class WineGrapes(models.Model):
    r"""Junction object between a wine and grapes because of the many-to-many
    relationship. Also keeps track of the percentage the grape makes up of the
    wine."""
    id = models.AutoField(primary_key=True)
    wine = models.ForeignKey("Wines", models.DO_NOTHING, db_column="wine_id", db_index=True)
    grape = models.ForeignKey("Grapes", models.DO_NOTHING, db_column="grape_id", db_index=True)
    percent = models.IntegerField(null=True)

    class Meta:
        db_table = 'wine_grapes'
        unique_together = (('wine', 'grape'),)


class WineTypes(models.Model):
    r"""Wine types like Chardonnay."""
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'wine_types'


class Wines(models.Model):
    r"""A particular wine."""
    id = models.AutoField(primary_key=True)
    description = models.TextField(null=True)
    notes = models.TextField(null=True)
    name = models.TextField(null=True)
    producer = models.ForeignKey("Producers", models.DO_NOTHING,
                                 db_column="producer_id", null=True,
                                 db_index=True)
    wine_type = models.ForeignKey(WineTypes, models.DO_NOTHING,
                                  db_column="wine_type_id", null=True,
                                  db_index=True)
    color = models.ForeignKey(Colors, models.DO_NOTHING, db_column="color_id",
                              null=True, db_index=True)
    rating = models.FloatField(null=True)
    inventory = models.IntegerField(db_index=True)
    viti_area = models.ForeignKey("VitiAreas", models.DO_NOTHING,
                                  db_column="viti_area_id", null=True,
                                  db_index=True)
    why = models.TextField(null=True)

    class Meta:
        db_table = 'wines'
