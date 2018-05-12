"""
    django_vue_challenge URL Configuration
"""
from django.contrib import admin
from django.urls import path, include
from django_vue_challenge.views import UserDetails

urlpatterns = [
    path('api/', include('pomodoros.urls')),
    path('users/', UserDetails.as_view()),
    path('admin/', admin.site.urls),
]
