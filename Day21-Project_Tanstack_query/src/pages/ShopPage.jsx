import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
//import { useProduct, useProductApi } from "../hooks/productHooks";
//import Filters from "../components/Filters";
//import { getProductsDataApi } from "../api/productApi";

const ShopPage = () => {
 const [productsData, setProductsData] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

  let getProductsData = async () => {
     try {
         let res = await fetch("https://dummyjson.com/products");
         let data = await res.json(); // Parse the response as JSON
         console.log(data.products);
         setProductsData(data.products); // Update state to trigger render
     } catch (error) {
         console.log("error in product data fetching", error);
     } finally {
         setIsLoading(false);
     }
  }

    useEffect(() => {
        getProductsData();
    }, []);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : productsData?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;