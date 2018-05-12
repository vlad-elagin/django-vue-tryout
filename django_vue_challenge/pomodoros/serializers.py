# from warnings import warn
from rest_framework.serializers import ModelSerializer

from .models import Pomodoro

class PomodoroSerializer(ModelSerializer):

    class Meta:
        model = Pomodoro
        fields = ('id', 'started_at', 'duration', 'is_finished')
    # id = TextField(read_only=True)
    # started_at = DateTimeField(read_only=True)
    # duration = IntegerField(read_only=True)
    # is_finished = BooleanField()

    # def get_by_user_and_date(self, validated_data):
    #     """
    #         Get all pomodoros of user for date
    #     """
    #     # only date currently
    #     warn('here we are')
    #     print validated_data
    #     return Pomodoro.objects.all()

    # looks like serializer have default 'create'
    # that fits our need

    # def create(self, validated_data):
    #     """
    #         Create new pomodoro and return it
    #     """
    #     return Pomodoro.objects.create(**validated_data)

    def update(self, instance):
        """
            Finish pomodoro and return it
        """
        instance.is_finished = True
        instance.save()
        return instance
