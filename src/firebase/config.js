// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD89PAmDjfwcqxp_-A0oqTjSJPUDSt7qOE",
  authDomain: "ecommercereact-9ab7b.firebaseapp.com",
  projectId: "ecommercereact-9ab7b",
  storageBucket: "ecommercereact-9ab7b.appspot.com",
  messagingSenderId: "964211079931",
  appId: "1:964211079931:web:23c866693ac6d9ad750e5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
