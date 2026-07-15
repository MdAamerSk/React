import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'
import { useState } from 'react'

const Web = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className=" flex flex-col gap-5">
            
            <input
                className="border-2 border-black"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="border-2 border-black"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <input
                className="border-2 border-black"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />

            <h1 className="text-2xl font-bold">Hello, {name}</h1>
            <h1 className="text-2xl font-bold">Your email is: {email}</h1>
            <h1 className="text-2xl font-bold">Your password is: {password}</h1>

        </div>
    )
}

export default Web
