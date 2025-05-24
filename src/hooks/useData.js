import { DataContext } from '@/context';
import React, { useContext } from 'react';

const useData = () => {
    return useContext(DataContext);
};

export default useData;