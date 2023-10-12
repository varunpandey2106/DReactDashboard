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
    year = django_filters.CharFilter(method='filter_by_year')

    class Meta:
        model = EnergyData
        fields = {
            'likelihood': ['exact', 'lt', 'lte', 'gt', 'gte'],
        }

    def filter_by_year(self, queryset, name, value):
        return queryset.filter(
            Q(start_year__icontains=value) | Q(end_year__icontains=value)
        )