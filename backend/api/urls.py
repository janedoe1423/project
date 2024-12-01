from django.urls import path
from .views import InvestorDetailView, home


urlpatterns = [
    path("", home, name="home"),
    path('investor/<uuid:pk>/', InvestorDetailView.as_view(), name='investor-detail'),
]