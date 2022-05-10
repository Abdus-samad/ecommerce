import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, provider } from "./firebaseClient";
import {
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const getUser = () => {
    onIdTokenChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setloading(false);
        return;
      }
      const token = await currentUser.getIdToken();
      setUser(currentUser);
      setloading(false);
      console.log(token);
    });
  };

  const signWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const Logout = () => {
    signOut(auth);
  };

  console.log("user", user);
  return (
    <authContext.Provider value={{ user, signWithGoogle, Logout, getUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
