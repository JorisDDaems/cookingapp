import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = [
        {
          id: 1,
          name: "Kookboek",
          description: "Een prachtig kookboek vol met heerlijke recepten.",
          image: "https://res.cloudinary.com/dej1hjram/image/upload/v1734706762/joda7864_photos_of_a_gorgeous_ramen_noodle_soup_usable_for_a__b69ef0d8-933f-4d82-9245-2b1bde01e43a_3_pwu1a8.png", // Replace with your Cloudinary image URL
        },
        {
          id: 2,
          name: "Pasta Machine",
          description: "Maak zelf verse pasta met deze gebruiksvriendelijke machine.",
          image: "https://res.cloudinary.com/dej1hjram/image/upload/v1234567890/pasta-machine.jpg", // Replace with your Cloudinary image URL
        },
        // Add other products with their respective Cloudinary image URLs...
      ];

      setProducts(productData);
    };

    fetchProducts();
  }, []);

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
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="add-to-cart">Voeg toe aan winkelwagentje</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
