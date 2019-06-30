from rest_framework import serializers
from .models import WineSearchResult


class WineSearchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineSearchResult


class WineSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(allow_null=True)
    color = serializers.CharField(source="color.name")
    producer = serializers.CharField(source="producer.name")
    region = serializers.CharField(source="producer.region.name")
    wine_type = serializers.CharField(source="wine_type.name")
    viti_area = serializers.CharField(source="viti_area.name", allow_null=True)
    total_quantity = serializers.IntegerField()
    avg_price = serializers.FloatField()
    last_purchased_date = serializers.IntegerField()
