from flask import request
from server import app

from services.auth import signup
from services.auth import signin

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