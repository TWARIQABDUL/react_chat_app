import React from 'react'
import Message from '../components/message'
function GetMessage() {
    const url = 'http://192.168.1.66/resources/img/1.jpg'
    const messageList = [
        {
            msgId: 1,
            chatId: 'hsdklhfk',
            name: 'Twariq',
            msgBody: 'helo my name is jack',
            img: url

        },
        {
            msgId: 2,
            chatId: 'hsdklhfk',
            name: 'Kack',
            msgBody: 'helo my name is jack',
            img: url

        },
        {
            msgId: 3,
            chatId: 'rfimioeg',
            name: 'Stack',
            msgBody: 'helo my name is jack',
            img: url

        },
        {
            msgId: 4,
            chatId: '90ujim',
            name: 'Michael',
            msgBody: 'helo my name is jack',
            img: url

        },
        {
            msgId: 5,
            chatId: '4uiwjof',
            name: 'Stantum',
            msgBody: 'helo my name is jack',
            img: url

        },
        {
            msgId: 6,
            chatId: 'jskluori',
            name: 'job',
            msgBody: 'helo my name is jack',
            img: url

        },
        {
            msgId: 7,
            chatId: '7859jior',
            name: 'Done',
            msgBody: 'helo my name is jack',
            img: url

        }
    ]
    const mesages = messageList.map(message => <Message key={message.msgId} msg={message} />)
    return (
        <div>
            {mesages}
        </div>
    )
}

export default GetMessage