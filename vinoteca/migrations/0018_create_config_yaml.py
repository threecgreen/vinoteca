import yaml
from django.conf import settings
from django.db import migrations


def create_config_yaml(_, __):
    default_settings = {
        "database_path": "",
        "media_path": "",
        "log_path": ""
    }
    config_file = settings.BASE_DIR / "vinoteca" / "config.yaml"
    if not config_file.exists():
        with open(config_file, "w") as fout:
            print("# Use this file to override the location of vinoteca database,", file=fout)
            print("# the wine images folder (media_path), and the log file path.", file=fout)
            print("#", file=fout)
            print("# Place the file paths within the single quotes ('').", file=fout)
            print("# For locations within your home directory, you may abbreviate", file=fout)
            print("# using the ~ character.", file=fout)
            print(yaml.dump(default_settings, default_flow_style=False), file=fout)


class Migration(migrations.Migration):

    dependencies = [
        ('vinoteca', '0017_auto_20180804_1416'),
    ]

    operations = [
        migrations.RunPython(create_config_yaml)
    ]
