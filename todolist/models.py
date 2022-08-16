from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class TodoActivities(models.Model):
    activity = models.CharField(max_length=255)
    createdDate = models.DateTimeField(auto_now_add=True)
    completedDate = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=9)
    id = models.CharField(max_length=255, primary_key=True)
    #user who posted this
    user = models.ForeignKey(User, on_delete=models.CASCADE)

def __str__(self):
    return self.activity
