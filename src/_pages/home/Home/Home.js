import React from 'react'


import Post from '_components/Post/Post/Post';
import Draggable from '_components/Misc/Draggable/Draggable';


const Home = () => {
    const postArr = "12345678901234567890".split("");

    return (
        <React.Fragment>
            <div className='container grow-2 bg-default w-full px-3 mr-3'>

                
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />


            </div>
        </React.Fragment>
    )
}

export default Home