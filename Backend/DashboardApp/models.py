from django.db import models

# Create your models here.


class EnergyData(models.Model):
    end_year= models.CharField(max_length=200, blank=True)
    intensity= models.CharField(max_length=1000, blank=True)
    sector= models.CharField(max_length=200)
    topic=models.CharField(max_length=200)
    insight=models.TextField()
    url= models.URLField(max_length=1000)
    region=models.CharField(max_length=200)
    start_year=models.CharField(max_length=200, blank=True)
    impact= models.TextField()
    added=models.DateTimeField()
    published= models.DateTimeField(null=True)
    country=models.CharField(max_length=200)
    relevance= models.CharField(max_length=1000)
    pestle= models.CharField(max_length=200)
    source= models.CharField(max_length=200)
    title= models.TextField()
    likelihood= models.CharField(max_length=1000, blank= True)


