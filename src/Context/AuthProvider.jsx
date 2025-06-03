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
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  //User create Email and password
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User SignIn with Email and password
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign in with Google
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Update user Profile
  const UserUpdateProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // OnState change
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axios
          .post("http://localhost:5000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("after the send token", res.data);
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unSubscriber();
  }, []);

  //Sign Out
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    setLoading,
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
