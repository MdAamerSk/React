import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import ProductDetail from '../pages/ProductDetail'
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
                <Route path='/products' element={<Products />}></Route>
                <Route path='/detail/:id' element={<ProductDetail />}></Route> // dynamic routing
            </Routes>
        </div>
    )
}

export default AppRoutes
