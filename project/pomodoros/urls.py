"""
    Pomorodos API urls
"""

from django.urls import path
from .views import pomodoros_list

urlpatterns = [
    path('pomodoros/', pomodoros_list),
]
