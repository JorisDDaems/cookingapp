import React from 'react';
import { IMAGE_PATHS } from '../services/imageService';

const HeroSection = () => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${IMAGE_PATHS.HERO})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welkom bij Kaats Kitchen</h1>
        <p>Ontdek de lekkerste recepten en deel je kookavonturen</p>
        <div className="hero-search">
          <input 
            type="text" 
            placeholder="Zoek een recept..."
            className="hero-search-input"
          />
          <button className="hero-search-button">
            Zoeken
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 