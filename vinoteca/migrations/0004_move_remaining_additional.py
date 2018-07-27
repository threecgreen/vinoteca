# Generated by Django 2.0.5 on 2018-07-06 06:08
# Move remaining additional data to description

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vinoteca', '0003_remove_dup_viti_area'),
    ]

    operations = [
        migrations.RunSQL([
            """update wines
               set description = wines.description || ' | ' || (
                   select a.additional 
                   from wines w inner join additionals a on w.add_id = a.id 
                   where w.id = wines.id
               )
               where wines.description is not null and wines.add_id is not null;""",
            """update wines
               set description = (
                   select a.additional 
                   from wines w inner join additionals a on w.add_id = a.id 
                   where w.id = wines.id
               )
               where wines.description is null and wines.add_id is not null;"""
        ])
    ]