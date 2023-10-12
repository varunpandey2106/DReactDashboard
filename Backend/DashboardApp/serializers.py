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
    likelihood= serializers.IntegerField()
    year= serializers.SerializerMethodField()

    class Meta:
        fields='__all__'

    def get_year(self, obj):
            start_year= obj.start_year
            end_year= obj.end_year

            if start_year and end_year:
                return f"{start_year}-{end_year}"
            elif start_year:
                return start_year
            elif end_year:
                return end_year
            else:
                return "year not specified"