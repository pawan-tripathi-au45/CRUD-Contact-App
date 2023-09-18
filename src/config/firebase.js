// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLAmS0Zwwph_YXyo2xJvF-68U1vdYKNJE",
  authDomain: "vite-contact-2a6db.firebaseapp.com",
  projectId: "vite-contact-2a6db",
  storageBucket: "vite-contact-2a6db.appspot.com",
  messagingSenderId: "419817342848",
  appId: "1:419817342848:web:c818f241b1bf9104ff6365",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
