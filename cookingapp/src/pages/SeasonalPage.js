import React from 'react';
import Layout from '../components/Layout';
import { getCurrentSeason } from '../utils/dateUtils';

const SeasonalPage = () => {
  const currentSeason = getCurrentSeason();

  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Seizoensproducten</h1>
          <p>Kook met de beste ingrediënten van het moment</p>
        </div>
      </section>
      <div className="page-wrapper">
        <h2>Nu in seizoen: {currentSeason}</h2>
        <p>Hier komt de inhoud van de seizoenspagina.</p>
      </div>
    </Layout>
  );
};

export default SeasonalPage; 