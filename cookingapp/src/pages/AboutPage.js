import React from 'react';
import Layout from '../components/Layout';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Over Kaats Kitchen</h1>
          <p>Ontdek onze missie en visie.</p>
        </div>
      </section>
      <div className="page-wrapper about-content">
        <div className="about-container">
          <img src="https://via.placeholder.com/150" alt="Kaat's headshot" className="headshot" />
          <div className="about-text">
            <h2>Onze Geschiedenis</h2>
            <p>
              Bij Kaats Kitchen draait alles om de pure magie van koken. Mijn naam is Kaat, 
              een 26-jarige enthousiaste foodie met een grote liefde voor smaken, kleuren en 
              verhalen achter gerechten. Als meisje dat opgroeide in de keuken van mijn oma 
              en nu werkt in een bruisende lunchbar, geloof ik dat eten niet alleen draait om 
              voedzaam zijn, maar ook om verbinding en vreugde.
            </p>
            <p>
              Mijn missie is om jou te inspireren met toegankelijke, creatieve recepten die je 
              thuis kunt maken, ongeacht je kookervaring. Of je nu een drukke dag achter de rug 
              hebt of een moment zoekt om te ontspannen, Kaats Kitchen helpt je de liefde voor 
              koken (her)ontdekken met gerechten die je hart verwarmen en je tafel vullen met 
              gezelligheid. Samen maken we van koken niet zomaar een taak, maar een avontuur 
              dat verbindt en verrijkt.
            </p>
            <p>
              Laten we samen herinneringen maken, hapje per hapje. ❤️
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 