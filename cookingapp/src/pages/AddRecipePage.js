import React, { useState } from 'react';
import { addRecipe } from '../services/recipeService';

const AddRecipePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      description,
      cookingTime: parseInt(cookingTime),
      difficulty,
      category,
      image: 'URL_TO_IMAGE' // Voeg hier de URL van de afbeelding toe
    };
    await addRecipe(newRecipe);
    // Reset de form
    setTitle('');
    setDescription('');
    setCookingTime('');
    setDifficulty('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titel" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Beschrijving" required />
      <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} placeholder="Kooktijd (minuten)" required />
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
        <option value="">Kies moeilijkheidsgraad</option>
        <option value="makkelijk">Makkelijk</option>
        <option value="gemiddeld">Gemiddeld</option>
        <option value="moeilijk">Moeilijk</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Kies categorie</option>
        <option value="voorgerecht">Voorgerecht</option>
        <option value="hoofdgerecht">Hoofdgerecht</option>
        <option value="dessert">Dessert</option>
      </select>
      <button type="submit">Voeg recept toe</button>
    </form>
  );
};

export default AddRecipePage; 