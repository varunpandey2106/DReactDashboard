from django.shortcuts import render
from rest_framework import viewsets, filters
from .serializers import EnergyDataSerializer
from .models import EnergyData
from django_filters.rest_framework import DjangoFilterBackend
from .filters import IntensitySectorFilter

# Create your views here.

class EnergyDataViewSet(viewsets.ModelViewSet):
    queryset=EnergyData.objects.all() #retrieve all objects for the database table
    serializer_class=EnergyDataSerializer

class IntensityDataViewSet(viewsets.ModelViewSet): #intensity paired with sector, y and x axes, empty entries ignored 
    queryset=EnergyData.objects.exclude(intensity="").exclude(sector="")
    serializer_class= EnergyDataSerializer
    filter_backends=(DjangoFilterBackend, filters.OrderingFilter)
    filterset_class=IntensitySectorFilter
    ordering_fields='__all__'





    
