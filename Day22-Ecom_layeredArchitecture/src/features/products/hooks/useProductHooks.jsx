import { useQuery } from "@tanstack/react-query"
import { getAllProductApi,
  getProductByCategory,
  getProductsCategories, } from "../api/productApis"
import { useState,useEffect } from "react"

//tanstackQuery

export const useAllProduct = () => {

    let [search,setSearch] = useState(null);
   const [debounceSearch,setDebounceSearch] = useState(null)

   useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);
    
    let {data,isPending,errors} = useQuery({
        queryKey : ["products",debounceSearch],
        queryFn : () => getAllProductApi(debounceSearch),
    })

console.log("proucts data", data)


    return {
        data,
        isPending,
        errors,
        search,
        setSearch,
    }
}

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductsCategories,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);

  console.log("ye category hai->", category);

  let { data } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductByCategory(category),
  });

  return {
    data,
    category,
    setCategory,
  };
};