from .serializers import TodoSerializer
from .models import Todo
from django.shortcuts import render
from connectu_api.utils import get_db_handle, get_collection_handle
from rest_framework import generics

db_handle, mongo_client = get_db_handle(DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, USERNAME, PASSWORD)
collection_handle = get_collection_handle(db_handle, REGIONS_COLLECTION)
collection_handle.find({...})
collection_handle.insert({...})
collection_handle.update({...})


class ListTodo(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
