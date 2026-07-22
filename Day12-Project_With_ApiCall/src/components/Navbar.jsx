import React, { useContext } from 'react';
import { MyStore } from '../context/MyContext';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  let { setIsCartOpen, cartItems } = useContext(MyStore);
  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);

  return (
    <div className='bg-black text-white flex justify-between items-center px-6 py-4 rounded-2xl shadow-md'>
      <div 
        className='text-2xl font-black tracking-wider flex items-center gap-2 cursor-pointer hover:opacity-90 transition'
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingBag className="text-yellow-400 h-6 w-6" />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">E-SHOP</span>
      </div>
      
      <div className='flex items-center gap-8 text-base font-medium'>
        <p 
          className='cursor-pointer hover:text-yellow-400 transition-colors duration-200'
          onClick={() => setIsCartOpen(true)}
        >
          Home
        </p>
        
        <div 
          className='relative cursor-pointer hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1.5'
          onClick={() => setIsCartOpen(false)}
        >
          <ShoppingCart size={18} />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className='absolute -top-3 -right-4 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-black animate-pulse'>
              {totalItems}
            </span>
          )}
        </div>
      </div>
      
      <button className='bg-white text-black font-semibold px-5 py-2 rounded-xl hover:bg-gray-100 transition active:scale-95 cursor-pointer text-sm'>
        Login
      </button>
    </div>
  );
};

export default Navbar;
