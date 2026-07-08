Test: Application starts successfully
ID: FTC-01
Feature: Application startup
Preconditions:
    Docker is installed.
    Backend dependencies are installed.
Test steps:
    1) Start Docker.
    2) Run docker compose up.
    3) Start Flask backend.
    4) Open http://localhost:8080.
Expected: Application opens successfully.
Actual: Application opened successfully.
Status: ✅Passed
Screenshot reference: /Test_Screenshots/FTC-01.png

Test: User can create a new record
ID: FTC-02
Feature: User registration
Preconditions: none
Test steps:
    1) Open Sign Up page.
    2) Enter username.
    3) Enter password.
    4) Repeat password.
    5) Press Sign Up.
Expected: Account is created.
Actual: Account successfully created.
Status: ✅Passed
Screenshot reference: /Test_Screenshots/FTC-02.png

Test: User can view a list of records
ID: FTC-03
Feature: Recent Searches
Preconditions: none
Test steps:
    1) Search several cities.
    2) Click search box.
Expected: Menu with five latest cities appear.
Actual: Menu with cities appear
Status: ✅Passed
Screenshot reference: /Test_Screenshots/FTC-03.png
                      /Test_Screenshots/FTC-03_2.png

Test: User can open record details
ID: FTC-04
Feature: Weather search
Preconditions: none
Test steps:
    1) Search for valid city or region.
    2) Wait for weather.
Expected: Detailed weather menu appears alongside 5-day forecast cards.
Actual: Weather displayed
Status: ✅Passed
Screenshot reference: /Test_Screenshots/FTC-04.png

Test: User can edit existing record
ID: FTC-05
Status: ❌Not applicable

Test: Delete record
ID: FTC-06
Status: ❌Not applicable

Test: Required fields validated
ID: FTC-07
Feature: User sign up
Preconditions: none
Test steps:
    1) Enter different passwords.
    2) Click Sign Up.
Expected: Account creation rejected
Actual: Application rejects to create account
Status: ✅Passed
Screenshot reference: /Test_Screenshots/FTC-07.png