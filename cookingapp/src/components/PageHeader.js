import React from 'react';
import '../styles/components/PageHeader.css';

const PageHeader = ({ title, image }) => {
  return (
    <section className="page-header" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageHeader; 