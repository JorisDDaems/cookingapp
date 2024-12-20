import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Privacybeleid</h1>
          <p>Lees ons privacybeleid.</p>
        </div>
      </section>
      <div className="page-wrapper">
        <h2>Privacybeleid Inhoud</h2>
        <p>Laatst bijgewerkt: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Inleiding</h2>
          <p>Welkom bij Kaats Kitchen. Wij respecteren uw privacy en zetten ons in voor het beschermen van uw persoonlijke gegevens. Deze privacy policy informeert u over hoe wij omgaan met uw persoonlijke gegevens wanneer u onze website bezoekt en vertelt u over uw privacy rechten.</p>
        </section>

        <section>
          <h2>2. Welke gegevens verzamelen we</h2>
          <ul>
            <li>Contact informatie (naam, e-mailadres) wanneer u zich inschrijft voor onze nieuwsbrief</li>
            <li>Berichten die u ons stuurt via het contactformulier</li>
            <li>Gebruiksgegevens (IP-adres, browsertype, apparaat informatie)</li>
            <li>Cookies en vergelijkbare tracking technologieën</li>
          </ul>
        </section>

        <section>
          <h2>3. Hoe we uw gegevens gebruiken</h2>
          <ul>
            <li>Om onze nieuwsbrief te versturen</li>
            <li>Om te reageren op uw vragen en verzoeken</li>
            <li>Om onze website te verbeteren</li>
            <li>Om te voldoen aan wettelijke verplichtingen</li>
          </ul>
        </section>

        <section>
          <h2>4. Uw rechten</h2>
          <p>U heeft het recht om:</p>
          <ul>
            <li>Inzage te krijgen in uw persoonlijke gegevens</li>
            <li>Uw gegevens te laten corrigeren of verwijderen</li>
            <li>Uw toestemming in te trekken</li>
            <li>Bezwaar te maken tegen verwerking van uw gegevens</li>
            <li>Uw gegevens over te dragen</li>
          </ul>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>We gebruiken cookies om uw ervaring op onze website te verbeteren. U kunt cookies uitschakelen in uw browserinstellingen, maar dit kan de functionaliteit van de website beïnvloeden.</p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>Voor vragen over deze privacy policy of uw gegevens kunt u contact met ons opnemen via:</p>
          <p>E-mail: privacy@kaatskitchen.nl</p>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 