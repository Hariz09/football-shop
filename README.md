# Tugas PBP : Football Shop - FootbalXpress

Link Aplikasi : https://pbp.cs.ui.ac.id/web/project/muhammad.hariz41/footballshop/build/01992684-ec29-9653-f58a-c63f010649a8
<br></br>
## Step-by-Step Implementasi Checklist Django Project

1.  Membuat proyek Django baru
    - Masuk ke folder project baru: 
        ```bash
        mkdir football-shop
        cd football-shop
        ```
    - Buat virtual env
        ```bash
        python -m venv env
        env\Scripts\activate
        ```
    - Buat projek Django Baru
        ```bash
        django-admin startproject football_shop
        ```
2.  Membuat aplikasi dengan nama main
    - Saya membuat aplikasi baru dengan
         ```bash
        python manage.py startapp main
        ```
    - Lalu menambahkan ‘main’ pada bagian INSTALLED_APPS di
      football_shop\settings.py agar Django mengenali aplikasi ini.
        ```python
        INSTALLED_APPS = [
            'main',
        ]
        ```
3.  Melakukan routing proyek agar dapat menjalankan aplikasi main
    - Buat file main/templates/main.html untuk tampilan awal.
    - Menambahkan file views.py pada folder main untuk memberikan data pada template.
        ```python
        from django.shortcuts import render

        def show_main(request):
            context = {
                'app_name': 'FootballXpress',           
                'nama': 'Muhammad Hariz Albaari',            
                'kelas': 'PBP E' 
            }
            return render(request, 'main.html', context)
        ```
    - Menambahkan file urls.py pada folder main dan football_shop untuk menghubungkan kedua file.
4.  Membuat model Product di aplikasi main
    - Pada file models.py di dalam aplikasi main, saya mendefinisikan
      sebuah model Product dengan atribut:
      - name = models.CharField(max_length=100)
      - price = models.IntegerField()
      - description = models.TextField()
      - thumbnail = models.URLField()
      - category = models.CharField(max_length=50)
      - is_featured = models.BooleanField(default=False)
    -   Setelah itu menjalankan python manage.py makemigrations lalu
        python manage.py migrate.
7.  Deployment ke PWS (PythonAnywhere atau platform sejenis)
    -   Mengupload kode Django project ke server (dengan git).
    -   Mengatur Allowed Hosts di settings.py untuk mengizinkan akses dari
        PWS.
    -   Mengisi enviros pada platform pws.
    -   Setelah berhasil, proyek dapat diakses melalui domain publik
        yang diberikan oleh PWS.

Dengan langkah-langkah ini, proyek Django yang saya buat tidak hanya
berjalan di lokal, tetapi juga bisa diakses teman-teman melalui
<br></br>
## Bagan Request Client ke Web Aplikasi Berbasis Django 
[Client Request: Browser mengakses URL]  
 
 |  
 v   

urls.py     > Mencocokkan URL yang diminta dengan pola routing   

 |  
 v   

views.py    > Mengolah permintaan, memanggil model bila perlu  

 |  
 v   

models.py   > Berinteraksi dengan database (ORM Django)  

 |  
 v   

Template    > views.py mengembalikan data ke template untuk dirender  

 |  
 v 
 
[Response: HTML dikirim ke Client Browser]  
<br></br>
## Settings.py, Pusat Konfigurasi Django. 

Isinya meliputi:
- Database (ENGINE, NAME, USER, PASSWORD, HOST, PORT).
- Installed apps (aplikasi yang dipakai proyek).
- Middleware (lapisan proses request/response).
- Static files & Media files (CSS, JS, gambar).
- Templates (lokasi file HTML).
- Security (SECRET_KEY, DEBUG mode, ALLOWED_HOSTS).
<br></br>
## Cara Kerja Migrasi Database di Django?
Migrasi digunakan untuk menjaga sinkronisasi antara models.py dan database.
Buat/ubah model di models.py.
Jalankan:
```bash
python manage.py makemigrations
```
Django membuat file migrasi (instruksi perubahan database).

Jalankan:
```bash
python manage.py migrate
```

Django mengeksekusi file migrasi, membuat/mengubah tabel sesuai model.
Dengan migrasi, perubahan struktur database bisa dilacak dan dikelola secara otomatis.
<br></br>
## Mengapa Framework Django Dijadikan Permulaan Pembelajaran Pengembangan Perangkat Lunak?
Django cocok dijadikan framework pertama karena dibangun dengan Python yang sintaksnya sederhana, mudah dipahami pemula dan sudah diajarkan di kelas DDP 1. Django juga sudah menyediakan banyak fitur bawaan (seperti ORM, autentikasi, admin, dan template engine) sehingga pemula bisa langsung fokus memahami alur kerja pengembangan web. Selain itu, Django memiliki struktur yang jelas dengan pola Model-Template-View (MTV) yang membantu belajar membangun aplikasi secara terorganisir. Dokumentasinya lengkap, komunitasnya besar, dan framework ini bisa digunakan untuk proyek kecil hingga skala besar, sehingga sangat ideal untuk mulai belajar pengembangan perangkat lunak berbasis web.
