from rest_framework import generics
from django.contrib.auth.models import User
from django_vue_challenge.serializers import UserSerializer

class UserDetails(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
