from django.urls import path, include 
from .import views
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
# router.register(r'energy-data', views.EnergyDataViewSet)

#variables
router.register(r'relevance', views.RelevanceSourceDataView, basename='relevancesourcedata')# clear
router.register(r'intensity', views.IntensitySectorDataView, basename='intensitysectordata') # clear 
router.register(r'country', views.CountryIntensityDataView, basename='countryintensitydata')#clear
router.register(r'region', views.RegionIntensityDataView, basename='regionintensitydata' ) #clear
router.register(r'source', views.SourceIntensityView, basename='sourceintensitydata')
router.register(r'topic', views.TopicRegionDataView, basename='topicregiondata') #review
router.register(r'likelihood', views.LikelihoodYearDataView, basename='likelihoodyeardata')
router.register(r'year', views.YearRelevanceDataView, basename='yearrelevance')
router.register(r'end_year', views.EndYearRegionDataView, basename='endyearregion') #review
router.register(r'pestle', views.PestleLikelihoodDataView, basename='pestlelikelihood')






urlpatterns = [
    path('', include(router.urls)),  # Include the viewset URLs

]