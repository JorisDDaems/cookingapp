import React, { useState } from 'react';
import axios from 'axios';

// Constanten voor afbeeldingspaden
export const IMAGE_PATHS = {
  HERO: 'https://example.com/path/to/hero-image.jpg',
  CATEGORIES: {
    STARTERS: 'https://example.com/path/to/starter-image.jpg',
    MAIN_COURSES: 'https://example.com/path/to/main-course-image.jpg',
    SEASONAL: 'https://example.com/path/to/seasonal-image.jpg',
  },
  PRODUCTS: {
    COOKBOOK: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    FOCACCIA: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=800',
    KITCHENSET: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800',
    HERBS: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800',
    APRON: 'https://images.unsplash.com/photo-1581622558663-b2ce33ba42f3?w=800',
    OLIVEOIL: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800',
    PASTAMACHINE: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    SOURDOUGH: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800'
  }
};

// Helper functie om een recept afbeelding pad te krijgen
export const getRecipeImagePath = (recipeId) => {
  return `/images/recipes/${recipeId}.jpg`;
};

// Helper functie om een categorie afbeelding pad te krijgen
export const getCategoryImagePath = (categoryName) => {
  return `/images/categories/${categoryName.toLowerCase()}.jpg`;
};

// Fallback afbeelding voor als een afbeelding niet laadt
export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=400';

// Helper functie om te controleren of een afbeelding bestaat
export const checkImageExists = async (imagePath) => {
  try {
    const response = await fetch(imagePath);
    return response.ok;
  } catch {
    return false;
  }
};

// Component om afbeeldingen met fallback te tonen
export const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(FALLBACK_IMAGE);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash Access Key

export const fetchImage = async (query) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        query: query,
        client_id: UNSPLASH_ACCESS_KEY,
      },
    });
    return response.data.urls.small; // Return the small image URL
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return null; // Return null if there's an error
  }
}; 