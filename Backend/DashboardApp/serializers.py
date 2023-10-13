from rest_framework import serializers
from .models import EnergyData
from django.db.models import Q, Sum


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

class YearTopicSerializer(serializers.ModelSerializer):
    year= serializers.CharField()

    class Meta:
        model=EnergyData
        fields=['topic', 'year']
    def get_year(self, obj):
        if obj.year == "Year not specified" or not obj.year:
            return None  # Return None for empty or "Year not specified" years
        return obj.year
    
class CountryIntensitySerializer(serializers.Serializer):
    country = serializers.CharField()
    # intensity = serializers.IntegerField()
    total_intensity = serializers.IntegerField()


class CountryIntensitySerializer(serializers.Serializer):
    country = serializers.CharField()
    intensity = serializers.IntegerField()
    total_intensity = serializers.IntegerField()  # Add a total_intensity field

class TopicRegionSerializer(serializers.ModelSerializer):
    # topic= serializers.CharField()
    # region= serializers.CharField()

    class Meta:
        model =EnergyData
        fields=['topic', 'region']

class RegionIntensitySerilizer(serializers.ModelSerializer):
    intensity= serializers.IntegerField()

    class Meta:
        model= EnergyData
        fields=['region', 'intensity']

# class CityLikelihoodSerializer(serializers.ModelSerializer):
#     likelihood= serializers.IntegerField()

#     class Meta:
#         model=EnergyData
#         fields=['city', 'likelihood']

class EndYearRegionSerializer(serializers.ModelSerializer):
    end_year= serializers.IntegerField()

    class Meta:
        model= EnergyData
        fields=['end_year', 'region']

class SourceIntensitySerializer(serializers.ModelSerializer):
    intensity= serializers.IntegerField()

    class Meta:
        model= EnergyData
        fields=['source', 'intensity']


