import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useHomeCardHook = () => {
    const axiosPublic = useAxiosPublic();
    const { data: cardData = [], isLoading, error, refetch } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            const response = await axiosPublic.get('/home-cards');
            return response?.data?.data;
        }
    });
    return { cardData, isLoading, error, refetch };
}

export default useHomeCardHook;