import React, { useEffect, useRef, useId, useState,useContext } from 'react'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiLogIn } from 'react-icons/bi'
import SessionContext from '../session/session'
import axios, { Axios } from 'axios'
function Login() {
    const {setSession} = useContext(SessionContext)
    const {name} = useContext(SessionContext)
    const [error,setEror]= useState('')
    const [uname,setUname]=useState('');//store user name
    const [pwd,setPwd]=useState('');//store password as pwd
    // register
    const [userName,setUsername]=useState('');//store password as pwd
    const [email,setEmail]=useState('');//store password as pwd
    const [tel,setTel]=useState('');//store password as pwd
    const [password,setPassword]=useState('');//store password as pwd
    const [rpwd,setrPwd]=useState('');//store password as pwd
    function onsub(e) {//function to hundle submit login form
        e.preventDefault();
        let formData = new FormData()
        var data ={
            name:uname,
            password:pwd
        }
        formData.append('name',uname)
        formData.append('pwd',pwd)
       axios({
        method:'POST',
        url: 'http://192.168.1.69/resources/users/login.php',
        data: formData,
        config: {headers:{'Content-Type':'multipart/form-data'}}
       }).then((resp)=>{
        // var dd = JSON.parse(resp.data)
        if (resp.status ==200 && resp.data.status == 'succes') {
            console.log(resp.data.uid);
            setSession(resp.data.uid)
        }else{
            setEror(resp.data)
        }
       })
    }
    const inputValue = (e)=>{// function to get value from user name in login form
        setUname(e.target.value)
    }
    const pwdValue = (e)=>{// function to get value from user password in login form
        setPwd(e.target.value)
    }
    const getUserName = (e)=>{// function to get value from user name in register form
        setUsername(e.target.value)
    }
    const getEmail = (e)=>{// function to get value from user email from register form
        setEmail(e.target.value)
    }
    const getPhone = (e)=>{// function to get value from user phone number from register form
        setTel(e.target.value)
    }
    const getPassword = (e)=>{// function to get value from user password in register form
        setPassword(e.target.value)
    }
    const rpwdValue = (e)=>{// function to get value from user password in login form
        setrPwd(e.target.value)
    }
    // console.log(Session);
    const register=(e)=>{//register a new user
        e.preventDefault();
        let regFormData = new FormData();
        regFormData.append('user',userName)
        regFormData.append('email',email)
        regFormData.append('phone',tel)
        regFormData.append('password',password)
        regFormData.append('retype',rpwd)
    axios({
        method:'POST',
        url: 'http://192.168.1.69/resources/users/register/',
        data: regFormData,
        config: {headers:{'Content-Type':'multipart/form-data'}}
    }).then((resp)=>{
        if (resp.data =="succes" && resp.status == 200) {
            setSession(resp.data)
        }
        // console.log();
       })
    }

    useEffect(() => {

        const lgbtn = document.getElementById('lgbtn');
        const rgbtn = document.getElementById('rgbtn');
        const login = document.getElementById('login')
        const register = document.getElementById('register')
        lgbtn.addEventListener('click', () => {
            rgbtn.classList.remove('active')
            login.style.transform = 'translateX(0)';
            lgbtn.classList.add('active')
            register.style.transform = 'translateX(400px)';
        })
        rgbtn.addEventListener('click', () => {
            lgbtn.classList.remove('active')
            rgbtn.classList.add('active')
            login.style.transform = 'translateX(-400px)';
            register.style.transform = 'translateX(0px)';
        })
    }, [])
    return (
        <div className='main'>
            <form>
                <div className='title'>
                    <h1 id='lgbtn'>Login{name}</h1>
                    <h1 id='rgbtn'>register</h1>
                </div>
                
                <div className='login' id='login'>
                <p>{error}</p>
                    <div>
                        {/* <label>User Name</label> */}
                        <input type='text' 
                        placeholder='Username'
                        onChange={inputValue} />
                        <AiOutlineUser className='icon' />
                        {/* <p>{uname}</p> */}
                    </div>
                    <div>
                        <input type='Password'
                         placeholder='Password'
                        onChange={pwdValue} />
                        <RiLockPasswordLine className='icon' />
                    </div>
                    <div>
                        <input type='submit' value='login' onClick={onsub} />
                        <BiLogIn className='icon' />
                    </div>
                </div>
                <div className='register' id='register'>
                <p>{error}</p>
                    <div>
                        {/* <label>User Name</label> */}
                        <input type='text'
                         placeholder='Username'
                         onChange={getUserName} />
                        <AiOutlineUser className='icon' />

                    </div>
                    <div>
                        <input type='email'
                         placeholder='Email'
                         onChange={getEmail} />
                        <AiOutlineMail className='icon' />
                    </div>
                    <div>
                        <input type='tel'
                         placeholder='Phone'
                         onChange={getPhone} />
                        <AiOutlinePhone className='icon' />
                    </div>
                    <div>
                        <input type='password'
                         placeholder='Password'
                         onChange={getPassword} />
                        <RiLockPasswordLine className='icon' />
                    </div>
                    <div>
                        <input type='password'
                         placeholder='Re Type Password'
                         onChange={rpwdValue} />
                        <RiLockPasswordLine className='icon' />
                    </div>
                    <div>
                    
                    </div>
                    <div>
                        <input type='submit' value='register' onClick={register} />
                        <BiLogIn className='icon' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login