from rest_framework import serializers
from todolist.models import TodoActivities

class TodoSerializer(serializers.ModelSerializer):
    createdDate = serializers.DateTimeField(format="%d/%m/%Y - %A at %H:%M")
    completedDate = serializers.DateTimeField(format="%d/%m/%Y - %A at %H:%M")
    #status = serializers.ReadOnlyField()
    id = serializers.ReadOnlyField()

    class Meta:
        model = TodoActivities
        fields = '__all__'