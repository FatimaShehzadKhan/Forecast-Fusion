import { useState, useEffect } from "react";
import "./App.css";
import cloudsImage from "./assets/Clouds.jpg";
import hazeImage from "./assets/hazel sky.jpg";
import sunnyImage from "./assets/Sunny.jpg";
import fogImage from "./assets/Fog.jpg";
import clearImage from "./assets/Clear.jpg";
import snowImg from "./assets/Snow.jpg";
import rainImg from "./assets/Rain.jpg";
import { CiCloudSun } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi"; //humidity
import { GiPaperWindmill } from "react-icons/gi"; //wind direction
import { MdAir, MdCompareArrows } from "react-icons/md"; //wind speed and pressure
import { MdOutlineVisibility } from "react-icons/md"; //visibility
import { TiWeatherNight } from "react-icons/ti"; //moon
import { BsClipboard2Data } from "react-icons/bs"; //description
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperature } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

function App() {
  const currentDate = new Date();

  // Format the date as "May 31, 2024 Sunday"
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = currentDate.toLocaleDateString("en-US", options);

  // Format the time as "10:24:22 pm"
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  const timeString = currentDate.toLocaleTimeString("en-US", timeOptions);

  const geoapifyApiKey = "2c2ed9c6cfae46cc9df888836cbfc282";
  const openWeatherMapApiKey = "e6e6ea37387ddc450969eab37eba4971";
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [backgroundImage, setBackgroundImage] = useState("");
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [weatherData1, setweatherData1] = useState({});
  const [weatherData2, setweatherData2] = useState({});
  const [selectedOption, setSelectedOption] = useState("current");

  // Define object mapping weather conditions to background image URLs
  const weatherBackgrounds = {
    Haze: hazeImage,
    Sunny: sunnyImage,
    Clear: clearImage,
    Fog: fogImage,
    Clouds: cloudsImage,
    Snow: snowImg,
    Rain: rainImg,
    Smoke: fogImage,
  };

  const handleChange = (e) => {
    // Check if 'current' option is selected and the input is being changed
    if (selectedOption === "current" && e.target.value.trim() !== "") {
      alert("Please select 'Any Location' first before entering the location.");
    } else {
      setLocation(e.target.value);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchData = async () => {
    if (selectedOption === "current") {
      // Fetch current user location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Fetch weather data from OpenWeatherMap API using current location
        const openWeatherMapResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherMapApiKey}`
        );
        const weatherData = await openWeatherMapResponse.json();

        // Update state with weather data
        setWeather(weatherData);
        console.log(weatherData);

        // Set background image based on weather condition
        setBackgroundImage(weatherBackgrounds[weatherData.weather[0].main]);
      });
    } else {
      // Fetch latitude and longitude from Geoapify API
      const geoapifyResponse = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=${geoapifyApiKey}`
      );
      const geoapifyData = await geoapifyResponse.json();

      // Extract latitude and longitude from the Geoapify response
      const latitude = geoapifyData.features[0].properties.lat;
      const longitude = geoapifyData.features[0].properties.lon;

      // Fetch weather data from OpenWeatherMap API using latitude and longitude
      const openWeatherMapResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherMapApiKey}`
      );
      const weatherData = await openWeatherMapResponse.json();

      // Update state with weather data
      setWeather(weatherData);
      console.log(weatherData);

      // Set background image based on weather condition
      setBackgroundImage(weatherBackgrounds[weatherData.weather[0].main]);
    }
  };

  const compareWeather = async () => {
    // Fetch weather data for location 1
    const response1 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location1}&units=metric&appid=${openWeatherMapApiKey}`
    );
    const data1 = await response1.json();
    setweatherData1(data1);

    // Fetch weather data for location 2
    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location2}&units=metric&appid=${openWeatherMapApiKey}`
    );
    const data2 = await response2.json();
    setweatherData2(data2);
  };

  useEffect(() => {
    // Fetch current user location and weather data
    fetchData("current");
  }, []); // Run only once on component mount

  return (
    <div>
      <div className="main">
        <div
          id="WeatherConditionBackground"
          // changes background according to the weather condition of location
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Heading */}
          <h1 className="text-3xl font-bold mainHeading">Weather Forecast </h1>

          {/* Search Input and button for location */}
          <div className="searchBox flex justify-center">
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="current">Current Location</option>
              <option value="any">Any Location</option>
            </select>

            <input
              type="text"
              placeholder="Search Address, City or Zip code"
              value={location}
              onChange={handleChange}
            />
            <button onClick={fetchData}>
              Search <FaSearch />
            </button>
          </div>

          {/* Date & Time */}
          <div className="dateAndTime flex flex-col mt-8 mb-0 text-white items-start">
            <h6 className="date text-2xl">
              {dateString} &nbsp; <CiCalendarDate />
            </h6>
            <h6 className="time">
              {timeString} &nbsp;
              <IoMdTime />
            </h6>
          </div>

          {typeof weather.main !== "undefined" ? (
            <div className="result flex flex-row justify-around">
              {/* Location */}
              <div>
                <p id="locationName">{weather.name}</p>
                <h6>
                  <FaCity /> &nbsp; City
                </h6>
              </div>

              {/* Temperature */}
              <div>
                <p>
                  {weather.main.temp} <TbTemperatureCelsius />
                </p>
                <h6>
                  <CiCloudSun /> &nbsp; Temperature
                </h6>
              </div>

              {/* Weather Condition */}
              <div>
                <p>{weather.weather[0].main}</p>
                <h6>
                  <TiWeatherNight />
                  Condition
                </h6>
              </div>

              {/* Weather Condition Description*/}
              <div>
                <p>{capitalizeFirstLetter(weather.weather[0].description)}</p>
                <h6>
                  <BsClipboard2Data /> &nbsp; Description
                </h6>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* heading */}
          <h1 className="text-3xl font-bold">Weather Details </h1>
          {typeof weather.main !== "undefined" ? (
            <div className="resultDetails">
              {/* Temperature */}
              <div className="flex items-center  justify-evenly">
                <h6>
                  <TbTemperature />
                  Temperature:&nbsp;
                </h6>
                <p>
                  {weather.main.temp} <TbTemperatureCelsius />
                </p>
              </div>

              {/* Feels like */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <TbTemperature />
                  Feels like:&nbsp;
                </h6>
                <p>
                  {weather.main.feels_like} <TbTemperatureCelsius />
                </p>
              </div>

              {/* Humidity */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <WiHumidity />
                  Humidity:&nbsp;
                </h6>
                <p>{weather.main.humidity} %</p>
              </div>

              {/* pressure */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <MdAir />
                  Pressure:&nbsp;
                </h6>
                <p>{weather.main.pressure} hPa</p>
              </div>

              {/* visibility */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <MdOutlineVisibility />
                  Visibility:&nbsp;
                </h6>
                <p>{weather.visibility / 1000} km</p>
              </div>

              {/* wind Direction */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <GiPaperWindmill />
                  Wind Direction:&nbsp;
                </h6>
                <p>{weather.wind.deg} °</p>
              </div>

              {/* wind speed */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <MdAir />
                  Wind Speed:&nbsp;
                </h6>
                <p>{weather.wind.speed} m/s</p>
              </div>

              {/* Cloudiness */}
              <div className="flex items-center justify-evenly">
                <h6>
                  <TiWeatherCloudy />
                  Cloudiness:&nbsp;
                </h6>
                <p>{weather.clouds.all} %</p>
              </div>
            </div>
          ) : (
            <div className="none"></div>
          )}
        </div>
      </div>

      <div className="comparisonContainer">
        {/* Heading */}
        <h1 className="heading text-3xl font-bold">Weather Comparison</h1>

        <div className="searchBox compareInput">
          <input
            type="text"
            placeholder="Enter location 1"
            onChange={(e) => setLocation1(e.target.value)}
            // Input for location 1 for comparison
          />
          <input
            type="text"
            placeholder="Enter location 2"
            onChange={(e) => setLocation2(e.target.value)}
            // Inout for location 1 for comparison
          />
          
          <button onClick={compareWeather}>
            Compare <MdCompareArrows />
          </button>
        </div>

        {/* location 1 data */}
        <div className="comparisonBox">
          {weatherData1.main && (
            <div>
              <div className="flex items-center justify-evenly">
                <h6>
                  <FaCity /> &nbsp; Location:&nbsp;
                </h6>
                <p>{weatherData1.name}</p>
              </div>
              <div className="flex items-center justify-evenly">
                <h6>
                  <TbTemperature />
                  Temperature:&nbsp;
                </h6>
                <p>
                  {weatherData1.main.temp} <TbTemperatureCelsius />
                </p>
              </div>

              <div className="flex items-center justify-evenly">
                <h6>
                  <WiHumidity />
                  Humidity:&nbsp;
                </h6>
                <p> {weatherData1.main.humidity}%</p>
              </div>

              <div className="flex items-center justify-evenly">
                <h6>
                  <MdAir />
                  Pressure:&nbsp;
                </h6>
                <p>{weatherData1.main.pressure} hPa</p>
              </div>

              <div className="flex items-center justify-evenly">
                <h6>
                  <MdAir />
                  Wind Speed:&nbsp;
                </h6>
                <p>{weatherData1.wind.speed} m/s</p>
              </div>
            </div>
          )}

          {/* location 2 data */}

          {weatherData2.main && (
            <div>
              <div className="flex items-center justify-evenly">
                <h6>
                  <FaCity /> &nbsp; Location:&nbsp;
                </h6>
                <p>{weatherData2.name}</p>
              </div>
              <div className="flex items-center justify-evenly">
                <h6>
                  <TbTemperature />
                  Temperature:&nbsp;
                </h6>
                <p>
                  {weatherData2.main.temp} <TbTemperatureCelsius />
                </p>
              </div>

              <div className="flex items-center justify-evenly">
                <h6>
                  <WiHumidity />
                  Humidity:&nbsp;
                </h6>
                <p> {weatherData2.main.humidity}%</p>
              </div>

              <div className="flex items-center justify-evenly">
                <h6>
                  <MdAir />
                  Pressure:&nbsp;
                </h6>
                <p>{weatherData2.main.pressure} hPa</p>
              </div>

              <div className="flex items-center justify-evenly">
                <h6>
                  <MdAir />
                  Wind Speed:&nbsp;
                </h6>
                <p>{weatherData2.wind.speed} m/s</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
