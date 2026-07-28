import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AuthLayout from '../layouts/AuthLayout';

const AppRoutes = () => {

let router = createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:"",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<RegisterPage/>
            }
        ]
    }
])

  return <RouterProvider router={router} />;
}

export default AppRoutes
