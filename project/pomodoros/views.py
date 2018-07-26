from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import Pomodoro
from .serializers import PomodoroSerializer

class PomodorosList(APIView):
    """
        Get list and create
    """

    def get(self, request):
        """
            Get pomodoros of current user
        """
        pomodoros = Pomodoro.objects.filter(author=request.user.id).order_by('-started_at')
        serializer = PomodoroSerializer(pomodoros, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """
            Create new pomodoro for existing user
        """
        request.data['author'] = request.user.id
        serializer = PomodoroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(
            {'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )

    def patch(self, request):
        """
            Mark pomodoro as finished, successfully or not
        """
        pomodoro = Pomodoro.objects.get(id=request.data['id'])
        serializer = PomodoroSerializer(pomodoro, data=request.data, partial=True)
        if serializer.is_valid():
            print('ok')
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        print(serializer.errors)
        return Response(
            {'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
