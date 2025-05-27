import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //User create Email and password
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User SignIn with Email and password
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign in with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  //Update user Profile
  const UserUpdateProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // OnState change
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      return () => unSubscriber();
    });
  },[]);

  //Sign Out
  const userSignOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    createUserWithEmail,
    signInWithEmail,
    signInWithGoogle,
    UserUpdateProfile,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
