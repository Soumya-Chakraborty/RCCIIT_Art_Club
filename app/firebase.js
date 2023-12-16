// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5igE4aM3CguUKOperDmqRZRSAEDVfZs",
  authDomain: "auth-eab34.firebaseapp.com",
  projectId: "auth-eab34",
  storageBucket: "auth-eab34.appspot.com",
  messagingSenderId: "689652646716",
  appId: "1:689652646716:web:d7c7d944218b58e0169439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
