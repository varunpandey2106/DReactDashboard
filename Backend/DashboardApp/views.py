from django.shortcuts import render
from rest_framework import viewsets, filters
from .serializers import IntensitySectorSerializer, LikelihoodYearSerializer, RelevanceSourceSerializer, YearRelevanceSerializer, CountryIntensitySerializer, TopicRegionSerializer, RegionIntensitySerializer,  EndYearRegionSerializer, SourceIntensitySerializer,PestleLikelihoodSerializer
from .models import EnergyData
from django_filters.rest_framework import DjangoFilterBackend
from .filters import IntensitySectorFilter, LikelihoodYearFilter, RelevanceFilter, YearTopicFilter, CountryIntensityFilter, TopicRegionFilter, RegionIntensityFilter, EndYearRegionFilter, SourceFilter
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Sum

# Create your views here.

class IntensitySectorDataView(viewsets.ModelViewSet):
    serializer_class = CountryIntensitySerializer  # You can keep the same serializer for simplicity

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(sector="").exclude(intensity="")
        sector_intensity = {}

        for item in queryset:
            sector = item.sector  # Replace "country" with "sector"
            intensity = item.intensity
            try:
                intensity = int(intensity)
            except (ValueError, TypeError):
                intensity = 0

            if sector in sector_intensity:
                sector_intensity[sector]['total_intensity'] += intensity
                sector_intensity[sector]['intensity'] += intensity
            else:
                sector_intensity[sector] = {'total_intensity': intensity, 'intensity': intensity}

        response_data = []

        for sector, data in sector_intensity.items():
            response_data.append({
                'sector': sector,
                'total_intensity': data['total_intensity'],
                'intensity': data['intensity']
            })

        serializer = IntensitySectorSerializer(response_data, many=True)
        return Response(serializer.data)



# class LikelihoodYearDataViewSet(viewsets.ModelViewSet): # Likelihood paired with Year, y and x axes, empty entries ignored, Line graph
#     queryset = EnergyData.objects.exclude(likelihood="").exclude(year="")
#     serializer_class = LikelihoodYearSerializer
#     filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
#     filterset_class = LikelihoodYearFilter
#     ordering_fields = ['likelihood', 'year']

class LikelihoodYearDataView(viewsets.ViewSet):
    serializer_class = LikelihoodYearSerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(year="Year not specified").exclude(year__contains='-')

        year_likelihood_data = {}

        for item in queryset:
            year_value = item.year
            likelihood_value = item.likelihood

            try:
                likelihood_value = int(likelihood_value)
            except (ValueError, TypeError):
                likelihood_value = 0

            if year_value in year_likelihood_data:
                year_likelihood_data[year_value]['total_likelihood'] += likelihood_value
            else:
                year_likelihood_data[year_value] = {'total_likelihood': likelihood_value}

        response_data = []

        for year, data in year_likelihood_data.items():
            response_data.append({
                'year': year,
                'likelihood': data['total_likelihood']
            })

        serializer = LikelihoodYearSerializer(response_data, many=True)
        return Response(serializer.data)



class RelevanceSourceDataView(viewsets.ModelViewSet):
    serializer_class = RelevanceSourceSerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(source="").exclude(relevance="")
        source_relevance_data = {}

        for item in queryset:
            source = item.source
            relevance = item.relevance
            try:
                relevance = int(relevance)
            except (ValueError, TypeError):
                relevance = 0

            if source in source_relevance_data:
                source_relevance_data[source]['total_relevance'] += relevance
                source_relevance_data[source]['relevance'] += relevance
            else:
                source_relevance_data[source] = {'total_relevance': relevance, 'relevance': relevance}

        # Sort the data by relevance in descending order
        sorted_data = sorted(source_relevance_data.items(), key=lambda item: item[1]['relevance'], reverse=True)

        # Take the top 10 items
        top_10_data = sorted_data[:10]

        response_data = []

        for source, data in top_10_data:
            response_data.append({
                'source': source,
                'total_relevance': data['total_relevance'],
                'relevance': data['relevance']
            })

        serializer = RelevanceSourceSerializer(response_data, many=True)
        return Response(serializer.data)

class YearRelevanceDataView(viewsets.ViewSet):
    serializer_class = YearRelevanceSerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(year="Year not specified").exclude(year__contains='-')

        year_relevance_data = {}

        for item in queryset:
            year_value = item.year
            relevance_value = item.relevance

            try:
                relevance_value = int(relevance_value)
            except (ValueError, TypeError):
                relevance_value = 0

            if year_value in year_relevance_data:
                year_relevance_data[year_value]['total_relevance'] += relevance_value
            else:
                year_relevance_data[year_value] = {'total_relevance': relevance_value}

        response_data = []

        for year, data in year_relevance_data.items():
            response_data.append({
                'year': year,
                'total_relevance': data['total_relevance']
            })

        serializer = YearRelevanceSerializer(response_data, many=True)
        return Response(serializer.data)

