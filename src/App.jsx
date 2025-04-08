import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try another.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-500 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Weather Dashboard</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="text-white mt-4">Loading...</p>}
      {error && <p className="text-red-200 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
