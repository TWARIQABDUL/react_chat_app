import React from 'react'
import Status from '../components/status'

function GetStory() {
    const url = 'http://192.168.1.69/resources/img/1.jpg'
    const storyList = [
        {
            id: 1,
            name: 'Twariq',
            img: url
        },
        {
            id: 2,
            name: 'Shema',
            img: url
        },
        {
            id: 3,
            name: 'shemsa',
            img: url
        },
        {
            id: 4,
            name: 'shemsa',
            img: url
        },
        {
            id: 5,
            name: 'shemsa',
            img: url
        }
    ]
    const stories = storyList.map(story => <Status key={story.id} story={story} />)
    // console.log(storyList.id);
    return (
        <div className='story-main'>
            {stories}
        </div>
    )
}

export default GetStory