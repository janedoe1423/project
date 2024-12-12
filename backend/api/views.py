from rest_framework import generics
from django.http import HttpResponse
from .models import Investor
from .serializers import InvestorSerializer

def home(request):
    return HttpResponse("Welcome to the API")

class InvestorDetailView(generics.RetrieveAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer