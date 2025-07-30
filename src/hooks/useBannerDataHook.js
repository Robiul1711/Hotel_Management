import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useBannerData = () => {
    const axiosPublic = useAxiosPublic();

    const {
        data: banners = [],
        isLoading,
        error,
        refetch
    } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const response = await axiosPublic.get('/banners');
            return response?.data?.data;
        }
    });

    return { banners, isLoading, error, refetch };
};

export default useBannerData;
