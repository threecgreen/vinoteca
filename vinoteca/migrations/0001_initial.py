# Generated by Django 2.0.3 on 2018-05-16 07:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Additionals',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('additional', models.TextField(unique=True)),
            ],
            options={
                'db_table': 'additionals',
            },
        ),
        migrations.CreateModel(
            name='Colors',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('color', models.TextField(unique=True)),
            ],
            options={
                'db_table': 'colors',
            },
        ),
        migrations.CreateModel(
            name='Countries',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField(unique=True)),
                ('is_us', models.IntegerField()),
            ],
            options={
                'db_table': 'countries',
            },
        ),
        migrations.CreateModel(
            name='Grapes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField(unique=True)),
            ],
            options={
                'db_table': 'grapes',
            },
        ),
        migrations.CreateModel(
            name='Producers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField(unique=True)),
                ('country', models.ForeignKey(db_column='country_id', on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Countries')),
            ],
            options={
                'db_table': 'producers',
            },
        ),
        migrations.CreateModel(
            name='Purchases',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('price', models.FloatField(null=True)),
                ('quantity', models.IntegerField(null=True)),
                ('date', models.IntegerField(null=True)),
                ('vintage', models.IntegerField(null=True)),
                ('why', models.TextField(null=True)),
            ],
            options={
                'db_table': 'purchases',
            },
        ),
        migrations.CreateModel(
            name='Stores',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField(unique=True)),
            ],
            options={
                'db_table': 'stores',
            },
        ),
        migrations.CreateModel(
            name='VitiAreas',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
                ('region', models.ForeignKey(db_column='region_id', on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Countries')),
            ],
            options={
                'db_table': 'viti_areas',
            },
        ),
        migrations.CreateModel(
            name='WineGrapes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('percent', models.IntegerField(null=True)),
                ('grape', models.ForeignKey(db_column='grape_id', on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Grapes')),
            ],
            options={
                'db_table': 'wine_grapes',
            },
        ),
        migrations.CreateModel(
            name='Wines',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.TextField(null=True)),
                ('notes', models.TextField(null=True)),
                ('rating', models.FloatField(null=True)),
                ('inventory', models.IntegerField()),
                ('why', models.TextField(null=True)),
                ('additional', models.ForeignKey(db_column='add_id', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Additionals')),
                ('color', models.ForeignKey(db_column='color_id', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Colors')),
                ('producer', models.ForeignKey(db_column='producer_id', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Producers')),
                ('viti_area', models.ForeignKey(db_column='viti_area_id', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.VitiAreas')),
            ],
            options={
                'db_table': 'wines',
            },
        ),
        migrations.CreateModel(
            name='WineTypes',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('type_name', models.TextField(unique=True)),
            ],
            options={
                'db_table': 'wine_types',
            },
        ),
        migrations.AddField(
            model_name='wines',
            name='wine_type',
            field=models.ForeignKey(db_column='type_id', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.WineTypes'),
        ),
        migrations.AddField(
            model_name='winegrapes',
            name='wine',
            field=models.ForeignKey(db_column='wine_id', on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Wines'),
        ),
        migrations.AddField(
            model_name='purchases',
            name='store',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Stores'),
        ),
        migrations.AddField(
            model_name='purchases',
            name='wine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='vinoteca.Wines'),
        ),
        migrations.AlterUniqueTogether(
            name='winegrapes',
            unique_together={('wine', 'grape')},
        ),
    ]