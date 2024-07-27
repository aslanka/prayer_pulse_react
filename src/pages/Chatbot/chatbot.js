import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chatbot.css'; // Import the CSS file for Chatbot styling
import Nav from '../../components/nav/nav';
import { sendMessageToChatbot } from '../../services/chatService.js'; // Import the service function
import Background from '../../assets/black-background.jpg'


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
      setChatOutput(prevOutput => `${prevOutput}\nUser: ${message}\nPrayerPulse AI: ${reply}`);
      console.log(reply.reply)
      setMessage(''); // Clear input after sending
      setError('');
    } catch (error) {
      setError(error.message);
      setChatOutput(prevOutput => `${prevOutput}\nUser: ${message}\nPrayerPulse AI: Error occurred`);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submit action
      handleSubmit();
    }
  };

  return (
    <><main>
      <div>
        
          <img id="background-img" src={Background} alt="background-img" />
        
      </div>
    </main>
    <div className="chatbot-page">
        <Nav />
        <main>
          
        </main>

        <fieldset className="chatbot-body">
          <h2 className="chat-title">PrayerPulse AI</h2>
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
                placeholder="Ask PrayerPulse AI..."
                value={message}
                onChange={handleInputChange} />
              <button id="button" onClick={handleSubmit}>Send</button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </fieldset>


      </div></>
  );
};

export default Chatbot;
