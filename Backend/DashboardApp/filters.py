import django_filters
from .models import EnergyData

class IntensitySectorFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'intensity': ['exact', 'lt', 'lte', 'gt', 'gte'],
            'sector': ['exact', 'iexact', 'icontains'],
        }

class LikelihoodYearFilter(django_filters.FilterSet):
    class Meta:
        model = EnergyData
        fields = {
            'likelihood': ['exact', 'lt', 'lte', 'gt', 'gte'],
            'start_year': ['exact', 'lt', 'lte', 'gt', 'gte'],
            'end_year': ['exact', 'lt', 'lte', 'gt', 'gte'],
        }