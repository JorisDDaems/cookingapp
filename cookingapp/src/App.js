import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'; // Huidige homepage content
import RecipesPage from './pages/RecipesPage';
import CookingTipsPage from './pages/CookingTipsPage';
import SeasonalPage from './pages/SeasonalPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recepten" element={<RecipesPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/kooktips" element={<CookingTipsPage />} />
          <Route path="/seizoen" element={<SeasonalPage />} />
          <Route path="/over" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/webshop" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
