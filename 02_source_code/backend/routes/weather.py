from server import app

from services.weather_cache import get_weather

@app.route("/weather/<city>")
def weather(city):

    return get_weather(city)