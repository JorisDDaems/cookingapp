import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { saveUserData } from '../services/userService';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const location = useLocation();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    try {
      await saveUserData({ email, isNewsletter: true });
      setSubscribeMessage('Bedankt voor je inschrijving!');
      setEmail('');
    } catch (error) {
      setSubscribeMessage('Er ging iets mis. Probeer het later opnieuw.');
    }
    setIsSubscribing(false);
    setTimeout(() => setSubscribeMessage(''), 3000);
  };

  return (
    <header className="site-header">
      <div className="newsletter-bar">
        <div className="container">
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Schrijf je in voor onze nieuwsbrief"
              required
            />
            <button type="submit" disabled={isSubscribing}>
              {isSubscribing ? 'Even geduld...' : 'Inschrijven'}
            </button>
          </form>
          {subscribeMessage && (
            <span className="subscribe-message">{subscribeMessage}</span>
          )}
        </div>
      </div>
      
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Kaats Kitchen</h1>
            <p className="tagline">Culinaire inspiratie voor thuis</p>
          </Link>
        </div>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/recepten" 
                className={location.pathname === '/recepten' ? 'active' : ''}
              >
                Recepten
              </Link>
            </li>
            <li>
              <Link 
                to="/kooktips"
                className={location.pathname === '/kooktips' ? 'active' : ''}
              >
                Kooktips
              </Link>
            </li>
            <li>
              <Link 
                to="/seizoen"
                className={location.pathname === '/seizoen' ? 'active' : ''}
              >
                Seizoensproducten
              </Link>
            </li>
            <li>
              <Link 
                to="/over"
                className={location.pathname === '/over' ? 'active' : ''}
              >
                Over Ons
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/webshop"
                className={location.pathname === '/webshop' ? 'active' : ''}
              >
                Webshop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation; 