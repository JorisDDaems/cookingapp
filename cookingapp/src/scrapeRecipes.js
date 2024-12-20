const axios = require('axios');
const cheerio = require('cheerio');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Firebase configuratie
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// URL van de website met recepten
const url = 'https://dagelijksekost.vrt.be/az-index';

const scrapeRecipes = async () => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });
    
    const $ = cheerio.load(data);
    
    // Selecteer de recepten
    const recipes = [];
    
    // Gebruik de juiste selector voor de recepten
    $('a.page_recipe-link__ioivv').each((index, element) => {
      const title = $(element).text().trim();
      const link = $(element).attr('href');
      const fullLink = `https://dagelijksekost.vrt.be${link}`; // Volledige URL

      if (title && link) {
        recipes.push({ title, link: fullLink });
      }
    });

    console.log('Gevonden recepten:', recipes); // Log de gevonden recepten

    // Voeg recepten toe aan de Firebase-database
    for (const recipe of recipes) {
      if (recipe.title && recipe.link) { // Controleer of de waarden geldig zijn
        await addDoc(collection(db, 'recepten'), {
          title: recipe.title,
          link: recipe.link,
          // Voeg hier andere velden toe zoals afbeelding, beschrijving, etc.
        });
        console.log(`Recept toegevoegd: ${recipe.title}`);
        console.log('Opslaan in Firestore:', {
          title: recipe.title,
          link: recipe.link,
        });
      } else {
        console.error('Ongeldige gegevens voor recept:', recipe);
      }
    }
    
    console.log('Alle recepten zijn toegevoegd!');
  } catch (error) {
    console.error('Fout bij het scrapen van recepten:', error);
  }
};

scrapeRecipes();