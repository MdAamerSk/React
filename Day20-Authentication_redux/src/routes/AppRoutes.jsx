import React from 'react'
import { RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Homepage from '../pages/Homepage'
import MainLayout from '../layouts/MainLayout'
import { createBrowserRouter } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const AppRoutes = () => {

    let dispatch = useDispatch();

  const hydrateUser = () => { // this is a hydration process that checks if there is a logged in user in localStorage and if so, it dispatches the addUser action to add the user to the redux store. This is done so that the user remains logged in even after a page refresh.
    console.log("hydration processed...");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);


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
