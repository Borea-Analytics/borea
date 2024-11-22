# Generated by Django 3.0.11 on 2021-01-21 14:16

from django.db import migrations, models


def forward(apps, schema_editor):
    Team = apps.get_model("posthog", "Team")
    Team.objects.filter(name="NotFlix Demo App").update(is_demo=True)


def reverse(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0117_merge_20210126_0917"),
    ]

    operations = [
        migrations.AddField(model_name="team", name="is_demo", field=models.BooleanField(default=False),),
        migrations.RunPython(forward, reverse),
    ]
