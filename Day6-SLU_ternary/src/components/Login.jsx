import React from 'react'

const Login = ({setToggle}) => {
    return (
        <div className="bg-yellow-400 w-90 p-6 rounded-xl flex flex-col gap-4">
            <h1>Login</h1>
            <form action=""
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2 mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-md p-2 mb-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Login
                </button>
                <p>
                    Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setToggle((prev) => !prev)}>Register here</span>
                </p>
            </form>
        </div>
    )
}

export default Login
