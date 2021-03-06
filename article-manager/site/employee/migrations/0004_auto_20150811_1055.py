# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0003_auto_20150810_1924'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='operator',
            name='id',
        ),
        migrations.AlterField(
            model_name='operator',
            name='user',
            field=models.OneToOneField(primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]
