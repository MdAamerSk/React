import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCards';
import CartScreen from './pages/CartScreen';
import { MyStore } from './context/MyContext';
const App = () => {

let {isCartOpen,cartItems} = useContext(MyStore)

  const [productsData, setProductsData] = useState([])
 
 // console.log(cartItems)
 // console.log(productsData)
  const getProductsData = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      setProductsData(res.data)
      //  console.log(res);
    }
    catch (error) {
      console.log("error in api ", error);
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])


  return (
    <div className='min-h-screen bg-gray-50 text-gray-900 flex flex-col gap-6 p-4 md:p-8 max-w-7xl mx-auto w-full'>
      <Navbar />

      {isCartOpen ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);
            return (
              <ProductCards
                key={elem.id}
                product={elem}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      ) : (
        <div className='mt-4'>
          <CartScreen />
        </div>
      )}
    </div>
  );
};

export default App;
