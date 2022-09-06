from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
import uuid

# Create your models here.

class TodoActivities(models.Model):
    activity = models.CharField(max_length=255)
    createdDate = models.DateTimeField(['%d/%m/%Y %H:%M'])
    completedDate = models.DateTimeField(['%d/%m/%Y %H:%M'])
    status = models.CharField(max_length=9)
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    #user who posted this
    user = models.ForeignKey(User, on_delete=models.CASCADE)

def __str__(self):
    return self.activity
