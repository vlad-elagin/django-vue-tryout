"""
    django_vue_challenge URL Configuration
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('pomodoros.urls')),
    path('todos/', include('todos.urls')),
    path('admin/', admin.site.urls),
]
