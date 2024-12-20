import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-detail-overlay">
      <div className="recipe-detail-modal">
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="recipe-detail-content">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          
          <div className="recipe-info-grid">
            <div className="info-item">
              <span>Bereidingstijd</span>
              <p>{recipe.readyInMinutes} minuten</p>
            </div>
            <div className="info-item">
              <span>Porties</span>
              <p>{recipe.servings}</p>
            </div>
          </div>

          <h3>Ingrediënten</h3>
          <ul className="ingredients-list">
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>

          <h3>Bereidingswijze</h3>
          <ol className="instructions-list">
            {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 