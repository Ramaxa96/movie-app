from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import movies # Импортируем наше "меню"

app = FastAPI(title="Movie Recommender API")

# Настройка CORS - это обязательно для связи с фронтендом!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключаем все URL из файла routes/movies.py, добавляя к ним префикс /api
app.include_router(movies.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "API is running. Go to /docs to see the documentation."}