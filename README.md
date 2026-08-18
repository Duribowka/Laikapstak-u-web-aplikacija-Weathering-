# Running the application

## Requirements

Before running the application, make sure the following are installed:
- Docker Desktop
- Python 3
- Python packages from `02_source_code/backend/requirements.txt`

## 1. Start the database and frontend

Open a terminal in the project's Docker directory and run:
```bash
docker compose -f 1-13_docker-compose.yml up -d --build

2. Configure the backend

Create a .env file in the backend directory and add the required configuration values:
API_KEY=211c8ca44c06752de485af185bd8adad
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=practice_project
DB_USER=student
DB_PASSWORD=student_password

Install the Python dependencies if they have not been installed yet:
pip install -r requirements.txt

3. Start the Flask backend

Open a terminal in the backend directory and run:
python app.py

The Flask backend will start on:
http://localhost:5000

4. Open the application

Open the following address in a web browser:
http://localhost:8080

The application provides:
Current weather search
Five-day weather forecast
Recent city searches
Weather and forecast caching
User registration
User sign in
Session checking
Temperature unit selection
Light/dark theme

5. Stopping the application

Stop the Flask backend with:
Ctrl + C

Then stop the Docker containers with:
docker compose -f 1-13_docker-compose.yml down

The PostgreSQL database uses a Docker volume, so database data is preserved when containers are stopped.

To completely remove the database data and recreate the database from the schema and seed files, use:

docker compose -f 1-13_docker-compose.yml down -v
docker compose -f 1-13_docker-compose.yml up -d --build

And .gitignore should contain:
.env
__pycache__/