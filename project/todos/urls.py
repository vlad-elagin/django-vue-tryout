"""
    Todos API urls
"""
# path cant work with regex's, user url
from django.conf.urls import url
from .views import todos_list, todo_details

urlpatterns = [
    # r'^&' is for index route
    url(r'^$', todos_list),
    url(r'^(?P<pk>[^/]+)/$', todo_details),
]
