"""
    Pomorodos API urls
"""

from django.urls import re_path
from .views import PomodorosList

urlpatterns = [
    re_path(r'^$', PomodorosList.as_view()),
]
