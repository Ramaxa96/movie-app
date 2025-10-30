from typing import List
from models.movie import UserPreferences, Movie

RECOMMENDATIONS_LIMIT = 10

def get_recommendations(preferences: UserPreferences, movies: List[Movie]):
    recommended_movies = []
    preferences_genres = {genre.lower() for genre in preferences.genres}

    for movie in movies:
        if movie.rating < preferences.min_rating:
            continue

        if preferences_genres:
            movie_genres = {genre.lower() for genre in movie.genres}
            if not preferences_genres.intersection(movie_genres):
                continue

        recommended_movies.append(movie)

    recommended_movies.sort(key=lambda m: m.rating, reverse=True)

    return recommended_movies[:RECOMMENDATIONS_LIMIT]