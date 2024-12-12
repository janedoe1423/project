from rest_framework import generics
from django.http import HttpResponse
from .models import Investor
from .serializers import InvestorSerializer
from .models import StartupBasicInfo
from .serializers import StartupProfileSerializer

def home(request):
    return HttpResponse("Welcome to the API")

class InvestorDetailView(generics.RetrieveAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer

class StartupProfileView(generics.RetrieveUpdateAPIView):
    queryset = StartupBasicInfo.objects.all()
    serializer_class = StartupProfileSerializer

class StartupProfileCreateView(generics.CreateAPIView):
    queryset = StartupBasicInfo.objects.all()
    serializer_class = StartupProfileSerializer