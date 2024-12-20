import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { getAllRecipes } from '../services/recipeService';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllRecipes();
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product);
  };

  return (
    <Layout>
      <section className="page-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920)` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Webshop</h1>
          <p>Ontdek onze producten.</p>
        </div>
      </section>
      <div className="page-wrapper">
        <h2>Onze Producten</h2>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
