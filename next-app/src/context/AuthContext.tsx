// react
import { createContext, useContext, useEffect, useState } from "react";

// fierbase
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";


interface IAuthContext {

    user: Object;
    logIn: () => void;
    logOut: () => void;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('useeer', user?.email);
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [])

    const logIn = () => {

        return console.log('login');
    }

    const logOut = async () => {
        console.log('logOut');
        setUser(null);
        await signOut(auth);
    };


    const state: IAuthContext = {
        user,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={state}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}


export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
}