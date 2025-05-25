import { DataContext } from '@/context';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const DataProvider = ({ children }) => {

  const axiosPublic = useAxiosPublic();



    const { data: villaData } = useQuery({
        queryKey: ['villaData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/villa/all')
            return res?.data?.allVillas;
        }
    })




    return (
        <DataContext.Provider value={{ villaData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;