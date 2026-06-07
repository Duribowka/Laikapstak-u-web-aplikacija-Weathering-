# 1-13 Weekly Report - Week 1

## Student Information

Student name: Svjatoslavs Boronins
Group: PX-24
Project ID: 1-13
Project name: Weather Application
Week number: 1

## Planned Work For This Week

Project setup, repository creation, requirements review, wireframes, database draft, Docker baseline.

Frontend setup: main page creation, styling and functionality creation + main data fetch and display of live weather of a city. Frontend was planned to be completed for most of it (¬80%).

## Completed Work

Describe what was completed during the week.

-Most of project setup and ideas
-repository created
-requirements overviewed
-wireframes
-docker baseline

-Main page's frontend part is 50% done. Data receive with api key and data display realised. Some functionality like theme switch and city input inside form.

## GitHub Commits

Add links or commit hashes.

https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-
https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-/commits/main/

## Screenshots / Evidence

List screenshots added to 07_screenshots_and_evidence.

current_weather1.png
docker_containers.png
docker_logs1.png
docker_logs2.png
I_need_to_change_light_theme_its_ugly.png
project_structure_07_06_2026.png
site_opened_with_port.png

## Problems Found

Describe technical problems, blockers, or questions.

Problems appeared when I tried to perform a docker baseline:
1) The listed in "Docker_instructions" commands didn't work, so I started research.
unable to get image 'nginx:latest': failed to connect to the docker API at npipe:////./pipe/docker_engine; check if the path is correct and if the daemon is running: open //./pipe/docker_engine: The system cannot find the file specified.

2) When launching docker desktop I had infinite loading and ram;cpu;disk usage was either 0 or blank, I tried to check if daemon is working by running docker ps and I had: request returned 500 Internal Server Error
this meant that I didn't have a windows linux subsystem wsl which is essential for proper docker work

3) I wasn't able to open web site with my port, the nginx had 403, forbidden error.

questions:

I don't quite understand when or how should I do 05_test, do I need to do them in the very end of practice or should I do them during the entire development? How does test look like, do I try to toggle certain thing in my app and check the result? How often should I do tests, I think I could do them before every commit but I'm very lost about the tests..

## Solutions Applied

Describe how problems were solved.

1/2) I downloaded wsl, my choice was debian, and after that docker desktop launched perfectly fine and loaded without any problems and later on all the commands worked 😀

3) I changed volume path: nginx was expecting 02_source_code/index.html but my structure is 02_source_code/frontend/index.html  I'm unsure wether I'm going to keep this structure, most likely it will face changes later on in the project.

## Next Week Plan

Describe what will be done next.

-Learn docker
-Understand docker
-Learn SQL
-Understand SQL

I want to change light theme, right now I don't like how it looks like + finish it because the weather menu is not supported for light version yet. Add functionality to settings toggle => add Kelvin; Celsium; Fahrenheit switches for temperature display instead of just celsium being hardcoded. Add temperature display for next seven days and not just live weather data block. Start working on interractable world map with temperature; rain/storm; wind direction; etc.. options as a separate web page(or maybe implemented into the main page, I'm not sure yet). And lastly start working on backend.

## Supervisor Notes

To be completed by the practice supervisor if needed.
