from django.core.management.base import BaseCommand
import json
from DashboardApp.models import EnergyData
from datetime import datetime
#datetime.strptime method to parse the date strings from JSON data and convert them to the correct format expected by Django.

class Command(BaseCommand):
    help = 'Import data from JSON file'

    def handle(self, *args, **options):
        # Load the JSON data from the file
        with open('C:\\Users\\varun\\Downloads\\jsondata.json', 'r', encoding='utf-8') as json_file:
            data = json.load(json_file)

        # Iterate over the data and save it to the database
        for item in data:
            # Parse date strings and convert them to the expected format
            added_date = datetime.strptime(item['added'], '%B, %d %Y %H:%M:%S') if item['added'] else None
            published_date = datetime.strptime(item['published'], '%B, %d %Y %H:%M:%S') if item['published'] else None

            EnergyData.objects.create(
                end_year=item['end_year'],
                intensity=item['intensity'],
                sector=item['sector'],
                topic=item['topic'],
                insight=item['insight'],
                url=item['url'],
                region=item['region'],
                start_year=item['start_year'],
                impact=item['impact'],
                added=added_date,
                published=published_date,
                country=item['country'],
                relevance=item['relevance'],
                pestle=item['pestle'],
                source=item['source'],
                title=item['title'],
                likelihood=item['likelihood']
            )

        self.stdout.write(self.style.SUCCESS('Data imported successfully.'))
