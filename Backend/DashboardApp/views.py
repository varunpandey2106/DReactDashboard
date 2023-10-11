from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EnergyDataSerializer
from .models import EnergyData

# Create your views here.

class EnergyDataViewSet(viewsets.ModelViewSet):
    queryset=EnergyData.objects.all() #retrieve all objects for the database table
    serializer_class=EnergyDataSerializer

