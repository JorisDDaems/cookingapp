import { db } from '../firebase';
import { ref, get, set, push, child } from 'firebase/database';

// Functie om alle recepten op te halen
export const getAllRecipes = async () => {
  try {
    const recipesRef = ref(db, 'recepten');
    const snapshot = await get(recipesRef);
    
    if (snapshot.exists()) {
      const recipes = [];
      snapshot.forEach((childSnapshot) => {
        recipes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      console.log('Retrieved recipes:', recipes);
      return recipes;
    }
    console.log('No recipes found in database');
    return [];
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

// Functie om een recept toe te voegen
export const addRecipe = async (recipe) => {
  try {
    const recipesRef = ref(db, 'recepten');
    const newRecipeRef = push(recipesRef);
    await set(newRecipeRef, recipe);
    return newRecipeRef.key;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};

export const addTestRecipe = async () => {
  try {
    const recipesRef = ref(db, 'recepten');
    const testRecipe = {
      title: "Test Recept",
      description: "Dit is een test recept",
      readyInMinutes: 30,
      image: "https://via.placeholder.com/300"
    };
    
    await set(child(recipesRef, 'test-recipe'), testRecipe);
    console.log('Test recipe added successfully');
  } catch (error) {
    console.error('Error adding test recipe:', error);
  }
};

export const getRecipeById = async (id) => {
  const recipeRef = ref(db, `recepten/${id}`);
  const snapshot = await get(recipeRef);
  
  if (!snapshot.exists()) {
    throw new Error('Recept niet gevonden');
  }
  
  return {
    id: snapshot.key,
    ...snapshot.val()
  };
};