from django.urls import path, include 
from .import views
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
router.register(r'energy-data', views.EnergyDataViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Include the viewset URLs
]