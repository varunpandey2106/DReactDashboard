# Generated by Django 4.2.6 on 2023-10-11 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardApp', '0005_alter_energydata_country_alter_energydata_end_year_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='energydata',
            name='url',
            field=models.URLField(max_length=1000),
        ),
    ]
