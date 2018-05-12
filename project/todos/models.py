from djongo import models
from uuid import uuid4
from django.db.models import TextField, UUIDField

# Create your models here.
class Todo(models.Model):
    """ todo item model """

    id = UUIDField(primary_key=True, editable=False, default=uuid4)
    text = TextField(blank=False)

    # return id if adressed
    def __str__(self):
        return self.text
