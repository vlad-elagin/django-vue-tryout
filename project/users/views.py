from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

from users.serializers import UserSerializer
UserModel = get_user_model()

@api_view()                              # only GET allowed
@permission_classes((IsAuthenticated,))  # only logged in user can access this
def get_user(request):
    """
        Get user details
    """
    return Response('hi')


@api_view(('POST',))
@permission_classes((AllowAny,))
def signup(request):
    """
        Create new user
    """

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            status=status.HTTP_201_CREATED
        )

    return Response(
        {'errors': serializer.errors},
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(('POST',))
@permission_classes((AllowAny,))
def signin(request):
    """
        Log user in
    """

    if not request.data['username'] or not request.data['password']:
        errors = {
            'Missing Credentials': [
                'Did you forget to type username or password?'
            ]
        }
        return Response(
            {'errors': errors},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = UserModel.objects.get(username=request.data['username'])
        if user.check_password(request.data['password']):
            # User found
            # Get its token or create new one
            token = Token.objects.get_or_create(user=user)

            return Response(
                {
                    'token': token[0].key,
                    'user': request.data['username']
                },
                status=status.HTTP_200_OK
            )

        # Password is incorrect!
        errors = {
            'password': [
                'Password is incorrect.'
            ]
        }
        return Response(
            {'errors': errors},
            status=status.HTTP_400_BAD_REQUEST
        )

    except UserModel.DoesNotExist:
        # User with requested username not found
        errors = {
            'username': [
                'User not found.'
            ]
        }
        return Response(
            {'errors': errors},
            status=status.HTTP_404_NOT_FOUND
        )
