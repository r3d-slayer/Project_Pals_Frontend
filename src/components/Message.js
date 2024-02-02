import React from 'react'
import './style/Message.css'

const Message = ({message}) => {
    const words = message.split(' ');
    const slicedMessage = words.slice(0, 10).join(' ');
    const remainingWords = words.slice(10).join(' ');
  return (<>
    <div className='message-box left'>
      {/* {message} */}
      <div>{slicedMessage}</div>
      {remainingWords && <div>{remainingWords}</div>}
    </div>
    <div className='message-box right'>
      {/* {message} */}

      <div>{slicedMessage}</div>
      {remainingWords && <div>{remainingWords}</div>}
    </div>

  </>
  )
}

export default Message
