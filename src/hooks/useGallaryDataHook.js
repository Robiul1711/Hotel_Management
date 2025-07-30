import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGallaryDataHook = () => {
    const axiosPublic = useAxiosPublic();
    const { data: gallary = [], isLoading, error, refetch } = useQuery({
        queryKey: ['gallary'],
        queryFn: async () => {
            const response = await axiosPublic.get('/gallery');
            return response?.data?.data;
        }
    });

    return { gallary, isLoading, error, refetch };
};

export default useGallaryDataHook;