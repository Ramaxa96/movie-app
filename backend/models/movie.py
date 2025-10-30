from pydantic import BaseModel
from typing import List

class Movie(BaseModel):
    id: int
    title: str
    description: str
    year: int
    rating: float
    genres: List[str]
    countries: List[str]

class UserPreferences(BaseModel):
    genres: List[str]
    countries: List[str]
    years: List[int]

class PaginatedMoviesResponse(BaseModel):
    total_count: int
    movies: List[Movie]