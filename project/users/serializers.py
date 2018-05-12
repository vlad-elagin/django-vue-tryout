from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from todos.models import Todo

class UserSerializer(ModelSerializer):
    todos = PrimaryKeyRelatedField(many=True, queryset=Todo.objects.all())

    class Meta:
        model = User
        fields = ('id', 'first_name', 'todos')
