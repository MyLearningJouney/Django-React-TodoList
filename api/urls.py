from django.urls import path
from . import views

urlpatterns = [
    path('todoactivities/', views.TodoList.as_view()),
]