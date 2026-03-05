import { useGetProfileQuery } from "../redux/services/profileApis"



export const useRole = () => {
    const { data, isLoading } = useGetProfileQuery();

    const role = data?.data?.user?.role;
    return { role, isLoading };
};
