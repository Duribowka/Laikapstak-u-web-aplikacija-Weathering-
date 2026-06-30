from server import app
from services.weather_cache import get_forecast

@app.route("/forecast/<city>")
def forecast(city):
    return get_forecast(city)