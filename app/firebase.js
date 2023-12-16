// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN_fSLMVqknmzXpfIMCB2Kk5b5fuDQVS8",
  authDomain: "auth-c7ad4.firebaseapp.com",
  projectId: "auth-c7ad4",
  storageBucket: "auth-c7ad4.appspot.com",
  messagingSenderId: "485799810397",
  appId: "1:485799810397:web:7e3b4c13b4bb8f97b984b4",
  measurementId: "G-2B04767CZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
