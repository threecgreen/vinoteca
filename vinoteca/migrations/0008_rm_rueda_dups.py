# Generated by Django 2.0.5 on 2018-07-11 03:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vinoteca', '0007_rename_memo'),
    ]

    operations = [
        migrations.RunSQL([
            # Remove duplicate Ruedas
            """update wines
               set viti_area_id = 15
               where viti_area_id in (35, 36)
                  and (
                     select count(id)
                     from viti_areas
                     where name like 'Rueda'
                  ) = 3;""",
            """delete from viti_areas
               where id in (35, 36)
                  and (
                     select count(id)
                     from viti_areas
                     where name like 'Rueda'
                  ) = 3;""",
            # Set spanish viti areas to Spain
            """update viti_areas
               set region_id = 7
               where id in (15, 18, 20, 21) """,
            # Set Sonoma Coast region to California
            """update viti_areas
               set region_id = 3
               where id = 11 """
        ])
    ]
