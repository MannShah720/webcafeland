// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_zZGR_AS-piJxkszO5bOnun0STh2ejNc",
  authDomain: "webcafelanding-f7777.firebaseapp.com",
  projectId: "webcafelanding-f7777",
  storageBucket: "webcafelanding-f7777.firebasestorage.app",
  messagingSenderId: "63957528552",
  appId: "1:63957528552:web:9d6e12a5d269e96d7d7e5d",
  measurementId: "G-TWTR5XPXGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)