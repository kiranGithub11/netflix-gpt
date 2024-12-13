// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOzlQz8X0Gktf0j-fMTdeaGEN8OkFRNss",
  authDomain: "netflixgpt-be3da.firebaseapp.com",
  projectId: "netflixgpt-be3da",
  storageBucket: "netflixgpt-be3da.firebasestorage.app",
  messagingSenderId: "1085172054438",
  appId: "1:1085172054438:web:e636a96161e6382d9c7767",
  measurementId: "G-HSGBECY0XW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();