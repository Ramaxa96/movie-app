import json

MOVIES_DATA_FILE = 'data/movies.json'

def load_all_movies():
    try:
        with open(MOVIES_DATA_FILE, 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        return []