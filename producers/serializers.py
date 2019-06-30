from rest_framework import serializers

from vinoteca.models import Producers

class ProducerNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producers
        fields = ("name",)


class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producers
        fields = ("id", "name", "region")
