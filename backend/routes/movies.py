from fastapi import APIRouter
from typing import List
from models.movie import Movie, UserPreferences, PaginatedMoviesResponse
from database.db import load_all_movies
from services.recommender import get_recommendations

router = APIRouter()
movies_data = load_all_movies()
parsed_movies_data = [Movie(**movie) for movie in movies_data]

@router.get("/movies", response_model=PaginatedMoviesResponse)
def get_all_movies(search: str | None = None, skip: int = 0, limit: int = 20):
    result = parsed_movies_data
    if search:
        result = [movie for movie in result if search.lower() in movie.title.lower()]

    total_count = len(result)
    paginated_movies = result[skip: skip + limit]

    return PaginatedMoviesResponse(total_count=total_count, movies=paginated_movies)

@router.post("/recommendations", response_model=List[Movie])
def get_movie_recommendations(preferences: UserPreferences):
    recommendations = get_recommendations(preferences=preferences, movies=parsed_movies_data)

    return recommendations