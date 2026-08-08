import React from 'react'
import { RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Homepage from '../pages/Homepage'
import MainLayout from '../layouts/MainLayout'
import { createBrowserRouter } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'


const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                {
                    path: '',
                    element: <LoginPage />
                },
                {
                    path: 'register',
                    element: <RegisterPage />
                }
            ]
        },
        {
            path: '/main',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <Homepage />
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes
