from rest_framework import generics
from django.contrib.auth.models import User
from users.serializers import UserSerializer

class UserDetails(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
