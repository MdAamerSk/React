import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import HomePage from "../pages/HomePage";
import ProductPage from '../pages/ProductPage';
import UsersPage from '../pages/UsersPage';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {

  let router = createBrowserRouter([
    {
      path:"/",
      element:<PublicRoute/>,
      children:[{
        path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />
        },
        {
          path: "register",
          element: <RegisterPage />
        }
      ]
    }]
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
              path:"",
              element: <HomePage/>
            },
            {
              path:"users",
              element: <UsersPage/>
            },
            {
              path:"products",
              element: <ProductPage/>
            }
          ]
        }
      ]
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default AppRoutes
