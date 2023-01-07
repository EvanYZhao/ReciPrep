// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9OmGYB5dGWmo2y9nJKFIGRh30T_tvLqE",
  authDomain: "recipal-fdce6.firebaseapp.com",
  projectId: "recipal-fdce6",
  storageBucket: "recipal-fdce6.appspot.com",
  messagingSenderId: "374074873622",
  appId: "1:374074873622:web:9a46fedcc2652801cda237",
  measurementId: "G-NW0RM02KJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);