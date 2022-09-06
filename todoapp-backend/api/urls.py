from django.urls import path
from . import views

urlpatterns = [
    path('todoactivities', views.TodoListCreate.as_view()),
    path('todoactivities/', views.TodoListCreate.as_view()),
    path('todoactivities/<uuid:pk>', views.TodoRetrieveUpdateDestroy.as_view()),
    path('signup/', views.signup),
    path('signin', views.signin),
]