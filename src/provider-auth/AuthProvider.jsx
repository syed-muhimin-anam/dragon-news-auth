import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true);
     return   createUserWithEmailAndPassword(auth, email, password);
     
    } 

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = ( updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    

    const userInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn,
        loading,
        updateUserProfile
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;