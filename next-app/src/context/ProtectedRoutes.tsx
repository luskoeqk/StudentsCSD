// next
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

// context
import { useAuth } from './AuthContext'


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [router, user]);


    return <>{user ? children : null}</>

};


export default ProtectedRoute;