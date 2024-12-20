import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div 
          key={recipe.id} 
          className="recipe-card"
          onClick={() => onRecipeClick(recipe.id)}
        >
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipe-info">
            <h3>{recipe.title}</h3>
            <div className="recipe-stats">
              <span>✓ {recipe.usedIngredientCount} ingrediënten beschikbaar</span>
              {recipe.missedIngredientCount > 0 && (
                <span>• {recipe.missedIngredientCount} extra nodig</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList; 