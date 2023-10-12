from django.shortcuts import render
from rest_framework import viewsets, filters
from .serializers import EnergyDataSerializer, IntensitySectorSerializer, LikelihoodYearSerializer
from .models import EnergyData
from django_filters.rest_framework import DjangoFilterBackend
from .filters import IntensitySectorFilter, LikelihoodYearFilter

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


class LikelihoodYearViewSet(viewsets.ModelViewSet): #Likelihood paired with year, y and x axes, empty entries ignored, Line graph
    queryset= EnergyData.objects.exclude(likelihood="").exclude(year="")
    serializer_class= LikelihoodYearSerializer
    filter_backends=(DjangoFilterBackend, filters.OrderingFilter)
    filterset_class= IntensitySectorFilter
    ordering_fields=['likelihood', 'year']
    





    
