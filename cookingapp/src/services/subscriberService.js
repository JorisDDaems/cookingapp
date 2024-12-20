import { db } from '../firebase';
import { ref, push, set } from 'firebase/database';

// Functie om een nieuwe subscriber toe te voegen
export const addSubscriber = async (email) => {
  try {
    const subscribersRef = ref(db, 'subscribers');
    const newSubscriberRef = push(subscribersRef);
    await set(newSubscriberRef, {
      email,
      subscribeDate: new Date().toISOString()
    });
    return newSubscriberRef.key;
  } catch (error) {
    console.error('Error adding subscriber:', error);
    throw error;
  }
}; 