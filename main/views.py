from django.shortcuts import render

def show_main(request):
    context = {
        'app_name': 'FootballXpress',           
        'nama': 'Muhammad Hariz Albaari',            
        'kelas': 'PBP E' 
    }
    return render(request, 'main.html', context)