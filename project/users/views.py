from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status

from users.serializers import UserSerializer

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
    print ('!!!got request!!!')

    serializer = UserSerializer(data=request.POST)

    if serializer.is_valid():
        serializer.save()
        return Response(
            status=status.HTTP_201_CREATED
        )

    return Response(
        {'errors': serializer.errors},
        status=status.HTTP_400_BAD_REQUEST
    )
