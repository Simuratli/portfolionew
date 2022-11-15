// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsgMfi882UE3m75tlql-VGl0FEVSbXpLI",
  authDomain: "portfolio-c6e70.firebaseapp.com",
  projectId: "portfolio-c6e70",
  storageBucket: "portfolio-c6e70.appspot.com",
  messagingSenderId: "854311795691",
  appId: "1:854311795691:web:a44df2cc2b0a74881bb7ae",
  measurementId: "G-LC6FHJF2VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()

const db = getFirestore(app);
export { app, db };
const storage = getStorage(app);
export default storage;