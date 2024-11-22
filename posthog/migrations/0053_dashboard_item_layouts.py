# Generated by Django 3.0.5 on 2020-05-12 10:13

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0052_data_precalculate_cohorts"),
    ]

    operations = [
        migrations.AddField(
            model_name="dashboarditem",
            name="layouts",
            field=django.contrib.postgres.fields.jsonb.JSONField(default=dict),
        ),
    ]