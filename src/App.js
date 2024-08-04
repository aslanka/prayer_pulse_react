// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Chatbot from './pages/Chatbot/chatbot';
import Learn from './pages/Learn/learn'
import Prayer from './pages/Prayer/prayer'
import Login from './pages/Login/login'
// Import other components as needed

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/learnmore" element={<Learn />} />
          <Route path="/prayertimes" element={<Prayer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
