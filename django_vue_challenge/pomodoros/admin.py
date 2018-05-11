from django.contrib import admin
from .models import Pomodoro
# Register your models here.

@admin.register(Pomodoro)
class PomodoroAdmin(admin.ModelAdmin):
    pass
