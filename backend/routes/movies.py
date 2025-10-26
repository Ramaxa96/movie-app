from fastapi import APIRouter
from typing import List
from models.movie import Movie, UserPreferences
from database.db import load_all_movies

router = APIRouter()
movies_data = load_all_movies()

@router.get("/movies", response_model=List[Movie])
def get_all_movies():
    """Возвращает полный список фильмов."""
    return movies_data

@router.post("/recommendations", response_model=List[Movie])
def get_movie_recommendations(preferences: UserPreferences):
    """ЗАГЛУШКА"""
    return []