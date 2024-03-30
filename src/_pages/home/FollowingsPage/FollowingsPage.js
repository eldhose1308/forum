import React from "react";

import Followings from "./Followings/Followings";

import './FollowingsPage.css'

const FollowingsPage = () => {

    return (
        <React.Fragment>
            <div className="followings-container">
               
               <Followings />
               <Followings />
               <Followings />

            </div>
        </React.Fragment>
    )
}

export default FollowingsPage;