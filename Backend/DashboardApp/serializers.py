from rest_framework import serializers
from .models import EnergyData
from django.db.models import Q

class EnergyDataSerializer(serializers.ModelSerializer):
    intensity= serializers.IntegerField(default=0)

    class Meta:
        model= EnergyData
        fields= '__all__' # include all fields from the EnergyData model

class IntensitySectorSerializer(serializers.ModelSerializer):
    intensity= serializers.IntegerField()
    class Meta:
        model = EnergyData
        fields = ['intensity', 'sector']

class LikelihoodYearSerializer(serializers.ModelSerializer):
    likelihood = serializers.IntegerField()
    year = serializers.IntegerField()

    class Meta:
        model = EnergyData
        fields = ['likelihood', 'year']