// react
import { createContext, useContext, useEffect, useState } from "react";

// fierbase
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";


const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);


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

    const login = (email: any, password: any) => {
        return console.table(email, password)
        // return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        setUser(null);
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, login, logOut }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}