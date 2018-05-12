from djongo import models
from django.contrib.auth.models import User
from django.db.models import (
    TextField,
    IntegerField,
    DateTimeField,
    BooleanField,
)

# Create your models here.
class Pomodoro(models.Model):
    """ pomodoro item model """

    # general stuff
    started_at = DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    # data that depends on user settings
    duration = IntegerField()
    is_finished = BooleanField(default=False)

    # return id if adressed
    def __str__(self):
        return self.id
