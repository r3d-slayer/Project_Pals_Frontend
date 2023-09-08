import React from 'react'
import './style/Signup.css'
import Form from './Form'
import realimage from './style/image.png'

const Signup = () => {

  return (
    <div className='big-container'>
      <div className="container">
        
        <div className="secondcont">
          <ul>
            <li>
            <p>Uniting Dreams,</p>
            </li>
            <li>
            <p>Defining Success!!</p>
            </li>
            <img src={realimage} alt="A 3D Art" />
          </ul>
        </div>
        <div className="content">
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default Signup
