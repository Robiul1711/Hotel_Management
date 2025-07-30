import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAddOnHooks = () => {
    const axiosPublic = useAxiosPublic();
    const { data: addOnData = [], isLoading, error, refetch } = useQuery({
        queryKey: ['addOnData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addons');
            return res?.data?.addons;
        }
    });

    return { addOnData, isLoading, error, refetch };
}

export default useAddOnHooks;