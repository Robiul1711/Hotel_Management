import { AuthContext } from '@/context';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [user, setUserState] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    })

    const setUser = (newUser)=>{
        if(newUser){
            localStorage.setItem('user', JSON.stringify(newUser));
        }else{
            localStorage.removeItem('user');
        }
        setUserState(newUser);
    };




    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;