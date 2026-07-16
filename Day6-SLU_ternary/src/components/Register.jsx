import React from 'react'

const Register = ({setToggle, setUsers}) => {

const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    image: ''
})


const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setUsers(prev => [...prev, formData])//set the users state in App.jsx with the new user data
    setFormData({
        name: '',
        email: '',
        password: '',
        image: ''
    })
}
    return (
        <div className="bg-yellow-400 w-90 p-6 rounded-xl flex flex-col gap-4">
            <h1>Register</h1>
            <form action=""
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    required
                    type="text"
                    value={formData.name}//bind the value of the input to the state
                    placeholder="Username"
                    name="name"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2"
                />
                <input
                    required
                    type="email"
                    value={formData.email}//bind the value of the input to the state
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2"
                />
            
                <input
                    required
                    type="password"
                    value={formData.password}//bind the value of the input to the state
                    placeholder="Password"
                    name="password"
                    onChange={handleChange} 
                    className="border border-gray-300 rounded-md p-2 mb-2"
                />

                <input
                    required
                    type="url"
                    value={formData.image}//bind the value of the input to the state    
                    placeholder="Profile Image URL"
                    name="image"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 mb-2"
               />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Register
                </button>
                <p>
                    Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setToggle((prev) => !prev)}>Login here</span>
                </p>
            </form>
        </div>
    )
}

export default Register
