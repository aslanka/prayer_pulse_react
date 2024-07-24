// PrayerTimes.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './prayer.css';
import lightLogo from '../../assets/light.jpg'
import Nav from '../../components/nav/nav';

const Prayer = () => {
  const [selectedCity, setSelectedCity] = useState('Charlotte');
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: '',
    dhuhr: '',
    asr: '',
    maghrib: '',
    isha: ''
  });

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const fetchPrayerTimes = () => {
    // Replace this with your actual API call or logic to get prayer times
    const mockPrayerTimes = {
      fajr: '05:00 AM',
      dhuhr: '12:30 PM',
      asr: '03:45 PM',
      maghrib: '06:30 PM',
      isha: '08:00 PM'
    };
    setPrayerTimes(mockPrayerTimes);
  };

  return (
    <div className="prayer-times-page">
     <Nav />

      <main>
        <div className="img-container">
          <Link to="/">
            <img id="logo" src={lightLogo} alt="logo" />
          </Link>
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
        <button id="fetch-times-btn" onClick={fetchPrayerTimes}>Load Prayer Times</button>
      </div>

      <div className="prayer-times-container">
        <h1 className="prayer-times">Islamic Prayer Times</h1>
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
                <td>{prayerTimes.fajr}</td>
                <td>{prayerTimes.dhuhr}</td>
                <td>{prayerTimes.asr}</td>
                <td>{prayerTimes.maghrib}</td>
                <td>{prayerTimes.isha}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 <Link to="/">Prayer Pulse.</Link> All rights reserved. | &#9993; achught1@uncc.edu | Charlotte, NC 28213</p>
      </footer>
    </div>
  );
};

export default Prayer;
