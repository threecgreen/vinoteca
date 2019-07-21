from django.db import models


class WineSearchResult(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField()
    color = models.TextField()
    producer = models.TextField()
    region = models.TextField()
    wine_type = models.TextField()
    viti_area = models.TextField()

    class Meta:
        managed = False


class WineTableWine(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(null=True)
    rating = models.IntegerField(null=True)
    region = models.TextField()
    producer = models.TextField()
    name = models.TextField(null=True)
    wine_type = models.TextField()
    color = models.TextField()
    inventory = models.IntegerField()
    vintage = models.IntegerField(null=True)
    viti_area = models.TextField(null=True)
    viti_area_id = models.IntegerField(null=True)
    region_id = models.IntegerField()
    producer_id = models.IntegerField()
    wine_type_id = models.IntegerField()

    class Meta:
        managed = False
