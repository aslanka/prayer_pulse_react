import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Nav from '../../components/nav/nav';
import alAqsaPic from '../../assets/al-aqsa_pict.jpg';
import greenMosque from '../../assets/green-mosque.png';

const Home = () => {
  const whiteSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Optional: Stop observing once it has faded in
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (whiteSectionRef.current) {
      observer.observe(whiteSectionRef.current);
    }

    return () => {
      if (whiteSectionRef.current) {
        observer.unobserve(whiteSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="homepage">
      <Nav />

      <main>
        <div className="img-container">
          <Link to="/">
            <img id="background-img" src={alAqsaPic} alt="background-img" />
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
      
      <div ref={whiteSectionRef} className="white-section">
        <div className="mission">
          <h2>Welcome to Prayer Pulse: Your Spiritual Companion</h2>
          <p>
            At Prayer Pulse, we harmonize faith and technology to elevate your spiritual journey.
          </p>
          <p> We are here to guide you on a path where faith and innovation gracefully intertwine to support and inspire your daily devotion.
          </p>
          <p>
          Discover the rhythm of your prayers and converse with our insightful AI assistant.
          </p>
        </div>
        <div className='mission-img'>
        <img src={greenMosque} alt="Learn" />
        </div>
        <h2></h2>
      </div>
      
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
