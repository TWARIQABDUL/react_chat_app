import React from 'react'
import {Link} from 'react-router-dom'
function Message({ msg }) {

  return (
    <div className='friend msgs'>

      <img src={msg.img} alt='profile' className='mesagepic' />
      <Link to='/message'>
      <div className='info'>
        <p>{msg.name}</p>
        <p>{msg.msgBody}</p>
      </div>
      </Link>
    </div>
  )
}

export default Message