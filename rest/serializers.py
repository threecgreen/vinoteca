r"""Contains serializers for vinoteca ORM models."""
from rest_framework import serializers
from vinoteca.models import (
    Colors, Grapes, Regions, Producers, Stores, VitiAreas, WineGrapes,
    WineTypes, Wines
)


class ColorNamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ("name",)


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ("id", "name")


class GrapeNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grapes
        fields = ("name",)


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regions
        fields = ("id", "name", "is_us")


class ProducerNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producers
        fields = ("name",)


class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producers
        fields = ("id", "name", "region")


class StoreNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stores
        fields = ("name",)


class VitiAreaNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = VitiAreas
        fields = ("name",)


class VitiAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = VitiAreas
        fields = ("id", "name", "region")


# pylint: disable=missing-docstring
class WineGrapeSerializer(serializers.ModelSerializer):
    grape = serializers.StringRelatedField()

    class Meta:
        model = WineGrapes
        fields = ("id", "wine", "grape", "percent")


class WineTypeNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineTypes
        fields = ("name",)


class WineTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WineTypes
        fields = ("id", "name")


class WineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wines
        fields = ("id", "name", "producer", "wine_type", "color", "viti_area")
