import uuid
from django.db import models

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Nama item
    name = models.CharField(max_length=255)

    # Harga item
    price = models.IntegerField()

    # Deskripsi item
    description = models.TextField()

    # URL gambar item
    thumbnail = models.URLField()

    # Kategori item
    category = models.CharField(max_length=100)

    # Status unggulan item
    is_featured = models.BooleanField(default=False)