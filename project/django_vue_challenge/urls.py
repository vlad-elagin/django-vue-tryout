"""
    django_vue_challenge URL Configuration
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/user/', include('users.urls')),
    path('api/pomodoros/', include('pomodoros.urls')),

    path('admin/', admin.site.urls),
]
