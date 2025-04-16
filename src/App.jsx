import { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeatherData = async (location = 'London') => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Failed to fetch weather data', error);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    getWeatherData('London');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      getWeatherData(location);
    }
  };

  const convertTimestampToDateElements = (timestamp, timezoneOffset) => {
    const adjustedTimestamp = timestamp + timezoneOffset;
    const date = new Date(adjustedTimestamp * 1000);
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const dateString = date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const timeString = date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return { day, dateString, timeString };
  };

  const convertTimestampToTime = (timestamp, timezoneOffset) => {
    const adjustedTimestamp = timestamp + timezoneOffset;
    const date = new Date(adjustedTimestamp * 1000);
    const timeString = date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    return timeString;
  };

  let day, dateString, timeString, sunriseTime, sunsetTime;
  if (weatherData) {
    const {
      day: tempDay,
      dateString: tempDateString,
      timeString: tempTimeString,
    } = convertTimestampToDateElements(weatherData.dt, weatherData.timezone);
    day = tempDay;
    dateString = tempDateString;
    timeString = tempTimeString;

    sunriseTime = convertTimestampToTime(
      weatherData.sys.sunrise,
      weatherData.timezone,
    );
    sunsetTime = convertTimestampToTime(
      weatherData.sys.sunset,
      weatherData.timezone,
    );
  }

  return (
    <main>
      <div className="flex flex-col sm:flex-row h-screen">
        <section className="flex-1 p-10 sm:p-6 h-full">
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
            <div className="flex items-center">
              <img
                src="./src/assets/images/icon_avatar.png"
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div className="pl-3 flex flex-col justify-center">
                <p className="text-xl text-white">hello,</p>
                <p className="font-bold text-2xl text-white">
                  {location || 'London'}
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-borderfillblue border-2 border-borderblue rounded-full pl-4 pr-2 py-1 w-full sm:w-80 mt-4 sm:mt-0"
            >
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search Location"
                className="flex-grow text-sm text-black bg-transparent focus:outline-none"
              />
              <button type="submit">
                <img
                  src="./src/assets/images/arrow.png"
                  alt="search"
                  className="w-6 h-6"
                />
              </button>
            </form>
          </div>

          {weatherData ? (
            <div className="flex flex-wrap justify-between mt-8 space-x-6">
              {/* Weather Card */}
              <div
                className="flex flex-col bg-amber-200 sm:w-[48%] w-full p-5 rounded-2xl bg-cover bg-center bg-no-repeat mt-4 sm:mt-0"
                style={{
                  backgroundImage: "url('./src/assets/images/image.png')",
                }}
              >
                <div className="flex items-start">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="weather"
                    className="w-10 h-10"
                  />
                  <div className="pl-3 flex flex-col justify-center">
                    <p className="text-xl text-black">Weather</p>
                    <p className="font-bold text-2xl text-black">
                      What’s the weather
                    </p>
                  </div>
                </div>
                <div className="mt-4 ml-2 flex flex-col justify-center">
                  <p className="text-4xl font-bold text-textblue">
                    {weatherData.main.temp}°C
                  </p>
                  <p className="font-bold text-lg text-textblue">
                    {weatherData.weather[0].main}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col justify-center items-center bg-pressure rounded-2xl p-4 w-30 h-20">
                    <p className="text-sm text-white">Pressure</p>
                    <p className="font-bold text-lg text-white">
                      {weatherData.main.pressure} mb
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center items-center bg-visibility rounded-2xl p-4 w-30 h-20">
                    <p className="text-sm text-white">Visibility</p>
                    <p className="font-bold text-lg text-white">
                      {weatherData.visibility / 1000} km
                    </p>
                  </div>
                  <div className="flex flex-col  justify-center items-center bg-white rounded-2xl p-4 w-30 h-20">
                    <p className="text-sm text-black">Humidity</p>
                    <p className="font-bold text-lg text-black">
                      {weatherData.main.humidity} %
                    </p>
                  </div>
                </div>
              </div>

              {/* Wind Status Card */}
              <div
                className="flex flex-col bg-amber-200 sm:w-[48%] w-full p-5 rounded-2xl bg-cover bg-center bg-no-repeat mt-4 sm:mt-0"
                style={{
                  backgroundImage: "url('./src/assets/images/image1.png')",
                }}
              >
                <div className="flex items-start">
                  <img
                    src="./src/assets/images/wind.png"
                    alt="wind"
                    className="w-10 h-10"
                  />
                  <div className="pl-3 flex flex-col justify-center">
                    <p className="text-xl text-black">Wind Status</p>
                    <p className="font-bold text-2xl text-black">
                      What’s the wind
                    </p>
                  </div>
                </div>
                <div className="mt-4 ml-2 flex flex-col justify-center">
                  <p className="text-4xl font-bold text-textblue">
                    {weatherData.wind.speed} m/s
                  </p>
                  <p className="font-bold text-lg text-textblue">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col justify-center items-center bg-winddir rounded-2xl p-4 w-45 h-20">
                    <p className="text-sm text-black">Wind Direction</p>
                    <p className="font-bold text-lg text-black">
                      {weatherData.wind.deg}°
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-windgust rounded-2xl p-4 w-45 h-20">
                    <p className="text-sm text-black">Wind Gust Speed</p>
                    <p className="font-bold text-lg text-black">
                      {weatherData.wind.gust} m/s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white">Loading weather data...</p>
          )}

          <div className="pl-3 flex flex-col justify-center mt-3">
            <p className="text-xl text-white">Today's </p>
            <p className="font-bold text-2xl text-white">Daylight Schedule</p>
          </div>
          <div className="relative w-xs mx-auto">
            <img
              src="./src/assets/images/Group1.png"
              alt="sunstatus"
              className="w-full"
            />
            <div
              className="absolute text-customorange text-xl"
              style={{
                top: '15%',
                left: '12%',
              }}
            >
              <p className="text-2xl">{sunriseTime}</p>
            </div>

            <div
              className="absolute text-white"
              style={{
                top: '72%',
                left: '56%',
              }}
            >
              <p className=" text-2xl">{sunsetTime}</p>
            </div>
          </div>
        </section>

        {/* Right Side Section */}
        <aside className="w-full sm:w-[35%] bg-gradient-to-b from-[#051937] to-[#004d7a] p-4 text-white">
          <div className="flex flex-col h-full m-7">
            <div className="flex flex-row pt-4 justify-between items-center">
              <div className="flex flex-col pt-2">
                <p className="text-4xl text-white">{day}</p>
                <p className="text-xl text-white font-bold mt-3.5">
                  {dateString}
                </p>
              </div>
              <div>
                <p className="text-4xl text-customorange">{timeString}</p>
              </div>
            </div>
            <hr className="my-4 border-t-2 border-customorange mt-8" />
            <div className="flex flex-col mt-5 mb-5">
              <div className="flex flex-col bg-gradient-to-b from-customfeels1 to-customfeels2 bg-no-repeat w-full p-5 rounded-2xl mt-3 mb-3">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-black">Temp Feels Like</p>
                  <p className="text-5xl text-black font-bold p-2">
                    {weatherData ? weatherData.main.feels_like : 'Loading...'}°C
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-gradient-to-b from-custommintemp1 to-custommintemp2 bg-no-repeat w-full p-5 rounded-2xl mt-3 mb-3">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-black">Minimum Temp</p>
                  <p className="text-5xl text-black font-bold p-2">
                    {weatherData ? weatherData.main.temp_min : 'Loading...'}°C
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-gradient-to-b from-custommaxtemp1 to-custommaxtemp2 bg-no-repeat w-full p-5 rounded-2xl mt-3 mb-3">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl text-black">Maximum Temp</p>
                  <p className="text-5xl text-black font-bold p-2">
                    {weatherData ? weatherData.main.temp_max : 'Loading...'}°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
