import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const About = () => {

    let data = useContext(MyStore);
    console.log(data);

    console.log("About rendering...")
  return (
    <div>
      <h1>about</h1>
    </div>
  )
}

export default About
