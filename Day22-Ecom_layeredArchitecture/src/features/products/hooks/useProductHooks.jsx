import { useQuery } from "@tanstack/react-query"
import { getAllProductApi } from "../api/productApis"

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