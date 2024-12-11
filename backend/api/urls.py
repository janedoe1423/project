from django.urls import path
from .views import InvestorDetailView, home, StartupProfileView, StartupProfileCreateView

urlpatterns = [
    path("", home, name="home"),
    path('investor/<uuid:pk>/', InvestorDetailView.as_view(), name='investor-detail'),
    path('startup/<int:pk>/', StartupProfileView.as_view(), name='startup-profile'),
    path('startup/create/', StartupProfileCreateView.as_view(), name='startup-create'),
]