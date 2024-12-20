export const checkEmailExists = async (email) => {
  // Simuleer een API vertraging
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simuleer een database check (in productie zou dit een echte API call zijn)
  const existingEmails = [
    'test@test.com',
    'gebruiker@example.com',
    'admin@kookapp.nl'
  ];
  
  return existingEmails.includes(email.toLowerCase());
};

// Mock functies voor later gebruik
export const registerUser = async () => {
  throw new Error('Nog niet geïmplementeerd');
};

export const loginUser = async () => {
  throw new Error('Nog niet geïmplementeerd');
};

export const logoutUser = async () => {
  throw new Error('Nog niet geïmplementeerd');
};

export const onAuthStateChange = () => {
  throw new Error('Nog niet geïmplementeerd');
}; 