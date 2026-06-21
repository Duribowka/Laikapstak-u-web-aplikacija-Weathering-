#recent searches
from flask import Flask
from flask import request
from flask_cors import CORS

from database import get_connection

#caching
import requests
import json

from datetime import datetime
from datetime import timedelta
from datetime import UTC

app = Flask(__name__)
CORS(app)
API_KEY = "211c8ca44c06752de485af185bd8adad"

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

@app.route("/recent-searches")
def recent_searches():

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT city
        FROM searches
        ORDER BY searched_at DESC
        LIMIT 5
        """
    )

    rows = cursor.fetchall()

    cities = []

    for row in rows:
        cities.append(row[0])

    return cities


@app.route("/search", methods=["POST"])
def save_search():

    data = request.json

    city = data["city"]
    temperature = data["temperature"]
    description = data["description"]

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        DELETE FROM searches
        WHERE city = %s
        """,
        (city,)
    )

    cursor.execute(
        """
        INSERT INTO searches
        (city, temperature, description)
        VALUES (%s, %s, %s)
        """,
        (city, temperature, description)
    )

    connection.commit()

    cursor.execute(
    """
    SELECT COUNT(*)
    FROM searches
    """
)

    count = cursor.fetchone()[0]

    if count > 5:

        cursor.execute(
            """
            DELETE FROM searches
            WHERE id = (
                SELECT id
                FROM searches
                ORDER BY searched_at ASC
                LIMIT 1
            )
            """
        )

        connection.commit()

    return {"message": "saved"}


if __name__ == "__main__":
    app.run(debug=True)