import React from 'react'
import './style/Messanger.css'
import Messagecomp from './Messagecomp'


const Messanger = () => {
  return (
    <div className='chats'>
        <div className="messanger-main-container">
        <div className="messanger-heading">
        <div className="circle"></div>
       <h3>Messages</h3>
        </div>
      <div className="messanger-container">
        <Messagecomp/>
      </div>
      </div>
    </div>
  )
}

export default Messanger
