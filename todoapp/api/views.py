from rest_framework import generics,permissions
from .serializers import TodoSerializer
from todolist.models import TodoActivities

class TodoListCreate(generics.ListCreateAPIView):

    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return TodoActivities.objects.filter(user=user).order_by('-createdDate')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return TodoActivities.objects.filter(user=user)