import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chatbot.css'; // Import the CSS file for Chatbot styling
import Nav from '../../components/nav/nav';

const Chatbot = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => setMessage(e.target.value);
  
  const handleSubmit = () => {
    // Handle message send action
    console.log(message);
    setMessage(''); // Clear input after sending
  };

  return (
    <div className="chatbot-page">
      <Nav />
      <main>
        <div className="img-container">
          <a href="/">
            <img id="logo" src="light.jpg" alt="logo" />
          </a>
        </div>        
      </main>
      
      <fieldset className="chatbot-body">
        <div className="chatbot-container">
          <div id="chat-output" className="chat-output"></div>
          <div className="input-container">
            <input
              type="text"
              id="user-input"
              placeholder="Type your message here..."
              value={message}
              onChange={handleInputChange}
            />
            <button id="button" onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </fieldset>

      <footer>
        <p>
          &copy; 2024 <a href="/">Prayer Pulse.</a> All rights reserved. | &#9993; achught1@uncc.edu | Charlotte, NC 28213
        </p>     
      </footer>
    </div>
  );
};

export default Chatbot;
