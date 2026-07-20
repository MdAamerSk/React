import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product,setCartItems }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image */}
      <div className="relative h-64 bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Category */}
        <span className="inline-block text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-medium text-gray-700">
              {product.rating.rate}
            </span>

            <span className="text-gray-400 text-sm">
              ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-900">
            ${product.price}
          </p>
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          onClick={()=>setCartItems((prev)=>[...prev,product])}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;