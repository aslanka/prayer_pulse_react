// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Nav from '../../components/nav/nav';
import alAqsaPic from '../../assets/al-aqsa_pic.jpg';
const Home = () => {
  return (
    <div className="homepage">
     <Nav />

      <main>
        <div className="img-container">
          <Link to="/">
            <img id="background-img"  src={alAqsaPic} alt="background-img" />
          </Link>
        </div>
      </main>

      <h1 className="tagline">Blending Spirituality With Today's World</h1>

      <div className="content-container">
        <div>
          <fieldset>
            <label className="sub">Subscribe to our Newsletter</label>
            <form action="/subscribe" method="post">
              <label htmlFor="email">Enter your email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="enter your email here..."
                required
              />
              <input
                type="submit"
                value="Subscribe"
                className="subscribe-button"
              />
            </form>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <label className="message">Donate to the Palestine Children's Relief Fund</label>
            <a
              href="https://www.pcrf.net/"
              className="donate-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Here
            </a>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <label className="message">Have questions? Prayer Pulse AI has answers!</label>
            <Link to="/chatbot" className="donate-button">Begin Chat</Link>
          </fieldset>
        </div>
      </div>

      <footer>
        <p>
          &copy; 2024 <Link to="/">Prayer Pulse.</Link> All rights reserved. | &#9993; achught1@uncc.edu | Charlotte, NC 28213
        </p>
      </footer>

      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <img src="tick.png" alt="" />
          <h2>Thank You!</h2>
          <p>Your details have been successfully submitted.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
