from rest_framework import generics,permissions
from .serializers import TodoSerializer
from todolist.models import TodoActivities
from django.db import IntegrityError
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from rest_framework.authentication import SessionAuthentication, TokenAuthentication


class TodoListCreate(generics.ListCreateAPIView):

    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    
    def get_queryset(self):
        user = self.request.user
        return TodoActivities.objects.filter(user=user).order_by('-createdDate')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [TokenAuthentication]


    def get_queryset(self):
        user = self.request.user
        return TodoActivities.objects.filter(user=user)

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            print(request)
            data = JSONParser().parse(request) # data is a dictionary
            user = User.objects.create_user( 
                username=data['username'],
                password=data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return JsonResponse({'token':str(token)},status=201)
        except IntegrityError:
                return JsonResponse(
                    {'error':'username taken. choose another username'}, status=400)


@csrf_exempt
def signin(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        user = authenticate(
            request,
            username=data['username'],
            password=data['password'])
    if user is None:
        return JsonResponse(
            {'error':'unable to login. check username and password'},
            status=400)
    else: # return user token
        try:
            token = Token.objects.get(user=user)
        except: # if token not in db, create a new one
            token = Token.objects.create(user=user)
        return JsonResponse({'token':str(token)}, status=201)