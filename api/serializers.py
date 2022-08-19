from rest_framework import serializers
from todolist.models import TodoActivities

class TodoSerializer(serializers.ModelSerializer):
    createdDate = serializers.ReadOnlyField()
    completedDate = serializers.ReadOnlyField()
    status = serializers.ReadOnlyField()
    class Meta:
        model = TodoActivities
        fields = '__all__'