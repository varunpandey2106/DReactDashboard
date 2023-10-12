import django_filters
from .models import EnergyData

class IntensitySectorFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'intensity': ['exact', 'lt', 'lte', 'gt', 'gte'],
            'sector': ['exact', 'iexact', 'icontains'],
        }

import django_filters

class LikelihoodYearFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'likelihood': ['exact', 'lt', 'lte', 'gt', 'gte'],
            'year': ['exact', 'lt', 'lte', 'gt', 'gte'],
        }

class RelevanceFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'relevance': ['exact', 'iexact', 'icontains', 'gt', 'lt', 'gte', 'lte'],
        }

class YearTopicFilter(django_filters.FilterSet):
    topic = django_filters.CharFilter(lookup_expr='icontains')  # You can adjust the lookup expression as needed

    class Meta:
        model = EnergyData
        fields = ['topic']

class CountryIntensityFilter(django_filters.FilterSet):
    country = django_filters.CharFilter(lookup_expr='icontains')  # You can adjust the lookup expression
    intensity = django_filters.NumberFilter()

    class Meta:
        model = EnergyData  # Replace with your actual model
        fields = ['country', 'intensity']

class TopicRegionFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'topic': ['exact', 'iexact', 'icontains'],
            'region': ['exact', 'iexact', 'icontains'],
        }

class RegionIntensityFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'region': ['exact', 'iexact', 'icontains'],
            'intensity': ['exact', 'lt', 'lte', 'gt', 'gte'],
        }