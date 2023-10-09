/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] =useState()
    const googleSignIn = (value) => {
        return signInWithPopup(auth, googleProvider);
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser);
        });
            return(()=>{
                return unsubscribe();
            })
    }, []);

    const logout =()=>{
        return signOut(auth);
    }

    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        logout,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;