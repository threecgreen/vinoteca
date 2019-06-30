from rest_framework import serializers
from .models import WineSearchResult


class WineSearchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineSearchResult
        fields = "__all__"


class WineSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(allow_null=True)
    color = serializers.CharField(source="color.name")
    producer_id = serializers.IntegerField()
    producer = serializers.CharField(source="producer.name")
    region_id = serializers.IntegerField(source="producer.region_id")
    region = serializers.CharField(source="producer.region.name")
    wine_type = serializers.CharField(source="wine_type.name")
    viti_area_id = serializers.IntegerField(allow_null=True)
    viti_area = serializers.CharField(source="viti_area.name", allow_null=True)
    total_quantity = serializers.IntegerField()
    avg_price = serializers.FloatField()
    last_purchased_date = serializers.IntegerField()
