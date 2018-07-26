from rest_framework.serializers import ModelSerializer

from .models import Pomodoro

class PomodoroSerializer(ModelSerializer):

    class Meta:
        model = Pomodoro
        fields = ('id', 'author', 'started_at', 'duration', 'status')
