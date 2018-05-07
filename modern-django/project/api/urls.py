from django.urls import path, include
from . import views
# import views

urlpatterns = [
    path('macd/', views.macd, name='macd')
]