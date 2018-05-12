from rest_framework.serializers import ModelSerializer
from todos.models import Todo

class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = ('text', 'id')

    # def create(self, validated_data):
    #     " Create todo "
    #     print ('creating')
    #     print (validated_data)
    #     return Todo.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     " Update todo "
    #     instance.text = validated_data.get('text', instance.text)
    #     instance.save()
    #     return instance
