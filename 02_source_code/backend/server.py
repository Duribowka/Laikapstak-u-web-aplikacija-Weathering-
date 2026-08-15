from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    origins=["http://localhost:8080"]
)

@app.after_request
def add_security_headers(response):

    response.headers["Content-Security-Policy"] = (
        "default-src 'none'; "
        "frame-ancestors 'none';"
    )

    response.headers["X-Content-Type-Options"] = "nosniff"

    response.headers["X-Frame-Options"] = "DENY"

    response.headers.pop("Server", None)

    return response