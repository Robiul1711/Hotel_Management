import { AuthContext } from '@/context';
import React, { useContext } from 'react';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;