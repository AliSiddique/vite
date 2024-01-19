// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7tV7B02gDHwcrOhuEbTdIVjWZpb3OHEw",
  authDomain: "react-firebase-starter-b5178.firebaseapp.com",
  projectId: "react-firebase-starter-b5178",
  storageBucket: "react-firebase-starter-b5178.appspot.com",
  messagingSenderId: "955996516708",
  appId: "1:955996516708:web:a4e25db080f6bbddc7ca71",
  measurementId: "G-8NPMNFD2E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);