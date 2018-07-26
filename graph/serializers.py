from rest_framework import serializers
from vinoteca.models import *


class ColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ("id", "name")


class RegionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regions
        fields = ("id", "name", "is_us")


class ProducersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producers
        fields = ("id", "name", "region")


class VitiAreasSerializer(serializers.ModelSerializer):
    class Meta:
        model = VitiAreas
        fields = ("id", "wine", "grape", "percent")


class WineTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineTypes
        fields = ("id", "name")


class WinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wines
        fields = ("id", "name", "producer", "wine_type", "color", "viti_area")
