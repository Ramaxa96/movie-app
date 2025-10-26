from pydantic import BaseModel
from typing import List

class Movie(BaseModel):
    id: int
    title: str
    description: str
    year: int
    rating: float
    genres: List[str]

class UserPreferences(BaseModel):
    genres: List[str]
    min_rating: float = 0.0