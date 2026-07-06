from server import app

import routes.weather
import routes.forecast
import routes.searches
import routes.auth

if __name__ == "__main__":
    app.run(debug=True)