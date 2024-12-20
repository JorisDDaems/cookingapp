import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kaats Kitchen</h3>
            <p>Culinaire inspiratie voor thuis</p>
            <div className="social-links">
              <a 
                href="https://instagram.com/kaatskitchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="https://tiktok.com/@kaatskitchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a 
                href="https://facebook.com/kaatskitchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
  href="https://pinterest.com/kaatskitchen" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
  aria-label="Pinterest profiel van Kaat's Kitchen"
>
  <FontAwesomeIcon icon={faPinterest} />
</a>

            </div>
          </div>
          
          <div className="footer-section">
            <h4>Navigatie</h4>
            <ul>
              <li><Link to="/recepten">Recepten</Link></li>
              <li><Link to="/kooktips">Kooktips</Link></li>
              <li><Link to="/seizoen">Seizoensproducten</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Over Ons</h4>
            <ul>
              <li><Link to="/over">Over Kaats Kitchen</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kaats Kitchen. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 