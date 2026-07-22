import { createContext,useState } from "react";

//consumer
export let MyStore =createContext();

//provider

export let ContextProvider = ({children})=>{

     const [isCartOpen,setIsCartOpen] = useState(true)
      const [cartItems,setCartItems] = useState([]);

    return <MyStore.Provider value={{isCartOpen,setIsCartOpen,cartItems,setCartItems}}>{children}</MyStore.Provider>
}