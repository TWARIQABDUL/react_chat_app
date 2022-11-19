import React,{useEffect, useState} from 'react'
import Friend from '../components/friend'

function GetFriend() {
    const url = 'http://192.168.1.66/resources/img/1.jpg'
    const [usersList,setUserList] = useState([]);
    useEffect(()=>{
        fetch("http://192.168.1.68/resources/users/freinds/")
        .then(res=>res.json())
        .then(friend=>setUserList(friend))
        console.log(usersList);
    },[])
   
    const friends = [
        {
            id: 1,
            name: 'John doe',
            img: url
        },
        {
            id: 2,
            name: 'Cayrl meggan',
            img: url
        },
        {
            id: 3,
            name: 'Jack blue hallow',
            img: url
        },
        {
            id: 4,
            name: 'Nicolas jack',
            img: url
        },
        {
            id: 5,
            name: 'Jack blue hallow',
            img: url
        }
    ]
    // const friendList = friends.map(friend => <Friend key={friend.id} friend={friend} />)
    return (
        <div>
            {usersList.map(friend => <Friend key={friend.userId} friend={friend} />)}
        </div>
    )
}

export default GetFriend