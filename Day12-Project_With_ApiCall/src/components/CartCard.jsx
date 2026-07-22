import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ product }) => {
  const { incrementQuantity, decrementQuantity, setCartItems } = useContext(MyStore);

  const handleRemove = () => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">
      {/* Product Image */}
      <div className="flex h-36 w-full items-center justify-center rounded-lg bg-gray-100 md:w-40">
        <img
          src={product.image}
          alt={product.title}
          className="h-28 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-blue-600 capitalize">
            {product.category}
          </p>

          <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          {/* Price */}
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          {/* Quantity */}
          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => decrementQuantity(product.id)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 shadow-sm transition hover:bg-gray-100 active:scale-95 cursor-pointer"
            >
              <Minus size={14} strokeWidth={2.5} />
            </button>

            <span className="w-10 text-center font-bold text-gray-800 tabular-nums">
              {product.quantity}
            </span>

            <button
              onClick={() => incrementQuantity(product.id)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white shadow-sm transition hover:bg-gray-800 active:scale-95 cursor-pointer"
            >
              <Plus size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={handleRemove}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 cursor-pointer active:scale-95"
          >
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;