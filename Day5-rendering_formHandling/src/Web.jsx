import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'
import { useState } from 'react'

const Web = () => {

   const [formData, setFormData] = useState({});

    const handleChange =(e) => {
        let { name, value } = e.target;
        setFormData({...formData, [name]: value})
    };

    return (
        <div className=" flex flex-col gap-5">

            <input
                className="border-2 border-black"
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
            />
            <input
                className="border-2 border-black"
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
            />
            <input
                className="border-2 border-black"
                type="text"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
            />

            <h1 className="text-2xl font-bold">Hello, {formData.name}</h1>
            <h1 className="text-2xl font-bold">Your email is: {formData.email}</h1>
            <h1 className="text-2xl font-bold">Your password is: {formData.password}</h1>

        </div>
    )
}

export default Web
