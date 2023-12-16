//context/AuthContext.js
"use client";
// Importing necessary modules from React and Firebase
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

// Creating a context for authentication
const AuthContext = createContext();

// Creating a provider component to manage authentication state
export const AuthContextProvider = ({ children }) => {
  // State to store the current user
  const [user, setUser] = useState(null);

  // Function to handle Google sign-in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch((error) => {
        // Handle popup closure or other errors
        if (error.code === "auth/cancelled-popup-request") {
          // Handle the case where the user closed the popup
          console.log("Popup closed by the user");
        } else {
          // Handle other authentication errors
          console.error("Authentication error:", error.message);
        }
      });
  };

  // Function to handle log out
  const logOut = () => {
    signOut(auth);
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    // Subscribe to the auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the user state when the authentication state changes
      setUser(currentUser);
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []); // Remove user from the dependency array to avoid unnecessary re-renders

  // Providing the authentication context to the component tree
  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context in components
export const UserAuth = () => {
  return useContext(AuthContext);
};