from flask import Flask
from flask import request
from flask_cors import CORS

from database import get_connection

app = Flask(__name__)
CORS(app)

@app.route("/recent-searches")
def recent_searches():

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT city
        FROM searches
        GROUP BY city
        ORDER BY MAX(searched_at) DESC
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
        INSERT INTO searches
        (city, temperature, description)
        VALUES (%s, %s, %s)
        """,
        (city, temperature, description)
    )

    connection.commit()

    return {"message": "saved"}


if __name__ == "__main__":
    app.run(debug=True)