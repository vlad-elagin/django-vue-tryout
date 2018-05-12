"""
    Users API urls
"""
# path cant work with regex's, user url
from django.conf.urls import url, include
from users import views

urlpatterns = [
    # r'^&' is for index route
    url(r'^$', views.UserDetails.as_view()),
]
