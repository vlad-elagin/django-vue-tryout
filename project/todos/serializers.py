from rest_framework.serializers import ModelSerializer, ReadOnlyField
from todos.models import Todo

class TodoSerializer(ModelSerializer):
    author = ReadOnlyField(source='author.username')

    class Meta:
        model = Todo
        fields = ('text', 'id', 'author')
