import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME, // Use the environment variable
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY, // Optional: Use if needed
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET, // Optional: Use if needed
  secure: true,
});

export default cloudinary; 