import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'
import { useState } from 'react'

const Web = () => {

   const [formData, setFormData] = useState({});

    return (
        <div className=" flex flex-col gap-5">

            <input
                className="border-2 border-black"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
                className="border-2 border-black"
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
                className="border-2 border-black"
                type="text"
                placeholder="Enter your password"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />

            <h1 className="text-2xl font-bold">Hello, {formData.name}</h1>
            <h1 className="text-2xl font-bold">Your email is: {formData.email}</h1>
            <h1 className="text-2xl font-bold">Your password is: {formData.password}</h1>

        </div>
    )
}

export default Web
