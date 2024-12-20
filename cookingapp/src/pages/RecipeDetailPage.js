import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { getRecipeById } from '../services/recipeService';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const fetchedRecipe = await getRecipeById(id);
        fetchedRecipe.image = `https://res.cloudinary.com/dej1hjram/image/upload/v1234567890/${fetchedRecipe.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
        setRecipe(fetchedRecipe);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error) return <Layout><div className="error-message">{error}</div></Layout>;

  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{recipe.title}</h1>
        </div>
      </section>
      <div className="page-wrapper">
        {recipe ? (
          <>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
            <h2>Ingrediënten</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2>Instructies</h2>
            <p>{recipe.instructions}</p>
            <p>Kooktijd: {recipe.readyInMinutes} minuten</p>
          </>
        ) : (
          <p>Recept niet gevonden.</p>
        )}
      </div>
    </Layout>
  );
};

export default RecipeDetailPage; 