import { createContext,useState } from "react";

//consumer
export let MyStore =createContext();

//provider

export let ContextProvider = ({children})=>{

     const [isCartOpen,setIsCartOpen] = useState(true)
      const [cartItems,setCartItems] = useState([]);

      const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: (val.quantity || 1) + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((val) => {
          return val.id === id ? { ...val, quantity: (val.quantity || 1) - 1 } : val;
        })
        .filter((val) => val.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </MyStore.Provider>
  );
}