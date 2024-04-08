import React, { useState, createContext, useContext } from "react";


const Tabs = ({ children }) => {

    return (
        <div className="tab-container flex w-full">
            <ul className="list-none flex text-center m-0 p-2 items-center">
                {children}
            </ul>
        </div>
    )
}

const TabItem = ({ isActive, onClick, children, ...props }) => {
    
    const className = `py-3 px-4 my-1 mx-2 rounded-xl cursor-pointer border hover-border-custom ${isActive ? 'bg-custom' : ''}`;
    return (
        <li onClick={onClick} className={className} {...props}>{children}</li>
    )
}

export {
    Tabs,
    TabItem
};