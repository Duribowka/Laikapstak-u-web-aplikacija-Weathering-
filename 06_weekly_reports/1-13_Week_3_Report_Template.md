# 1-13 Weekly Report - Week 3

## Student Information

Student name: Svjatoslavs Boronins
Group: PX-24
Project ID: 1-13
Project name: Weather Application
Week number: 3

## Planned Work For This Week

Main feature implementation, validation, authentication if required, UI improvements, integration testing.

Database improvement, backend improvement:
    recent searches;
    favourite cities;
    account creation;
    authorization;
    weather cache for less api calls;

This week's main focus was backend and database creation and improvement, with old feature rework for backend communication. More backend feature addon.

## Completed Work

Describe what was completed during the week.

Main features of application already implemented at the time of third week end.

backend is functional, database is improved.
functionalities implemented:
    recent searches;
    weather caching;

## GitHub Commits

Add links or commit hashes.

https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-
https://github.com/Duribowka/Laikapstak-u-web-aplikacija-Weathering-/commits/main/

## Screenshots / Evidence

List screenshots added to 07_screenshots_and_evidence.

recent_searches_before_searching.png
recent_searches_after_searching.png
recent_searches_choice_menu.png
weather_data_cache_workability.png
windows_postgresql_occupying5432.png
windows_postgresql_properties.png

## Problems Found

Describe technical problems, blockers, or questions.

Overall everything went very smoothly, no major problems or blockers were stumbled across.

Sometimes windows decides to start postgresql on port:5432 which is being used by docker too, resulting in backend explosion because flask attempts to "comunicate" with wrong postgresql service.

PS C:\Users\sboro> netstat -ano | findstr :5432 TCP 0.0.0.0:5432 0.0.0.0:0 LISTENING 10424 TCP 0.0.0.0:5432 0.0.0.0:0 LISTENING 6612 TCP [::]:5432 [::]:0 LISTENING 6612 TCP [::]:5432 [::]:0 LISTENING 10424

PS C:\Users\sboro> tasklist /FI "IMAGENAME eq postgres.exe" Image Name PID Session Name Session# Mem Usage ========================= ======== ================ =========== ============ postgres.exe 6612 Services 0 3,936 K postgres.exe 7264 Services 0 1,700 K postgres.exe 7364 Services 0 1,700 K postgres.exe 7372 Services 0 1,756 K postgres.exe 7384 Services 0 1,664 K postgres.exe 7404 Services 0 1,968 K postgres.exe 7420 Services 0 2,044 K postgres.exe 7612 Services 0 2,032 K postgres.exe 7620 Services 0 3,052 K postgres.exe 7640 Services 0 2,344 K 

PS C:\Users\sboro\Desktop\1-13 laikapstaklu-aplikacija\04_docker> docker compose -f 1-13_docker-compose.yml ps NAME IMAGE COMMAND SERVICE CREATED STATUS PORTS 1-13_app nginx:latest "/docker-entrypoint.…" app 11 minutes ago Up 11 minutes 0.0.0.0:8080->80/tcp, [::]:8080->80/tcp 1-13_database postgres:15 "docker-entrypoint.s…" database 11 minutes ago Up 11 minutes 0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp 
PS C:\Users\sboro\Desktop\1-13 laikapstaklu-aplikacija\04_docker>

## Solutions Applied

Describe how problems were solved.

Disable windows postgresql service to free port:5432 by Win+r => services.msc => postgresql-x64-18 => stop
For later comfort and less spent time on debugging set startup type of windows postgresql to manual instead of automatic.
screenshots:
    windows_postgresql_occupying5432.png
    windows_postgresql_properties.png

## Next Week Plan

Describe what will be done next.

Testing, bug fixing, final documentation, screenshots, final report, GitHub cleanup, presentation preparation.

FINAL and complete application structure
More backend functionability:
    favourite cities;
    account creation;
    authorization;
    weather cache for forecast;
    database timestamps timezone-aware;

Making application safe by moving html files into public => www => etc..

Better styling, visual interface improvements.

*Interractable world weather map with weather modes - I decided to give it a try, if it's not too difficult the map will be implemented as a separate page.

Bug hunting and fixing.

Major testing.

Code cleanup.

Project preparation for the final delivery!

## Supervisor Notes

To be completed by the practice supervisor if needed.
