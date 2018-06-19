"""
    Users API urls
"""

from django.urls import re_path, path
from users.views import get_user, signup, signin

urlpatterns = [
    re_path(r'^$', get_user),
    re_path(r'^signup/', signup),
    re_path(r'^signin/', signin),
]
