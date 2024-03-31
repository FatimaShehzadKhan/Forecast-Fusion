# Forecast Fusion - A Weather Forecast Web Application

## Project Overview:
Forecast Fusion is a web application designed to provide users with real-time weather information for locations worldwide. The application fetches weather data from a weather API and presents it in an intuitive and visually appealing interface. Users can view current weather conditions, as well as additional weather-related information such as humidity, wind speed, and pressure.

## Technologies:
### Frontend:
- ReactJS

### Styling:
- Tailwind CSS

### API:
The application utilizes two APIs for fetching weather data:
1. OpenWeatherMap API
2. Geoapify API

## Features:
### 1. Current Weather Display:
- Display the current weather conditions for the user's location.
- Includes temperature, weather icon, description, humidity, wind speed, and other relevant information.

### 2. Location Search:
- Allow users to search for weather information by entering a location (city, zip code, or country).
- Fetch and display weather data for the specified location.

### 3. Dynamic Backgrounds:
- Enhance the visual appeal by dynamically changing backgrounds based on weather conditions (e.g., sunny, rainy, cloudy).

### 4. Weather Comparison:
- Enable users to compare weather conditions between different locations.
- Allows users to analyze weather patterns and trends over time.

### 5. Any or Current Location:
- Ensure users can't enter any location when the "current" option is selected.
- Provides a user-friendly experience by alerting users to select the "current" option first before entering a specific location.

### 6. Zip Code and Address Input:
- Users have the flexibility to enter either an address or a zip code to retrieve weather information.
- When an address or zip code is entered, the application calls the Geoapify API to fetch coordinates corresponding to the provided - location.
- After obtaining the coordinates, the application then calls the OpenWeatherMap API to fetch weather data for the specified location.
- This feature enhances user convenience by allowing them to access weather information using various location inputs, ensuring a seamless and user-friendly experience.
---

With Forecast Fusion, users can stay informed about weather conditions anywhere in the world and plan their activities accordingly. Whether it's a sunny day at the beach or a rainy day indoors, Forecast Fusion has got you covered! 
