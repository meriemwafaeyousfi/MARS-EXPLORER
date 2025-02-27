

[README.md]
================

Mars Rovers Project
================

Overview
--------

This project is a web application that allows users to explore Mars rovers and their missions. The application provides information about the rovers, their cameras, and the images they have captured.

Features
--------

* Explore Mars rovers and their missions
* View images captured by the rovers
* Filter images by camera and sol (Martian day)
* View weather data for Mars

Technologies Used
----------------

* React
* React Router
* PrimeReact
* PrimeFlex
* Lottie
* Axios

Installation
------------

To install the project, run the following command:

```bash
npm install
```

Start the application by running:

```bash
npm start
```

API Documentation
-----------------

The application uses the following APIs:

* NASA Mars Rover photos API: https://api.nasa.gov/mars-photos
* InSight: Mars Weather Service API: https://api.nasa.gov/insight_weather


Components
------------

The application consists of the following components:

* `App.js`: The main application component
* `Home.js`: The home page component
* `Rover.js`: The rover page component
* `RoverCard.js`: The rover card component
* `WeatherCard.js`: The weather card component
* `Navbar.js`: The navigation bar component
* `Background.js`: The background component
* `Hero.js`: The hero component

Services
---------

The application uses the following services:

* `api.js`: The API service
* `PhotosService.js`: The mars rovers photos service
* `WeatherService.js`: The weather service

Utilities
------------

The application uses the following utilities:

* `date_utils.js`: The date utility

Data
------

The application uses the following data:

* `rovers.json`: The rover data
* `cameras.json`: The camera types data
* `solRanges.json`: The sol range data

Contributing
------------

To contribute to the project, fork the repository and create a new branch. Make your changes and submit a pull request.

License
-------

The project is licensed under the MIT License.

Acknowledgments
---------------

* NASA for providing the Mars Rover API
* OpenWeatherMap for providing the weather API
