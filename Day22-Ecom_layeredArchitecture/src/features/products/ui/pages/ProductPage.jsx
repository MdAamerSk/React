import React from 'react'
import { useAllProduct,useProductByCategory } from '../../hooks/useProductHooks'
import ProductCard from '../components/ProductCard';
import Filter from "../components/Filter";

const ProductPage = () => {

  let { data, isPending, errors, search, setSearch } = useAllProduct();

  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Loding Products</h1>

  return (
    <div className="container mx-auto px-4 py-6">
      <Filter category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          productByCategory?.products.length 
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  )
}

export default ProductPage
