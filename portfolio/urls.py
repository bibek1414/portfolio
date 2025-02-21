from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('projects/', views.projects, name='projects'),
    path('skills/', views.skills, name='skills'),
    path('blog/', views.blog_list, name='blog_list'),
    path('blog/<int:article_id>/', views.article_detail, name='article_detail'),
    
]
