// AuthProvider.tsx
'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser } from '../lib/appWrite';


interface AuthContextType {
    isLoggedIn: boolean;
    isLoading: boolean;
    user: any;
    setUser: any
    setisLoggedIn: any;
    setisLoading: any
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [user, setUser] = useState<any>(null);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((res) => {
            if (res){
                setisLoggedIn(true)
                setUser(res)
            } else {
                setisLoggedIn(false)
                setUser(null)
            }
        }).catch((error) =>{
            console.log(error)
        }).finally(() =>{
            setisLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, isLoading, setUser, setisLoggedIn, setisLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
