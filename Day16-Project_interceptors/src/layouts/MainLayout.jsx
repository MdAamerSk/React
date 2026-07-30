import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const MainLayout = () => {
  const { loggedInUser, setLoggedInUser } = useContext(Auth)
  const navigate = useNavigate()

  const handleLogout = () => {
    setLoggedInUser(null)
    localStorage.removeItem('loggedinUser')
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard 🚀</h1>
        <p className="text-gray-600 mb-6">
          Welcome back, <span className="font-semibold text-blue-600">{loggedInUser?.name || 'User'}</span>!
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default MainLayout
