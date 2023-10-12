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
    likelihood = serializers.IntegerField(allow_null= True)
    year = serializers.CharField()

    class Meta:
        model = EnergyData
        fields = ['likelihood', 'year']
    def get_year(self, obj):
        if obj.year == "Year not specified" or not obj.year:
            return None  # Return None for empty or "Year not specified" years
        return obj.year

class RelevanceSourceSerializer(serializers.ModelSerializer):
    relevance= serializers.IntegerField()
    # char field source 
    class Meta:
        model=EnergyData
        fields=['relevance', 'source']