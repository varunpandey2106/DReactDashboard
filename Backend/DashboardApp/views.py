from django.shortcuts import render
from rest_framework import viewsets, filters
from .serializers import EnergyDataSerializer, IntensitySectorSerializer, LikelihoodYearSerializer, RelevanceSourceSerializer, YearTopicSerializer, CountryIntensitySerializer, TopicRegionSerializer, RegionIntensitySerilizer
from .models import EnergyData
from django_filters.rest_framework import DjangoFilterBackend
from .filters import IntensitySectorFilter, LikelihoodYearFilter, RelevanceFilter, YearTopicFilter, CountryIntensityFilter, TopicRegionFilter, RegionIntensityFilter

# Create your views here.

class EnergyDataViewSet(viewsets.ModelViewSet):
    queryset=EnergyData.objects.all() #retrieve all objects for the database table
    serializer_class=EnergyDataSerializer

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

class CountryIntensityDataView(viewsets.ModelViewSet): #country paired with intensity, x and y axes, bar chart
    queryset= EnergyData.objects.exclude(country="").exclude(intensity="")
    serializer_class= CountryIntensitySerializer
    filterset_class= CountryIntensityFilter
    ordering_fields=['country', 'intensity']

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







    
