from django.shortcuts import render


def index(request):
    return render(request, 'users/index.html')


def author(request):
    return render(request, 'users/author.html')


def program(request):
    return render(request, 'users/program.html')


def about(request):
    return render(request, 'users/about.html')

