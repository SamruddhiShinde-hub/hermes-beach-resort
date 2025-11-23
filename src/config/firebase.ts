import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
// Replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDPaOQYHeRS5mR-IEMsEy6n4xh9LCY_xHw",
  authDomain: "hermes-resort-web.firebaseapp.com",
  projectId: "hermes-resort-web",
  storageBucket: "hermes-resort-web.firebasestorage.app",
  messagingSenderId: "1097408166970",
  appId: "1:1097408166970:web:c11a4d07f5bd5c399e0903"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
