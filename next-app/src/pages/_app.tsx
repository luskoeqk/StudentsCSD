// next
import type { AppProps } from 'next/app'

// styles
import '../styles/styles.css';
import Header from '@/components/navigation/header';
import Sidebar from '@/components/navigation/sidebar';

// react
import React from 'react';

// auth
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '@/context/ProtectedRoutes';

// component
import SignIn from '@/components/SignIn';


export default function App({ Component, pageProps, ...appProps }: AppProps) {

    if ([`/login`].includes(appProps.router.pathname)) {
        return (
            <AuthContextProvider>
                <h1>VUZF Students CSD</h1>
                <SignIn />
            </AuthContextProvider>
        )
    }


    return (
        <AuthContextProvider>
            <ProtectedRoute>
                <Header />
                <Sidebar />
                <Component {...pageProps} />
            </ProtectedRoute>
        </AuthContextProvider>
    )
}
