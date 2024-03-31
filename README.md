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
Users can conveniently input either an address or a zip code to retrieve weather information. Upon entry, the application seamlessly calls the Geoapify API to fetch the corresponding coordinates for the provided location. Subsequently, leveraging the obtained coordinates, the application fetches weather data from the OpenWeatherMap API, ensuring users receive accurate and up-to-date weather updates for their specified location. This feature enhances user flexibility and convenience, allowing for a smoother and more intuitive weather forecasting experience.
---

With Forecast Fusion, users can stay informed about weather conditions anywhere in the world and plan their activities accordingly. Whether it's a sunny day at the beach or a rainy day indoors, Forecast Fusion has got you covered! 
