from django.urls import path, include 
from .import views
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
# router.register(r'energy-data', views.EnergyDataViewSet)

#variables
router.register(r'intensity', views.IntensityDataViewSet)
router.register(r'likelihood', views.LikelihoodYearDataViewSet)
router.register(r'relevance', views.RelevanceSourceDataViewSet)
router.register(r'year', views.YearRelevanceDataViewSet)
router.register(r'country', views.CountryIntensityDataView, basename='countryintensitydata')
router.register(r'topic', views.TopicRegionDataView)
router.register(r'region', views.RegionIntensityDataView )
# router.register(r'region', views.CityLikelihoodDataView)
router.register(r'end_year', views.EndYearRegionDataView)
router.register(r'source', views.SourceIntensityView)



urlpatterns = [
    path('', include(router.urls)),  # Include the viewset URLs

]