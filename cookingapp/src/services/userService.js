import { db } from '../firebase';
import { ref, set, push } from 'firebase/database';

export const saveUserData = async ({ email, isNewsletter = false }) => {
  try {
    const newsletterRef = ref(db, 'subscribers/' + email.replace(/\./g, '-'));
    await set(newsletterRef, {
      email,
      subscribed_at: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error saving newsletter subscription:', error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const contactRef = ref(db, 'kaats_kitchen_contacts');
    const newContactRef = push(contactRef);
    await set(newContactRef, {
      ...formData,
      submitted_at: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const checkEmailExists = async (email) => {
  return false; // Tijdelijke mock implementatie
};

export const saveSubscriberEmail = async (email) => {
  try {
    const subscriberRef = ref(db, 'subscribers/' + email.replace(/\./g, '-'));
    await set(subscriberRef, {
      email: email,
      subscribedAt: new Date().toISOString(),
    });
    console.log('Subscriber email saved:', email);
  } catch (error) {
    console.error('Error saving subscriber email:', error);
    throw error;
  }
}; 