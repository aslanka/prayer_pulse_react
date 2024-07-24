// LearnMore.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './learn.css';
import lightLogo from '../../assets/light.jpg'; // Import your image
import boxPic from '../../assets/box.png'; // Import your image
import campaignPic from '../../assets/campaign.png'; // Import your image
import searchPic from '../../assets/search.png'; // Import your image
import Nav from '../../components/nav/nav';

const Learn = () => {
  const [activeTab, setActiveTab] = useState('Donate');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="learnmore-page">
    <Nav />

      <main>
        <div className="img-container">
          <Link to="/">
            <img id="logo" src={lightLogo} alt="logo" />
          </Link>
        </div>
      </main>

      <ul className="tabs">
        <li
          className={activeTab === 'Donate' ? 'active' : ''}
          onClick={() => handleTabClick('Donate')}
        >
          Donate
        </li>
        <li
          className={activeTab === 'Learn' ? 'active' : ''}
          onClick={() => handleTabClick('Learn')}
        >
          Learn
        </li>
        <li
          className={activeTab === 'Explore' ? 'active' : ''}
          onClick={() => handleTabClick('Explore')}
        >
          Explore
        </li>
      </ul>

      <div className="tabs-container">
        {activeTab === 'Donate' && (
          <div className="tabs-content">
            <div className="tabs-flex-container">
              <ul>
                <li className="articles-links-category"><a>Donate</a></li>
                <li className="articles-links"><a href="https://www.pcrf.net/" target="_blank" rel="noopener noreferrer">Palestine Children's Relief Fund</a></li>
                <li className="articles-links"><a href="https://crisisrelief.un.org/opt-crisis" target="_blank" rel="noopener noreferrer">UN Crisis Relief: Gaza</a></li>
                <li className="articles-links"><a href="https://crisisrelief.un.org/t/sudan" target="_blank" rel="noopener noreferrer">UN Crisis Relief: Sudan</a></li>
                <li className="articles-links"><a href="https://irusa.org/" target="_blank" rel="noopener noreferrer">Islamic Relief USA</a></li>
              </ul>
              <img src={boxPic} alt="Donate" />
            </div>
          </div>
        )}

        {activeTab === 'Learn' && (
          <div className="tabs-content">
            <div className="tabs-flex-container">
              <ul>
                <li className="articles-links-category"><a>Learn</a></li>
                <li className="articles-links"><a href="https://www.mymasjid.ca/beginners-guide-learn-pray-salah/" target="_blank" rel="noopener noreferrer">The Beginner’s Guide To Learning How to Pray Salah</a></li>
                <li className="articles-links"><a href="https://m.clearquran.com/" target="_blank" rel="noopener noreferrer">Clear Quran: English Quran Translation</a></li>
                <li className="articles-links"><a href="https://noblequran.com/" target="_blank" rel="noopener noreferrer">The Noble Quran: English Quran Translation</a></li>
                <li className="articles-links"><a href="https://blog.hautehijab.com/post/a-new-converts-go-to-guide-to-islam" target="_blank" rel="noopener noreferrer">A New Convert's Go-To Guide To Islam For the Start of Your Muslim Life</a></li>
              </ul>
              <img src={campaignPic} alt="Learn" />
            </div>
          </div>
        )}

        {activeTab === 'Explore' && (
          <div className="tabs-content">
            <div className="tabs-flex-container">
              <ul>
                <li className="articles-links-category"><a>Explore</a></li>
                <li className="articles-links"><a href="https://muslim.co/" target="_blank" rel="noopener noreferrer">Muslim: #1 Source For All Muslim News & Content</a></li>
                <li className="articles-links"><a href="https://www.history.com/topics/religion/islam" target="_blank" rel="noopener noreferrer">History.com: Islam: Five Pillars</a></li>
                <li className="articles-links"><a href="https://yaqeeninstitute.org/what-islam-says-about/basics-of-islam" target="_blank" rel="noopener noreferrer">Yaqeen Institute: Basics of Islam</a></li>
                <li className="articles-links"><a href="https://www.independent.co.uk/topic/muslims" target="_blank" rel="noopener noreferrer">The Independent: Muslims - latest news, breaking stories</a></li>
                <li className="articles-links"><a href="https://www.nationalgeographic.com/culture/article/ramadan" target="_blank" rel="noopener noreferrer">National Geographic: Why Ramadan is the most sacred month</a></li>
                <li className="articles-links"><a href="https://www.muslimmediahub.com/" target="_blank" rel="noopener noreferrer">Muslim Media Hub</a></li>
                <li className="articles-links"><a href="https://www.muslimobserver.com/" target="_blank" rel="noopener noreferrer">The Muslim Observer</a></li>
              </ul>
              <img src={searchPic} alt="Explore" />
            </div>
          </div>
        )}
      </div>

      <footer>
        <p>&copy; 2024 <Link to="/">Prayer Pulse.</Link> All rights reserved. | &#9993; achught1@uncc.edu | Charlotte, NC 28213</p>
      </footer>
    </div>
  );
};

export default Learn;
