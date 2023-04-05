// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIXbNaj361z-PF-Hs3kL6F0BpFnShbmbM",
  authDomain: "react-js-155d4.firebaseapp.com",
  projectId: "react-js-155d4",
  storageBucket: "react-js-155d4.appspot.com",
  messagingSenderId: "223947821694",
  appId: "1:223947821694:web:09d9a9e5f296e89766fe2f",
  measurementId: "G-MG411R6NHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);