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
