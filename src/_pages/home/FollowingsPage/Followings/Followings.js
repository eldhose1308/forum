import React from "react";

import UserInfo from "_components/User/UserInfo/UserInfo";
import PostContent from "_components/Post/PostContent/PostContent";

import './Followings.css'

const Followings = () => {

    return (
        <React.Fragment>
             <div className="following-cards">
                    <UserInfo />
                    <PostContent 
                        heading="Community 1"
                        content="Small info about the community 1"
                    />
                </div>
        </React.Fragment>
    )
}

export default Followings;