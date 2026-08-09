import { getProductsDataApi } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";

export const useProductApi = () => {
     let {data,isPending,error} = useQuery({
      queryKey: ["products"],
      queryFn: getProductsDataApi,
      staleTime: 1000 * 60 * 5, // 5 minutes
    });
    return {data,isPending,error}
}