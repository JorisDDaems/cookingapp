import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import { getAllRecipes } from '../services/recipeService';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const allRecipes = await getAllRecipes();
        console.log('Fetched recipes:', allRecipes);
        setRecipes(allRecipes);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (recipe.ingredients && recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  if (loading) return <Layout><LoadingSpinner /></Layout>;
  if (error) return <Layout><div className="error-message">{error}</div></Layout>;

  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Recepten</h1>
          <p>Ontdek heerlijke recepten voor elke gelegenheid</p>
          <form className="search-form">
            <input
              type="text"
              placeholder="Zoek recepten..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" onClick={(e) => {
              e.preventDefault(); // Prevent default form submission
            }}>
              Zoek
            </button>
          </form>
        </div>
      </section>
      <div className="page-wrapper">
        <section className="recipes-section">
          <div className="container">
            <div className="recipes-grid">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                  <article key={recipe.id} className="recipe-card">
                    <Link to={`/recipes/${recipe.id}`}>
                      <div className="recipe-image">
                        <img src={recipe.image || "https://via.placeholder.com/300"} alt={recipe.title} />
                      </div>
                      <div className="recipe-content">
                        <h3>{recipe.title}</h3>
                        {recipe.readyInMinutes && (
                          <p className="cooking-time">{recipe.readyInMinutes} minuten</p>
                        )}
                        {recipe.description && (
                          <p className="recipe-description">{recipe.description}</p>
                        )}
                      </div>
                    </Link>
                  </article>
                ))
              ) : (
                <p>Geen recepten gevonden.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RecipesPage;