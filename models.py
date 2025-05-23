from django.db import models
from django.contrib.auth.models import AbstractUser

class Utilisateur(AbstractUser):
    age = models.IntegerField(null=True, blank=True)
    niveau = models.CharField(max_length=50)

class Filiere(models.Model):
    TYPE_CHOICES = [
        ('secondaire', 'Secondaire'),
        ('universitaire', 'Universitaire'),
    ]
    nom = models.CharField(max_length=100)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    matieres_principales = models.TextField()
    debouches = models.TextField()

    def __str__(self):
        return self.nom
