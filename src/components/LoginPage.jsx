/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const LoginPage = () => {
  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "YOUR_FIREBASE_API_KEY",
      authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
      projectId: "YOUR_FIREBASE_PROJECT_ID",
      storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
      messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
      appId: "YOUR_FIREBASE_APP_ID",
    };

    firebase.initializeApp(firebaseConfig);
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      console.log("Logged in user:", user);
      // You can redirect or handle the logged-in user as needed.
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
