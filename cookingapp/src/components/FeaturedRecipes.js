import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_PATHS, ImageWithFallback } from '../services/imageService';

const FeaturedRecipes = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Verse Pasta met Seizoensgroenten",
      time: "30",
      image: IMAGE_PATHS.CATEGORIES.MAIN_COURSES,
      description: "Een heerlijke verse pasta met groenten van het seizoen"
    },
    {
      id: 2,
      title: "Mediterrane Salade",
      time: "15",
      image: IMAGE_PATHS.CATEGORIES.STARTERS,
      description: "Frisse salade met mediterrane ingrediënten"
    },
    {
      id: 3,
      title: "Chocolade Lava Cake",
      time: "25",
      image: IMAGE_PATHS.CATEGORIES.DESSERTS,
      description: "Warme chocolade cake met een vloeibare kern"
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Uitgelichte Recepten</h2>
        <div className="featured-grid">
          {featuredRecipes.map(recipe => (
            <article key={recipe.id} className="featured-card">
              <div className="featured-image">
                <ImageWithFallback src={recipe.image} alt={recipe.title} />
              </div>
              <div className="featured-content">
                <h3>{recipe.title}</h3>
                <p className="cooking-time">{recipe.time} minuten</p>
                <p className="recipe-description">{recipe.description}</p>
                <Link to={`/recepten/${recipe.id}`} className="view-recipe-btn">
                  Bekijk Recept
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes; 