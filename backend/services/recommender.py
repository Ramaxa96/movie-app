from typing import List
from models.movie import UserPreferences, Movie

RECOMMENDATIONS_LIMIT = 10

def get_recommendations(preferences: UserPreferences, movies: List[Movie]) -> List[Movie]:
    recommended_movies = []
    preferences_genres = {genre.lower() for genre in preferences.genres}
    preferences_countries = {country.lower() for country in preferences.countries}
    preferences_years = set(preferences.years)

    for movie in movies:
        if preferences_years and movie.year not in preferences_years:
            continue

        if preferences_genres:
            movie_genres = {genre.lower() for genre in movie.genres}
            if not preferences_genres.intersection(movie_genres):
                continue

        if preferences_countries:
            movie_countries = {country.lower() for country in movie.countries}
            if not preferences_countries.intersection(movie_countries):
                continue

        recommended_movies.append(movie)

    recommended_movies.sort(key=lambda m: m.rating, reverse=True)

    return recommended_movies[:RECOMMENDATIONS_LIMIT]