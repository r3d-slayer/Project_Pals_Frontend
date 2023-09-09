import React, { useState } from 'react'
import './style/Signup.css'
import Form from './Form'
import realimage from './style/image.png'
import Otp from './Otp'


const Signup = () => {

  // const [show,setshow] = useState(false)

  // const Show=(props)=>{

  const [show,setshow] = useState(true)

  const toggled = () =>{
    setshow(!show);
  }

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
        {show?<Form onSubmit={toggled}/>:<Otp onSubmit={toggled}/>}
    
        </div>

      </div>
    </div>
  )
}

export default Signup
