# Generated by Django 2.0.5 on 2018-07-26 01:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vinoteca', '0015_auto_20180725_2001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wines',
            name='wine_type',
            field=models.ForeignKey(db_column='wine_type_id', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.WineTypes'),
        ),
    ]