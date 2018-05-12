from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Pomodoro
from .serializers import PomodoroSerializer

def index(request):
    " test api response "
    return HttpResponse('sup niggaz')

@csrf_exempt
def pomodoros_list(request):
    """
        List all pomodoros, create new
    """
    if request.method == 'GET':
        pomodoros = Pomodoro.objects.all()
        serializer = PomodoroSerializer(pomodoros, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PomodoroSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
