import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'
import NestedAbout from '../pages/NestedAbout'
import { Routes, Route } from 'react-router'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="detail" element={<Detail />} />
                </Route>
                <Route path="/about" element={<About />} >
                    <Route path="nested" element={<NestedAbout />} />
                </Route>
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </div>
    )
}

export default AppRoutes
