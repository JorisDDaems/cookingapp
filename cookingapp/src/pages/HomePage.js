import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getAllRecipes } from '../services/recipeService';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      const allRecipes = await getAllRecipes();
      setRecipes(allRecipes);
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welkom bij Kaats Kitchen</h1>
          <p>Ontdek heerlijke recepten en kooktips.</p>
          <form className="search-form">
            <input
              type="text"
              placeholder="Zoek recepten..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" onClick={(e) => {
              e.preventDefault(); // Prevent default form submission
              // You can add any additional logic here if needed
            }}>
              Zoek
            </button>
          </form>
        </div>
      </section>
      <div className="page-wrapper">
        <h2>Onze Aanbevolen Recepten</h2>
        <section className="recipes-section">
          <div className="container">
            <div className="recipes-grid">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                  <article key={recipe.id} className="recipe-card">
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

export default HomePage; 