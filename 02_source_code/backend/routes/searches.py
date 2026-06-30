from database import get_connection
from flask import request

from server import app

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