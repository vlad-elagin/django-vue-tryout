from django.contrib import admin
from .models import Pomodoro
# Register your models here.

@admin.register(Pomodoro) # woo hoo i can use decorators
class PomodoroAdmin(admin.ModelAdmin):
    pass
