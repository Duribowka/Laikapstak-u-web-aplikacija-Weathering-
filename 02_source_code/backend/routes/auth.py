from flask import request
from server import app

from services.auth import signup
from services.auth import signin
from services.auth import get_connection

@app.route("/signup", methods=["POST"])
def signup_route():
    data = request.json

    username = data["username"]
    password = data["password"]

    return signup(username, password)

@app.route("/signin", methods=["POST"])
def signin_route():

    data = request.json

    username = data["username"]
    password = data["password"]

    return signin(username, password)

@app.route("/session/<username>")
def session(username):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT username
        FROM users
        WHERE username = %s
        """,
        (username,)
    )

    row = cursor.fetchone()

    if row:
        return {
            "logged_in": True
        }
    return {
        "logged_in": False
    }