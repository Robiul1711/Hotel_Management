import { AuthContext } from '@/context';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [allFilters, setAllFilters] = useState({});
    const [searchFunction, setSearchFunction] = useState(null);
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
        <AuthContext.Provider value={{ user, setUser, allFilters, setAllFilters, searchFunction, setSearchFunction }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;