"""
    Pomorodos API urls
"""

from django.urls import path
from .views import index

urlpatterns = [
    path('pomodoros/', index),
]
