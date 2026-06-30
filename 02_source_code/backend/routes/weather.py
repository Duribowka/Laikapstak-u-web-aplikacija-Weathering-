API_KEY = "211c8ca44c06752de485af185bd8adad"

from database import get_connection

from datetime import datetime
from datetime import timedelta
from datetime import UTC

import requests
import json

from server import app

@app.route("/weather/<city>")
def weather(city):

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