import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div>
       <nav className='flex items-center justify-between mb-4 bg-fuchsia-300'>
        <h1>Logo</h1>
        <div className='flex items-center gap-10 justify-between'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
