import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from "react";

const MainPage = () => {
  const [city, setCity] = useState("Bucharest");
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      setError(null);
      const res = await fetch(`/api/weather?city=${cityName}`);
      const data = await res.json();

      if (!res.ok) {
        setWeather(null);
        setError(data.error || "Eroare necunoscută");
      } else {
        setWeather(data);
        setCity(cityName);
      }
    } catch (err) {
      setWeather(null);
      setError("Eroare la obținerea vremii.");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      fetchWeather(inputCity.trim());
      setInputCity("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-100 via-white to-indigo-50 text-gray-800">
      <header className="bg-gradient-to-r from-indigo-700 to-indigo-500 shadow-xl py-6 px-10">
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 relative space-y-8">
        <div className="absolute top-0 left-0 opacity-20 w-full h-full pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="#c3bffa" d="M46.6,-65.7C59.3,-55.5,68.2,-39.7,71.1,-23.5C74.1,-7.3,71.2,9.4,63.7,22.7C56.3,36.1,44.3,46,30.8,54.6C17.3,63.2,2.3,70.6,-13.7,73.2C-29.7,75.8,-46.7,73.7,-60.2,64.5C-73.6,55.3,-83.6,38.9,-86.5,21.2C-89.4,3.6,-85.1,-15.4,-74.6,-29.3C-64.2,-43.2,-47.7,-51.9,-32.1,-60.6C-16.6,-69.3,-8.3,-78.1,5.5,-85C19.4,-91.8,38.7,-96,46.6,-65.7Z" transform="translate(100 100)" />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 drop-shadow-lg z-10 leading-snug">
          Descoperă o lume de povești și cunoaștere
        </h2>
        <p className="text-lg max-w-2xl text-gray-700 leading-relaxed sm:leading-loose z-10">
          Explorează cele mai populare cărți românești și internaționale.<br />
          Fie că ești pasionat de ficțiune, dezvoltare personală sau programare,<br />
          ai ajuns în locul potrivit.
        </p>

        <div className="div-input-vreme">
        <form onSubmit={handleSearch} className="input-weather">
          <input
            type="text"
            placeholder="Introdu un oraș..."
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button
            type="submit"
            className="btn-search"
          >
            Caută
          </button>
        </form>
        </div>

        <Link href="/records/menu">
          <button className="btn-get-started">
            🚀 Get Started
          </button>
        </Link>
      </main>

      <div className="weather-widget z-10 px-6 py-4 text-center">
        {error && <p className="text-red-600 font-semibold">{error}</p>}
        {weather && (
          <>
            <h3 className="font-semibold text-lg">Vremea în {weather.name}</h3>
            <p>🌡️ {weather.main.temp} °C</p>
            <p>☁️ {weather.weather[0].description}</p>
            <p>💨 Vânt: {weather.wind.speed} m/s</p>
          </>
        )}
      </div>

      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-200 bg-white shadow-inner">
        <p>© 2025 Eduard's Library. Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
};

export default MainPage;
