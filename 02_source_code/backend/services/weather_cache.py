API_KEY = "211c8ca44c06752de485af185bd8adad"

from database import get_connection

from datetime import datetime
from datetime import timedelta
from datetime import UTC

import requests
import json

def get_weather(city):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT weather_json, updated_at
        FROM weather_cache
        WHERE city = %s
        """,
        (city,)
    )

    row = cursor.fetchone()

    if row:

        weather_json = row[0]
        updated_at = row[1]

        if datetime.now(UTC).replace(tzinfo=None) - updated_at < timedelta(seconds=30):

            print("CACHE HIT")

            return weather_json

    print("CACHE MISS")

    api_url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}"
        f"&appid={API_KEY}"
    )

    response = requests.get(api_url)

    weather_data = response.json()

    cursor.execute(
        """
        INSERT INTO weather_cache
        (city, weather_json, updated_at)

        VALUES
        (%s, %s, CURRENT_TIMESTAMP)

        ON CONFLICT(city)
        DO UPDATE
        SET
            weather_json = EXCLUDED.weather_json,
            updated_at = CURRENT_TIMESTAMP
        """,
        (
            city,
            json.dumps(weather_data)
        )
    )

    connection.commit()
    return weather_data

def get_forecast(city):

    print("GET_FORECAST CALLED")

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT forecast_json, updated_at
        FROM forecast_cache
        WHERE city = %s
        """,
        (city,)
    )

    row = cursor.fetchone()

    if row:

        forecast_json = row[0]
        updated_at = row[1]

        if datetime.now(UTC).replace(tzinfo=None) - updated_at < timedelta(seconds=30):

            print("FORECAST CACHE HIT")

            return forecast_json

    print("FORECAST CACHE MISS")

    api_url = (
        f"https://api.openweathermap.org/data/2.5/forecast"
        f"?q={city}"
        f"&appid={API_KEY}"
    )

    response = requests.get(api_url)

    forecast_data = response.json()

    cursor.execute(
        """
        INSERT INTO forecast_cache
        (city, forecast_json, updated_at)

        VALUES
        (%s, %s, CURRENT_TIMESTAMP)

        ON CONFLICT(city)
        DO UPDATE
        SET
            forecast_json = EXCLUDED.forecast_json,
            updated_at = CURRENT_TIMESTAMP
        """,
        (
            city,
            json.dumps(forecast_data)
        )
    )

    connection.commit()
    return forecast_data