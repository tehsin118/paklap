import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBC7xJM5Xxo3UbRICdjFCxZod-5I63PmUw",
  authDomain: "fir-auth-1132-31b74.firebaseapp.com",
  projectId: "fir-auth-1132-31b74",
  storageBucket: "fir-auth-1132-31b74.appspot.com",
  messagingSenderId: "686819912062",
  appId: "1:686819912062:web:09f50575c408e60138eb2f",
  measurementId: "G-9KLM3J3YMJ",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
