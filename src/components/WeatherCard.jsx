import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-xl">Temperature: {main.temp}°C</p>
      <p className="text-lg">Condition: {weather[0].main}</p>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} km/h</span>
      </div>
      <img
        src={iconUrl}
        alt={weather[0].description}
        className="mx-auto mt-4 w-20"
      />
    </div>
  );
}

export default WeatherCard;
