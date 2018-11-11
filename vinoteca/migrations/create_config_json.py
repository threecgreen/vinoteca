# Generated by Django 2.1.2 on 2018-11-10 00:11
import json

from django.conf import settings
from django.db import migrations


def create_config_json(_, __):
    default_settings = {
        "database_path": "",
        "media_path": ""
    }
    config_file = settings.BASE_DIR / "vinoteca" / "config.json"
    with open(config_file, "w") as fout:
        print(json.dumps(default_settings, indent=4), file=fout)


class Migration(migrations.Migration):

    dependencies = [
        ('vinoteca', '0017_auto_20180804_1416'),
    ]

    operations = [
        migrations.RunPython(create_config_json)
    ]
