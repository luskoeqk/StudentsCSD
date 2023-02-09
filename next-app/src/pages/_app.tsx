// next
import type { AppProps } from 'next/app'

// styles
import '../styles/styles.css';
import Header from '@/components/navigation/header';
import Sidebar from '@/components/navigation/sidebar';

// firebase
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

// react
import React, { useState, useEffect } from 'react';
import Router, { withRouter } from 'next/router';


interface IAuth {
    router: any;
    user: any;
};

const Auth = ({ router, user }: IAuth) => {

    const [isAuthenticated, setIsAuthenticated] = useState(user ? true : false);

    useEffect(() => {
        if (!isAuthenticated && router.pathname !== '/login') {
            router.push('/login');
        }
    }, [isAuthenticated, router.pathname]);

    return <React.Fragment />;
};


const AuthWithRouter = withRouter(Auth);


export default function App({ Component, pageProps, ...appProps }: AppProps) {

    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const checkUser = async () => {

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }
            });

        };

        checkUser();
    }, []);


    if ([`/login`].includes(appProps.router.pathname)) {
        return (
            <>
                <h1>VUZF Students CSD</h1>
                <Component {...pageProps} />
            </>
        )
    }


    return (
        <div>
            <AuthWithRouter user={user}/>
            <Header />
            <Sidebar />
            <Component {...pageProps} />
        </div>
    )
}
