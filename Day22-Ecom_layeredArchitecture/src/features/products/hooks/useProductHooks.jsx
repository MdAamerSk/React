import { useQuery } from "@tanstack/react-query"
import { getAllProductApi,getProductsCategories } from "../api/productApis"

//tanstackQuery

export const useAllProduct = () => {
    
    let {data,isPending,errors} = useQuery({
        queryKey : ["products"],
        queryFn : getAllProductApi,
    })

console.log("proucts data", data)

    return {
        data,
        isPending,
        errors,
    }
}

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductsCategories,
  });
};