import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {

 let {setIsCartOpen} = useContext(MyShop);

  return (
    <div className='bg-black flex justify-between p-4 rounded-lg '>
      <div>Logo</div>
      <div className='flex gap-10 text-xl '>
        <p className='cursor-pointer'
            onClick={()=>setIsCartOpen(false)}>Home</p>
        <p className='cursor-pointer'
            onClick={()=>setIsCartOpen(true)}>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
