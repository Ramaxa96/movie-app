from pydantic import BaseModel
from typing import List

# Описывает структуру одного фильма
class Movie(BaseModel):
    id: int
    title: str
    description: str
    year: int
    rating: float
    genres: List[str]

# Описывает, какие данные мы ждем от пользователя для рекомендаций
class UserPreferences(BaseModel):
    genres: List[str]
    min_rating: float = 0.0