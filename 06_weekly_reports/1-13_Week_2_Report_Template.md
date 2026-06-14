# 1-13 Weekly Report - Week 2

## Student Information

Student name: Svjatoslavs Boronins
Group: PX-24
Project ID: 1-13
Project name: Weather Application
Week number: 2

## Planned Work For This Week

Core database implementation, backend structure, first API endpoints, frontend skeleton, initial test cases.

-Learn docker
-Understand docker
-Learn SQL
-Understand SQL

Change light theme, finish it. Add functionality to settings toggle => add Kelvin; Celsium; Fahrenheit switches for temperature display. Add temperature display for next seven days. Start working on interractable world map with temperature; rain/storm; wind direction; etc.. . Start working on backend.

## Completed Work

Describe what was completed during the week.

Backend structure, test case, api endpoint completed during first week and improved during this week, frontend skeleton partly completed - to be improved during third week

Light theme changed/improved and finished.
Temperature system toggle featuring: Kelvin; Celsium; Fahrenheit with corresponding output in weather data.
5 - day forecast with date; condition; min-temperature; max-temperature
Interractable world map - cancelled

Sign in and sign up pages for simple account creation for further frontend-->backend-->database communication implementation

+ return to top button functionality
+ minor fixes

## GitHub Commits

Add links or commit hashes.

https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-
https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-/commits/main/

## Screenshots / Evidence

List screenshots added to 07_screenshots_and_evidence.

five_day_forecast1.png
five_day_forecast2.png
project_structure_14_06_2026.png
recent_searches_backend_page.png
sign_up_page.png

## Problems Found

Describe technical problems, blockers, or questions.

1) PostgreSQL login reject
2) Database container not running -
NAME       IMAGE          SERVICE
1-13_app   nginx:latest   app
--1-13_database missing

3) Flask not being able to log into PostgreSQL, as a result => 404 page not found
4) psycopg2.OperationalError => error 500 route registration issues

## Solutions Applied

Describe how problems were solved.

1) Proper naming helped solve this problem
2) Seed file and schema mismatch: changed seed and schema sql's to match, right now seed_data.sql's content is commented due to not being needed at the moment
3) 
4) First, check what PostgreSQL's flak could possibly be talking to with: netstat -ano | findstr :5432
As a result:
Before Docker:

TCP 0.0.0.0:5432 LISTENING 6800

After starting Docker:

TCP 0.0.0.0:5432 LISTENING 6800
TCP 0.0.0.0:5432 LISTENING 7476

After stopping Docker:

TCP 0.0.0.0:5432 LISTENING 6800

There was something on windows was already running PostgreSQL on port 5432 while docker also tried to use 5432. Python flask was connecting to the wrong PostgreSQL on 5432 resulting in error.

Now to identify process 6800 with: tasklist /FI "PID eq 6800"
output: postgres.exe 6800 Services ...

Then I went to services and stopped the other PostgreSQL so that docker could normally use 5432 and flask would connect to right sql.

## Next Week Plan

Describe what will be done next.

validation, authentication, UI improvements, integration testing.

Database improvement, backend improvement:
    recent searches;
    favourite cities;
    account creation;
    authorization;
    weather cache for less api calls;

Next week's main focus will be backend and database creation and improvement, with old feature rework for backend communication. More backend feature addon.

## Supervisor Notes

To be completed by the practice supervisor if needed.
