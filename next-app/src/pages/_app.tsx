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

// auth
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '@/context/ProtectedRoutes';
import ProtectedRouteLoggedIn from '@/context/ProtectedRouteLoggedIn';

// component
import SignIn from '@/components/SignIn';


export default function App({ Component, pageProps, ...appProps }: AppProps) {

    if ([`/login`].includes(appProps.router.pathname)) {
        return (
            <AuthContextProvider>
                    <h1>VUZF Students CSD</h1>
                    <SignIn/>
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
