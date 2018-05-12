"""
    Todos API urls
"""
# path cant work with regex's, user url
from django.conf.urls import url
from todos import views

urlpatterns = [
    # r'^&' is for index route
    url(r'^$', views.TodosList.as_view()),
    url(r'^(?P<pk>[^/]+)/$', views.TodoDetails.as_view()),
]
