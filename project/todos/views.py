from rest_framework import status
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from todos.models import Todo
from todos.serializers import TodoSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class TodosList(generics.ListCreateAPIView):
    " List all todos or create new one "
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class TodoDetails(generics.RetrieveUpdateDestroyAPIView):
    " get, update or delete a todo "
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
