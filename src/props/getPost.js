import React, { useState, useEffect } from 'react'
import Post from '../components/post'
function GetPost() {
  const [userLi, setPost] = useState([]);
  useEffect(()=>{
    fetch("http://192.168.1.69/resources/users/index.php")
    .then(res=>res.json())
    .then(resData=>setPost(resData))
  },[])
  return (
    <div>{
      userLi.map(u=><Post key={u.ID} post={u} />)
    }</div>
  )
}

export default GetPost