# Generated by Django 2.0.5 on 2018-07-11 02:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vinoteca', '0006_convert_to_png'),
    ]

    operations = [
        migrations.RenameField(
            model_name='purchases',
            old_name='why',
            new_name='memo',
        ),
    ]
