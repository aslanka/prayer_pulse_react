import React, { useState } from 'react';
import { fetchPrayerTimes } from '../../services/prayerTimeService.js';
import './prayer.css'; // Import the CSS file
import lightLogo from '../../assets/light.jpg'; // Adjust the path if necessary
import Nav from '../../components/nav/nav'; // Adjust the path if necessary
import { convertTimings } from '../../utils/time_conversion.js';

const PrayerTimesFetcher = () => {
  const [selectedCity, setSelectedCity] = useState('Charlotte');
  const [prayerTimes, setPrayerTimes] = useState({});
  const [error, setError] = useState(null);
  const [year, setYear] = useState('2024'); // Default or current year
  const [month, setMonth] = useState('7'); // Default or current month
  const [method, setMethod] = useState('2'); // Default method

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const fetchPrayerTimesData = async () => {
    try {
      const response = await fetchPrayerTimes(year, month, selectedCity, 'United States', method);
      if (response && response.data && response.data.length > 0) {
        // Extract timings from the first object in the data array
        const timings = response.data[0].timings || {};
        const convertedTimings = convertTimings(timings);
      
        setPrayerTimes(convertedTimings);
      } else {
        setPrayerTimes({});
        setError('No data found.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="prayer-times-page">
      <Nav />

      <main>
        <div className="img-container">
          <a href="/">
            <img id="logo" src={lightLogo} alt="logo" />
          </a>
        </div>
      </main>

      <div className="city-selector">
        <label className="city-label" htmlFor="city">Select City &#10141;</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="Charlotte">Charlotte</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          {/* Add more cities as needed */}
        </select>
        <button id="fetch-times-btn" onClick={fetchPrayerTimesData}>Load Prayer Times</button>
      </div>

      <div className="prayer-times-container">
        <h1 className="prayer-times">Islamic Prayer Times</h1>
        {error && <p>Error: {error}</p>}
        <div className="prayer-times-table">
          <table>
            <thead>
              <tr>
                <th>Fajr</th>
                <th>Dhuhr</th>
                <th>Asr</th>
                <th>Maghrib</th>
                <th>Isha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{prayerTimes.Fajr || 'N/A'}</td>
                <td>{prayerTimes.Dhuhr || 'N/A'}</td>
                <td>{prayerTimes.Asr || 'N/A'}</td>
                <td>{prayerTimes.Maghrib || 'N/A'}</td>
                <td>{prayerTimes.Isha || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 <a href="/">Prayer Pulse.</a> All rights reserved. | &#9993; achught1@uncc.edu | Charlotte, NC 28213</p>
      </footer>
    </div>
  );
};

export default PrayerTimesFetcher;
