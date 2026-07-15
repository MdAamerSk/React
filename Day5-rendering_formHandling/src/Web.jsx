import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'

const Web = () => {
    let arr = [1, 3, 5, 6, 4, 2, 3, 8, 9, 5, 7, 8, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className=' bg-gray-200'>
            <h1>Web Page</h1>

            {
                arr.map((item,index) => {
                    return <Card key={index} />
                })
            }
        </div>
    )
}

export default Web
