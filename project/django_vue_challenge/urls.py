"""
    django_vue_challenge URL Configuration
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # api part
    path('api/pomodoros/', include('pomodoros.urls')),
    path('api/user/', include('users.urls')),
    path('api/todos/', include('todos.urls')),

    # html part
    path('user/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
]
