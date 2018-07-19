from rest_framework import serializers
from vinoteca.models import *


class ColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ("id", "color")


class CountriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Countries
        fields = ("id", "name", "is_us")


class ProducersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producers
        fields = ("id", "name", "country")


class VitiAreasSerializer(serializers.ModelSerializer):
    class Meta:
        model = VitiAreas
        fields = ("id", "wine", "grape", "percent")


class WineTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineTypes
        fields = ("id", "type_name")


class WinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wines
        fields = ("id", "name", "producer", "wine_type", "color", "viti_area")
