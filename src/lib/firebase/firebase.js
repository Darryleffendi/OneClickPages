// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRfCcLA-8aIVi6UL4xK1y9js8ZyCMePk",
  authDomain: "one-click-pages.firebaseapp.com",
  projectId: "one-click-pages",
  storageBucket: "one-click-pages.appspot.com",
  messagingSenderId: "357201100420",
  appId: "1:357201100420:web:a6d3a7c914510d1f2a0cd1",
  measurementId: "G-DDJXE59C8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);