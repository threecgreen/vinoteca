from rest_framework import serializers
from .models import InventoryWine

class InventoryWineSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryWine
        fields = "__all__"
