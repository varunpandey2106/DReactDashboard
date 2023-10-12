from django.urls import path, include 
from .import views
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
router.register(r'energy-data', views.EnergyDataViewSet)

#variables
router.register(r'intensity', views.IntensityDataViewSet)
router.register(r'likelihood', views.LikelihoodYearDataViewSet)


urlpatterns = [
    path('', include(router.urls)),  # Include the viewset URLs
]