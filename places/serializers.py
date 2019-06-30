from rest_framework import serializers
from vinoteca.models import Regions, VitiAreas

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regions
        fields = ("id", "name")


class VitiAreaNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = VitiAreas
        fields = ("name",)


class VitiAreaStatsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    total_wines = serializers.IntegerField(source='total_quantity')
    avg_price = serializers.FloatField(allow_null=True)
    avg_rating = serializers.FloatField(allow_null=True)


class VitiAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = VitiAreas
        fields = ("id", "name", "region")