class CountryIntensityDataView(viewsets.ModelViewSet):
    serializer_class = CountryIntensitySerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(country="").exclude(intensity="")
        country_intensity = {}

        for item in queryset:
            country = item.country
            intensity = item.intensity
            try:
                intensity = int(intensity)
            except (ValueError, TypeError):
                intensity = 0

            if country in country_intensity:
                country_intensity[country]['total_intensity'] += intensity
                country_intensity[country]['intensity'] += intensity
            else:
                country_intensity[country] = {'total_intensity': intensity, 'intensity': intensity}

        # Sort the data by intensity in descending order
        sorted_data = sorted(country_intensity.items(), key=lambda item: item[1]['intensity'], reverse=True)

        # Take the top 10 items
        top_10_data = sorted_data[:10]

        response_data = []

        for country, data in top_10_data:
            response_data.append({
                'country': country,
                'total_intensity': data['total_intensity'],
                'intensity': data['intensity']
            })

        serializer = CountryIntensitySerializer(response_data, many=True)
        return Response(serializer.data)



class TopicRegionDataView(viewsets.ModelViewSet):
    serializer_class = TopicRegionSerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(topic="").exclude(region="")
        topic_region_data = {}

        for item in queryset:
            topic_value = item.topic
            region_value = item.region

            combined_value = f"{topic_value} - {region_value}"

            if combined_value in topic_region_data:
                topic_region_data[combined_value]['total_count'] += 1
            else:
                topic_region_data[combined_value] = {'total_count': 1, 'topic': topic_value, 'region': region_value}

        response_data = []

        for combined_value, data in topic_region_data.items():
            response_data.append({
                'combined_value': combined_value,
                'total_count': data['total_count'],
                'topic': data['topic'],
                'region': data['region']
            })

        serializer = TopicRegionSerializer(response_data, many=True)
        return Response(serializer.data)
    
class RegionIntensityDataView(viewsets.ModelViewSet):
    serializer_class = RegionIntensitySerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(region="").exclude(intensity="")
        region_intensity = {}

        for item in queryset:
            region = item.region
            intensity = item.intensity
            try:
                intensity = int(intensity)
            except (ValueError, TypeError):
                intensity = 0

            if region in region_intensity:
                region_intensity[region]['total_intensity'] += intensity
                region_intensity[region]['intensity'] += intensity
            else:
                region_intensity[region] = {'total_intensity': intensity, 'intensity': intensity}

        # Sort the data by intensity in descending order
        sorted_data = sorted(region_intensity.items(), key=lambda item: item[1]['intensity'], reverse=True)

        # Take the top 10 items
        top_10_data = sorted_data[:10]

        response_data = []

        for region, data in top_10_data:
            response_data.append({
                'region': region,
                'total_intensity': data['total_intensity'],
                'intensity': data['intensity']
            })

        serializer = RegionIntensitySerializer(response_data, many=True)
        return Response(serializer.data)




class EndYearRegionDataView(viewsets.ViewSet):
    serializer_class = EndYearRegionSerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(end_year=None).exclude(region="")

        end_year_region_data = {}

        for item in queryset:
            end_year_value = item.end_year
            region_value = item.region

            try:
                end_year_value = int(end_year_value)
            except (ValueError, TypeError):
                end_year_value = 0

            if end_year_value in end_year_region_data:
                end_year_region_data[end_year_value]['total_end_year'] += 1
            else:
                end_year_region_data[end_year_value] = {'total_end_year': 1}

        response_data = []

        for end_year, data in end_year_region_data.items():
            response_data.append({
                'end_year': end_year,
                'total_end_year': data['total_end_year'],
                'region': region_value
            })

        serializer = EndYearRegionSerializer(response_data, many=True)
        return Response(serializer.data)


    
class SourceIntensityView(viewsets.ModelViewSet):
    serializer_class = SourceIntensitySerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(source="").exclude(intensity="")
        source_intensity = {}

        for item in queryset:
            source = item.source
            intensity = item.intensity
            try:
                intensity = int(intensity)
            except (ValueError, TypeError):
                intensity = 0

            if source in source_intensity:
                source_intensity[source]['total_intensity'] += intensity
                source_intensity[source]['intensity'] += intensity
            else:
                source_intensity[source] = {'total_intensity': intensity, 'intensity': intensity}

        response_data = []

        for source, data in source_intensity.items():
            response_data.append({
                'source': source,
                'total_intensity': data['total_intensity'],
                'intensity': data['intensity']
            })

        serializer = SourceIntensitySerializer(response_data, many=True)
        return Response(serializer.data)


class PestleLikelihoodDataView(viewsets.ViewSet):
    serializer_class = PestleLikelihoodSerializer

    def list(self, request, *args, **kwargs):
        queryset = EnergyData.objects.exclude(pestle='').exclude(likelihood=None)

        pestle_likelihood_data = {}

        for item in queryset:
            pestle_value = item.pestle
            likelihood_value = item.likelihood

            try:
                likelihood_value = float(likelihood_value)
            except (ValueError, TypeError):
                likelihood_value = 0

            if pestle_value in pestle_likelihood_data:
                pestle_likelihood_data[pestle_value]['total_likelihood'] += likelihood_value
            else:
                pestle_likelihood_data[pestle_value] = {'total_likelihood': likelihood_value}

        response_data = []

        for pestle, data in pestle_likelihood_data.items():
            response_data.append({
                'pestle': pestle,
                'total_likelihood': data['total_likelihood']
            })

        serializer = PestleLikelihoodSerializer(response_data, many=True)
        return Response(serializer.data)