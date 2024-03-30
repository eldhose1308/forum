import React from "react"

const SidebarItems = (props) => {
    const { item={} } = props;
    
    const { id, text, route, svg } = item;

    return (
        <div key={id} className="flex py-2 px-3 text-sm">
            <span className="">
                {svg}
            </span>
            <span className="mx-2">
                {text}
            </span>
        </div>
    )
}

export default SidebarItems;