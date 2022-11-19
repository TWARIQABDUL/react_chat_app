import React from 'react'
import { Link } from 'react-router-dom'
import { RiGalleryFill } from 'react-icons/ri'

import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
function ChatRoom() {

    // console.log(height);
    return (
        <div className='main-message-window'>
            <div className='top-chat-header'>
                <p>image</p>
                <h1>Name</h1>
                <FiMoreHorizontal className='icon' />
            </div>
            <div className='message-body-container'>
                <div className='msg-containe-content'>
                    <div className='messages rights'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages lefts'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages rights'>
                        <p> hello </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages lefts'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages lefts'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages rights'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages lefts'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages lefts'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages lefts'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages rights'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
                <div className='msg-containe-content'>
                    <div className='messages rights'>
                        <p> hello this is jack smith im the developer on microsoft </p>
                    </div>
                </div>
            </div>
            <div className='button-send-holder'>
                <div className='textarea'>
                    <textarea placeholder='Write a message'></textarea>
                </div>
                <button className='btn send'> <FiSend className='icon'/> </button>
            </div>
        </div>
    )
}

export default ChatRoom