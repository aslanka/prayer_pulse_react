import React, { useState } from 'react';
import { fetchPrayerTimes } from '../../services/prayerTimeService.js';
import './prayer.css'; // Import the CSS file
//import lightLogo from '../../assets/light.jpg'; // Adjust the path if necessary
import Nav from '../../components/nav/nav'; // Adjust the path if necessary
import { convertTimings } from '../../utils/time_conversion.js';
import Background from '../../assets/black-background.jpg';

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
      
      </main>

      <div className="city-selector">
        <label className="city-label" htmlFor="city">Select City &#10141;</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="Charlotte">Charlotte, NC</option>
          <option value="New York">New York, NY</option>
          <option value="Los Angeles">Los Angeles, CA</option>
          <option value="San Diego">San Diego, CA</option>
          <option value="San Jose">San Jose, CA</option>
          <option value="San Francisco">San Francisco, CA</option>
          <option value="Phoenix">Phoenix, AZ</option>
          <option value="Seattle">Seattle, WA</option>
          <option value="Denver">Denver, CO</option>
          <option value="Detroit">Detroit, MI</option>
          <option value="Washington DC">Washington DC</option>
          <option value="Chicago">Chicago, IL</option>
          <option value="Houston">Houston, TX</option>
          <option value="Dallas">Dallas, TX</option>
          <option value="San Antonio">San Antonio, TX</option>
          <option value="Austin">Austin, TX</option>
          <option value="Miami">Miami, FL</option>
          <option value="Orlando">Orlando, FL</option>
          <option value="Philadelphia">Philadelphia, PA</option>
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
    </div>
  );
};

export default PrayerTimesFetcher;
