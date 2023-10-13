from django.shortcuts import render
from rest_framework import viewsets, filters
from .serializers import IntensitySectorSerializer, LikelihoodYearSerializer, RelevanceSourceSerializer, YearTopicSerializer, CountryIntensitySerializer, TopicRegionSerializer, RegionIntensitySerilizer,  EndYearRegionSerializer, SourceIntensitySerializer
from .models import EnergyData
from django_filters.rest_framework import DjangoFilterBackend
from .filters import IntensitySectorFilter, LikelihoodYearFilter, RelevanceFilter, YearTopicFilter, CountryIntensityFilter, TopicRegionFilter, RegionIntensityFilter, EndYearRegionFilter, SourceFilter
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Sum

# Create your views here.

class IntensityDataViewSet(viewsets.ModelViewSet): #intensity paired with sector, y and x axes, empty entries ignored , Bar graph
    queryset=EnergyData.objects.exclude(intensity="").exclude(sector="")
    serializer_class= IntensitySectorSerializer
    filter_backends=(DjangoFilterBackend, filters.OrderingFilter)
    filterset_class=IntensitySectorFilter
    ordering_fields=['intensity', 'sector']

class LikelihoodYearDataViewSet(viewsets.ModelViewSet): # Likelihood paired with Year, y and x axes, empty entries ignored, Line graph
    queryset = EnergyData.objects.exclude(likelihood="").exclude(year="")
    serializer_class = LikelihoodYearSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_class = LikelihoodYearFilter
    ordering_fields = ['likelihood', 'year']

class RelevanceSourceDataViewSet(viewsets.ModelViewSet): # relevance paired with Source, y and x axes, empty entries ignored, bar graph 
    queryset= EnergyData.objects.exclude(relevance="").exclude(source="")
    serializer_class=  RelevanceSourceSerializer
    filterset_class= RelevanceFilter
    ordering_fields=['relevance', 'source']

class YearRelevanceDataViewSet(viewsets.ModelViewSet): #year paired with relevance, x and y axes, empty entries ignored, stacked area chart
    queryset= EnergyData.objects.exclude(relevance="").exclude(year="")
    serializer_class= YearTopicSerializer
    filterset_class= YearTopicFilter
    ordering_fields=['relevance', 'year']

class CountryIntensityDataView(viewsets.ModelViewSet):
    serializer_class = CountryIntensitySerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(country="").exclude(intensity="")
        country_intensity = {}

        for item in queryset:
            country = item.country
            intensity = item.intensity
            try:
                intensity = int(intensity)
            except (ValueError, TypeError):
                intensity = 0

            if country in country_intensity:
                country_intensity[country]['total_intensity'] += intensity
                country_intensity[country]['intensity'] += intensity
            else:
                country_intensity[country] = {'total_intensity': intensity, 'intensity': intensity}

        response_data = []

        for country, data in country_intensity.items():
            response_data.append({
                'country': country,
                'total_intensity': data['total_intensity'],
                'intensity': data['intensity']
            })

        serializer = CountryIntensitySerializer(response_data, many=True)
        return Response(serializer.data)


class TopicRegionDataView(viewsets.ModelViewSet): #topic paired with Region, y and x axes
    queryset= EnergyData.objects.exclude(topic="").exclude(region="")
    serializer_class= TopicRegionSerializer
    filterset_class= TopicRegionFilter
    ordering_fields=['topic', 'region']

class RegionIntensityDataView(viewsets.ModelViewSet): #region paired with intensity, x and y axes, choropelth
    queryset= EnergyData.objects.exclude(region="").exclude(intensity="")
    serializer_class=RegionIntensitySerilizer
    filterset_class= RegionIntensityFilter
    ordering_fields=['region', 'intensity']


class EndYearRegionDataView(viewsets.ModelViewSet): #end_year paired with region,x and y axes. heatmap?
    queryset = EnergyData.objects.exclude(end_year="").exclude(region="")
    serializer_class = EndYearRegionSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = EndYearRegionFilter
    ordering_fields=["end_year", "region"]

    
class SourceIntensityView(viewsets.ModelViewSet):
    queryset= EnergyData.objects.exclude(source="").exclude(intensity="")
    serializer_class= SourceIntensitySerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class= SourceFilter
    ordering_fields=['source','intensity']


