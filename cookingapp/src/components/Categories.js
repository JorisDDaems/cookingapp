import React from 'react';
import { IMAGE_PATHS } from '../services/imageService';

const Categories = () => {
  const categories = [
    { name: 'Desserts', image: IMAGE_PATHS.CATEGORIES.DESSERTS },
    { name: 'Hoofdgerechten', image: IMAGE_PATHS.CATEGORIES.MAIN_COURSES },
    { name: 'Voorgerechten', image: IMAGE_PATHS.CATEGORIES.STARTERS },
  ];

  return (
    <div className="categories">
      {categories.map(category => (
        <div key={category.name} className="category-card">
          <img src={category.image} alt={category.name} style={{ height: '100px', width: 'auto' }} />
          <h4>{category.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Categories; 