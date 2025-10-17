from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.models import User

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = User.objects.create_user(username=username, password=password)
        user.save()
        messages.success(request, 'Account created successfully!')
        return redirect('login')
    return render(request, 'signup.html')


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('success')
        else:
            messages.error(request, 'Invalid credentials!')
            return render(request, 'login.html')
    return render(request, 'login.html')


def success_view(request):
    return render(request, 'success.html')
