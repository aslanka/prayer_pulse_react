import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chatbot.css'; // Import the CSS file for Chatbot styling
import Nav from '../../components/nav/nav';
import { sendMessageToChatbot } from '../../services/chatService.js'; // Import the service function

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatOutput, setChatOutput] = useState(''); // State for storing chat replies
  const [error, setError] = useState('');

  const handleInputChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    if (message.trim() === '') return; // Prevent sending empty messages

    try {
      // Send the message to the chatbot service
      const reply = await sendMessageToChatbot(message);
      setChatOutput(prevOutput => `${prevOutput}\nUser: ${message}\nBot: ${reply}`);
      console.log(reply.reply)
      setMessage(''); // Clear input after sending
      setError('');
    } catch (error) {
      setError(error.message);
      setChatOutput(prevOutput => `${prevOutput}\nUser: ${message}\nBot: Error occurred`);
    }
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
          <div id="chat-output" className="chat-output">
            {chatOutput.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
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
          {error && <p className="error-message">{error}</p>}
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
