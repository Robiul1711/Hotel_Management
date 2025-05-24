import { DataContext } from '@/context';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useState } from 'react';

const DataProvider = ({ children }) => {
    const [user, setUserState] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    })

    const villaData = 'all villa data';

    const setUser = (newUser)=>{
        if(newUser){
            localStorage.setItem('user', JSON.stringify(newUser));
        }else{
            localStorage.removeItem('user');
        }
        setUserState(newUser);
    };




    return (
        <DataContext.Provider value={{ user, setUser, villaData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;