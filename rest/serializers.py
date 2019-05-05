r"""Contains serializers for vinoteca ORM models."""
from rest_framework import serializers
from django_filters import FilterSet, ModelChoiceFilter

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


class GrapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grapes
        fields = ("id", "name")


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regions
        fields = ("id", "name")


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


class WineSearchResultSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    color = serializers.CharField()
    producer = serializers.CharField()
    region = serializers.CharField()
    wine_type = serializers.CharField()
    viti_area = serializers.CharField()


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
