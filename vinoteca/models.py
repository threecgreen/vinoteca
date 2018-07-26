from django.db import models


class Colors(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'colors'


class Regions(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)
    is_us = models.IntegerField()

    class Meta:
        db_table = 'regions'


class Grapes(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'grapes'


class Producers(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)
    region = models.ForeignKey("Regions", models.DO_NOTHING, db_column="region_id", null=True, db_index=True)

    class Meta:
        db_table = 'producers'


class Purchases(models.Model):
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
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'stores'


class VitiAreas(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(db_index=True)
    region = models.ForeignKey("Regions", models.DO_NOTHING, db_column="region_id", db_index=True)

    class Meta:
        db_table = 'viti_areas'


class WineGrapes(models.Model):
    id = models.AutoField(primary_key=True)
    wine = models.ForeignKey("Wines", models.DO_NOTHING, db_column="wine_id", db_index=True)
    grape = models.ForeignKey("Grapes", models.DO_NOTHING, db_column="grape_id", db_index=True)
    percent = models.IntegerField(null=True)

    class Meta:
        db_table = 'wine_grapes'
        unique_together = (('wine', 'grape'),)


class WineTypes(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(unique=True, db_index=True)

    class Meta:
        db_table = 'wine_types'


class Wines(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.TextField(null=True)
    notes = models.TextField(null=True)
    name = models.TextField(null=True)
    producer = models.ForeignKey("Producers", models.DO_NOTHING, db_column="producer_id", null=True, db_index=True)
    wine_type = models.ForeignKey(WineTypes, models.DO_NOTHING, db_column="wine_type_id", null=True, db_index=True)
    color = models.ForeignKey(Colors, models.DO_NOTHING, db_column="color_id", null=True, db_index=True)
    rating = models.FloatField(null=True)
    inventory = models.IntegerField(db_index=True)
    viti_area = models.ForeignKey("VitiAreas", models.DO_NOTHING, db_column="viti_area_id", null=True, db_index=True)
    why = models.TextField(null=True)

    class Meta:
        db_table = 'wines'
