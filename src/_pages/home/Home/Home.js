import React from 'react'


import Post from '_modules/posts/_components/Post';


const Home = () => {
    const postArr = "12345678901234567890".split("");

    return (
        <React.Fragment>
            <div className='flex'>

            <div className='container grow-2 bg-default w-full px-3 mr-3'>

                
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />


            </div>

                {/* <div className="sidebar p-3 text-default w-80 grow-1 overflow-scroll h-screen sm:hidden md:hidden lg:display"> This is sidebar </div> */}
            </div>

        </React.Fragment>
    )
}

export default Home