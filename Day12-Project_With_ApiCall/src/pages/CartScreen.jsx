import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);

  return (
    <div className="h-[95%] gap-4 text-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;