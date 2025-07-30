import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMealPackageHook = () => {
    const axiosPublic = useAxiosPublic();

    const { data: mealPackages = [], isLoading, error, refetch } = useQuery({
        queryKey: ['mealPackages'],
        queryFn: async () => {
            const response = await axiosPublic.get('/meals');
            return response?.data?.data;
        }
    });

    return { mealPackages, isLoading, error, refetch };
}

export default useMealPackageHook;