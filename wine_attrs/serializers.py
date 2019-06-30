from rest_framework import serializers

from vinoteca.models import Colors, Grapes, Stores, WineGrapes, WineTypes


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
    wines = serializers.IntegerField(required=False)
    class Meta:
        model = Grapes
        fields = ("id", "name", "wines")
        read_only_fields = ('wines',)


class PurchaseSerializer(serializers.Serializer):
    # TODO: validations
    id = serializers.IntegerField()
    store = serializers.CharField()
    wine = serializers.IntegerField()
    price = serializers.FloatField()
    quantity = serializers.IntegerField()
    date = serializers.IntegerField()
    vintage = serializers.IntegerField()
    memo = serializers.CharField()


class StoreNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stores
        fields = ("name",)


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
