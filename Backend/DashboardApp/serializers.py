from rest_framework import serializers
from .models import EnergyData
from django.db.models import Q, Sum


class IntensitySectorSerializer(serializers.Serializer):
    sector = serializers.CharField()
    intensity = serializers.IntegerField()
    total_intensity = serializers.IntegerField()

class LikelihoodYearSerializer(serializers.Serializer):
    year = serializers.CharField()
    likelihood = serializers.IntegerField()

class RelevanceSourceSerializer(serializers.ModelSerializer):
    relevance= serializers.IntegerField()
    source= serializers.CharField()

    class Meta:
        model= EnergyData
        fields=['relevance', 'source']

class YearRelevanceSerializer(serializers.Serializer):
    year = serializers.CharField()
    total_relevance = serializers.IntegerField()  # Add total_relevance field

class YearTopicSerializer(serializers.Serializer):
    year = serializers.CharField()
    total_likelihood = serializers.IntegerField()

    class Meta:
        fields = ['year', 'total_likelihood']
    
class CountryIntensitySerializer(serializers.Serializer):
    country = serializers.CharField()
    intensity = serializers.IntegerField()
    total_intensity = serializers.IntegerField()


class CountryIntensitySerializer(serializers.Serializer):
    country = serializers.CharField()
    intensity = serializers.IntegerField()
    total_intensity = serializers.IntegerField()  # Add a total_intensity field

class TopicRegionSerializer(serializers.ModelSerializer):
    topic= serializers.CharField()
    region= serializers.CharField()

    class Meta:
        model =EnergyData
        fields=['topic', 'region']

class RegionIntensitySerializer(serializers.ModelSerializer):
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
    source= serializers.CharField()

    class Meta:
        model= EnergyData
        fields=['source', 'intensity']


