// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbH8oDO_wzwElqnnvO3ZYCeUIgxwcC1WU",
  authDomain: "luovo-cee8e.firebaseapp.com",
  projectId: "luovo-cee8e",
  storageBucket: "luovo-cee8e.appspot.com",
  messagingSenderId: "557313076303",
  appId: "1:557313076303:web:1b7d0553203edd71870e3a",
  measurementId: "G-REYFNYJV8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);