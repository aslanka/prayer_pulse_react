// src/services/prayerTimesService.js
const API_URL = process.env.REACT_APP_API_URL;
const ENDPOINT = "/api/prayer-times"
export const fetchPrayerTimes = async (year, month, city, country, method) => {
  try {
    const response = await fetch(`${API_URL}${ENDPOINT}/${year}/${month}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
