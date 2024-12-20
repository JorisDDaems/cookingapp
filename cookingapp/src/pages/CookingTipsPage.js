import React from 'react';
import Layout from '../components/Layout';
import { IMAGE_PATHS } from '../services/imageService';

const CookingTipsPage = () => {
  const tips = [
    {
      id: 1,
      title: "Mise en Place",
      description: "Bereid alle ingrediënten voor voordat je begint met koken",
      image: IMAGE_PATHS.CATEGORIES.STARTERS
    },
    {
      id: 2,
      title: "Scherpe Messen",
      description: "Werk met scherpe messen voor veiligheid en precisie",
      image: IMAGE_PATHS.CATEGORIES.MAIN_COURSES
    },
    // Voeg meer tips toe...
  ];

  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Kooktips</h1>
          <p>Handige tips en tricks voor in de keuken</p>
        </div>
      </section>
      <div className="page-wrapper">
        <section className="tips-section">
          <div className="container">
            <div className="tips-grid">
              {tips.map(tip => (
                <article key={tip.id} className="tip-card">
                  <div className="tip-image">
                    <img src={tip.image} alt={tip.title} />
                  </div>
                  <div className="tip-content">
                    <h3>{tip.title}</h3>
                    <p>{tip.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CookingTipsPage; 