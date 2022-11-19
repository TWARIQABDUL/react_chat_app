import React from 'react'
import {FiMoreHorizontal,FiSend} from 'react-icons/fi'
import {BsFillHeartFill} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import{Link} from 'react-router-dom'
function Post({post}) {
  const urls = "http://192.168.1.69/resources/img/";
  return (
    <div className='post'>
        <div className='top-user'>
            <Link to='/'>
            <img src={urls+post.img}/>
            <h1>{post.name}</h1>
            <p>{post.name}</p>
            </Link>
            <FiMoreHorizontal className='right icon'/>
        </div>
        <div className='media'>
            <img src={urls+post.img} className='post-img' />
        </div>
        <div className='bottom-user'>
            
            <div><BsFillHeartFill className='icon like'/>
            <span>100,3</span></div>

            <div><FaRegComment className='icon '/>
            <span>100,3</span>
            </div>
            <div><FiSend className='icon'/></div>
        </div>
    </div>
  )
}

export default Post