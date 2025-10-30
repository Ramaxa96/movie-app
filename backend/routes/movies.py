from fastapi import APIRouter
from typing import List
from models.movie import Movie, UserPreferences
from database.db import load_all_movies
from services.recommender import get_recommendations

router = APIRouter()
movies_data = load_all_movies()
parsed_movies_data = [Movie(**movie) for movie in movies_data]

@router.get("/movies", response_model=List[Movie])
def get_all_movies(genre: str | None = None, skip: int = 0, limit: int = 100):
    result = parsed_movies_data

    if genre:
        result = [
            movie for movie in result
            if genre.lower() in [g.lower() for g in movie.genres]
        ]

    return result[skip: skip + limit]

@router.post("/recommendations", response_model=List[Movie])
def get_movie_recommendations(preferences: UserPreferences):
    recommendations = get_recommendations(preferences=preferences, movies=parsed_movies_data)
    return recommendations