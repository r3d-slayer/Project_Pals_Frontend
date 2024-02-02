import React from 'react'
import './style/Chatapp.css'
import Messanger from './Messanger'
import Chats from './Chats'

const Chatapp = () => {
  return (
    <div className='chats'>
      <div className="chat-container">
        <Messanger/>
        <Chats/>
      </div>
    </div>
  )
}

export default Chatapp
