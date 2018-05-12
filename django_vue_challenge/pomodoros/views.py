from django.http import HttpResponse

def index(request):
    " test api response "
    return HttpResponse('sup niggaz')
