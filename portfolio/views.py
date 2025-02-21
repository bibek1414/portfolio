from django.shortcuts import render
from .models import Article
from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/home.html')

def about(request):
    return render(request, 'portfolio/about.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        send_mail(
            f"Message from {name}",
            message,
            email,
            [settings.EMAIL_HOST_USER],  
            fail_silently=False,
        )
        
        return render(request, 'portfolio/thank_you.html', {'name': name})
    
    return render(request, 'portfolio/contact.html')



def projects(request):
    return render(request, 'portfolio/projects.html')

def projects(request):
    return render(request, 'portfolio/projects.html')



def skills(request):
    return render(request, 'portfolio/skills.html')


def blog_list(request):
    articles = Article.objects.all().order_by('-date_published')
    return render(request, 'portfolio/blog_list.html', {'articles': articles})

def article_detail(request, article_id):
    article = Article.objects.get(id=article_id)
    return render(request, 'portfolio/article_detail.html', {'article': article})


# def home(request):
#     github_token = settings.GITHUB_TOKEN
#     username = "bibek1414"  # Replace with your GitHub username
#     total_commits = 0

#     try:
#         # Fetch all repositories for the user
#         repos_url = f"https://api.github.com/users/{username}/repos"
#         headers = {"Authorization": f"Bearer {github_token}"} if github_token else {}
#         repos_response = requests.get(repos_url, headers=headers)
#         repos_response.raise_for_status()
#         repos = repos_response.json()

#         # Iterate through each repository and fetch commits
#         for repo in repos:
#             repo_name = repo["name"]
#             commits_url = f"https://api.github.com/repos/{username}/{repo_name}/commits"
#             commits_response = requests.get(commits_url, headers=headers)

#             # Check if the repository is empty
#             if commits_response.status_code == 409 and "Git Repository is empty" in commits_response.text:
#                 print(f"Repository {repo_name} is empty. Skipping...")
#                 continue  # Skip this repository

#             # Check if the request was successful
#             if commits_response.status_code == 200:
#                 repo_commits = commits_response.json()
#                 total_commits += len(repo_commits)
#             else:
#                 print(f"Error fetching commits for {repo_name}: {commits_response.status_code} - {commits_response.text}")

#     except requests.exceptions.RequestException as e:
#         print(f"Error fetching GitHub data: {e}")

#     context = {
#         "total_commits": total_commits,
#     }
#     return render(request, 'portfolio/home.html', context)