import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCards';
import CartScreen from './pages/CartScreen';
const App = () => {

  const [productsData, setProductsData] = useState([])
  const [isCartOpen,setIsCartOpen] = useState(true)
  const [cartItems,setCartItems] = useState([]);
  console.log(cartItems)
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
    <div className='h-screen p-2 text-white flex flex-col gap-4'>
      <Navbar setIsCartOpen={setIsCartOpen} />

    {
      isCartOpen ?
       <div className='grid grid-cols-4 gap-4'>
        {
          productsData.map((elem)=>{
            return <ProductCards key={elem.id} product={elem} setCartItems={setCartItems} />})
        }
      </div>
      :
      <div className=''>
       <CartScreen cartItems={cartItems} />
      </div>
 
    }

     

      

    </div>
  )
}

export default App
