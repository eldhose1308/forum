import React from "react";

const UserInfo = (props) => {
    const { type = '' } = props;
    return (
        <React.Fragment>
            <div className="post-header">
            <div className="user-info">
                <img class={`user-avatar ${type}`}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&usqp=CAU"
                    alt='User-Avatar'
                />
                <span class={`user-name ${type}`}>Joe Banks</span>
                <span class={`text-muted posted-time ${type}`}>5 mins ago</span>
            </div>

            <div className="user-actions">
                <button className="btn btn-custom-outline">Follow</button>

            </div>
            </div>
        </React.Fragment>
    )
}

export default UserInfo;