# 1-13 Final Internship Practice Report Template

## 1. Student Information

Student name: Svjatoslavs Boroņins
Group: PX-24
Practice period: 01.06.2026 - 18.08.2026
Project ID: 1-13
Project name: Weather Application
GitHub repository URL: https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-

## 2. Project Summary

Describe the project purpose and implemented result.

Weathering is a web application that uses the OpenWeather API to display current weather and a five-day forecast for a selected city or region.

The application also provides recent searches, weather/forecast caching, user registration and login, temperature unit selection, and theme switching. The project uses Flask, PostgreSQL, Nginx and Docker Compose.

## 3. Requirements Completed

List each completed requirement and explain where it can be found in the application.

Public weather API — OpenWeather API is used to retrieve current weather and forecast data.
Input forms — City search, registration and login forms are implemented.
Validation — Password confirmation and authentication input are validated.
Data listing — Recent city searches are stored and displayed.
Search — Users can search for weather by city.
Error handling — Invalid requests and failed API responses are handled.
Timestamps — Database records contain timestamp information such as searched_at and updated_at.
Readable interface — The frontend is organised into separate HTML, CSS and JavaScript files.
Logical project structure — Frontend and backend functionality are separated into organised folders.
Database initialization — PostgreSQL schema and seed scripts are provided.
Docker Compose — Required services can be started using Docker Compose.
Git/GitHub — The project is maintained using Git and prepared for GitHub.
Environment variables — Sensitive backend configuration is stored in .env rather than directly in the source code.
README documentation — Setup and running instructions are provided.

## 4. System Architecture

Describe frontend, backend, database, Docker containers, and external libraries.

Frontend
HTML, CSS and JavaScript. The frontend is served by Nginx on port 8080.

Backend
Python with Flask. It provides weather, forecast, search and authentication API routes.

Database
PostgreSQL 15 stores users, searches and weather/forecast cache data.

Docker
Docker Compose runs the Nginx and PostgreSQL containers.

Main libraries/services:
    Flask
    Flask-CORS
    psycopg2
    bcrypt
    Requests
    PostgreSQL
    Nginx
    OpenWeather API

## 5. Database Description

Describe all tables, relationships, indexes, and seed data.

The project uses four main tables:
users — stores usernames and bcrypt-hashed passwords.
searches — stores recent searches, weather information and search timestamps.
weather_cache — stores cached current-weather API responses and update timestamps.
forecast_cache — stores cached forecast API responses and update timestamps.

The cache tables use the city as a unique value so existing cached data can be updated instead of duplicated.

Database schema and seed data are provided in:
1-13_schema.sql
1-13_seed_data.sql

## 6. Docker Execution

Include exact commands used to run the project.

Start Docker:
docker compose -f 1-13_docker-compose.yml up -d --build

Start the Flask backend:
python app.py

Open the application:
http://localhost:8080

The Flask API runs on:
http://localhost:5000

## 7. Testing Summary

Summarise functional, technical, and security tests. Add links to test evidence.

Functional testing was performed during development for weather searching, forecasts, caching, recent searches, registration, login and other main features.

For security testing, OWASP ZAP 2.17.0 was used.

The final scan produced:
0 High
1 Medium
0 Low
0 Informational

The remaining medium alert was a CSP configuration warning concerning a directive without a fallback.

Test evidence: OWASP ZAP HTML reports included in /05_tests/tests/Test1
                                                                  Test2
                                                                  Test3

## 8. Screenshots

List all screenshots with short explanations.

All screenshots can be found in /07_screenshots_and_evidence/
Screenshots names serve as short explanations.

## 9. GitHub Work Summary

Describe branches, commits, pull requests if used, and repository structure.

Commits can be found at: https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-/commits/main/
Commits have 2 messages where first is app's version and second message explains what was done.
Example:
Commit 496d039
v0.0.1
Main layout for the main page of application + some styling-->needs development

## 10. Problems and Solutions

Describe the most important technical problems and how they were solved.

Weather caching
Repeated API requests were reduced by implementing PostgreSQL-based caching for current weather and forecasts. Cached data is reused until it expires.

Backend restructuring
The original Flask code was split into separate routes and services, making the backend easier to maintain and extend.

Security improvements
OWASP ZAP identified several security issues. CORS was restricted and security headers such as CSP, X-Frame-Options and X-Content-Type-Options were added. Server version information was also removed.

## 11. Self-evaluation

Describe what was learned and what could be improved.

How to build a full-stack web application.
How to use Flask to create backend API routes.
How frontend JavaScript communicates with a backend using Fetch API.
How to work with PostgreSQL and SQL queries.
How to structure a backend into routes, services and database modules.
How to use Docker Compose to run application services.
How to use Nginx to serve a frontend.
How to consume an external API and process JSON data.
How to implement database caching for API responses.
How to work with timestamps and cache expiration.
How to implement basic user registration and authentication.
How to hash passwords using bcrypt.
How to use browser localStorage for simple session information.
How to manage secrets using .env files.
How to configure CORS between frontend and backend.
How to add HTTP security headers.
How to perform vulnerability testing using OWASP ZAP.
How to analyse and fix security issues found by a vulnerability scanner.
How to organise a larger project into logical folders and maintain it using Git.

What could be improved:
-Understanding of flask and backend in general
-Vulnerability testing and fixing
-Database and working with SQL

## 12. Final Checklist

- Source code is committed. +
- Docker Compose file is present. +
- Database schema is present. +
- Test cases are present. +
- Weekly reports are present. +
- Screenshots are present. +
- Final report is completed. +
