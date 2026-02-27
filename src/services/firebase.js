import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // optional if using database

const firebaseConfig = {
  apiKey: "AIzaSyBVSxKewW8wjB3gv1uJw6RcTfypmEnBRTs",
  authDomain: "expense-tracker-3672b.firebaseapp.com",
  projectId: "expense-tracker-3672b",
  storageBucket: "expense-tracker-3672b.firebasestorage.app",
  messagingSenderId: "661555782204",
  appId: "1:661555782204:web:e3b203da352377d9901939",
  measurementId: "G-FK7Z5LQHER",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // optional for later