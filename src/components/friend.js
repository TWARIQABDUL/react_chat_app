import React, { useContext } from 'react'

function Friend({ friend }) {
    // const tst = useContext(Session)
  const urls = "http://192.168.1.68/resources/img/";

    return (
        <div className='friend'>
            <img src={urls+friend.images} alt='hello'/>
            <div className='info'>
                <p>{friend.name}</p>
                <div className='button'>
                    <button className='btn accept'>confirm</button>
                    <button className='btn'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Friend