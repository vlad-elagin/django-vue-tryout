from rest_framework.serializers import ModelSerializer, CharField, ValidationError
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class UserSerializer(ModelSerializer):
    """
        Serializer for creating users
    """

    class Meta:
        model = UserModel
        fields = ('id', 'username', 'password', 'confirm_password')
        write_only_fields = ('password', 'confirm_password')
        read_only_fields = ('id',)

    password = CharField(write_only=True)
    confirm_password = CharField(write_only=True)

    # ensure passwords match
    def validate(self, data):

        password = data['password']
        confirm_password = data['confirm_password']

        if password != confirm_password:
            raise ValidationError('Passwords do not match')

        return data

    # create user object
    def create(self, validated_data):
        
        user = UserModel.objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user
