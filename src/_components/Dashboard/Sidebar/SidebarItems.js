import React from "react"
import { Link } from "react-router-dom";

const SidebarItems = (props) => {
    const { item = {} } = props;

    const { id, text, route, svg } = item;

    return (
        <Link to={route}>
            <div key={id} className="flex py-2 px-3 text-sm hover-secondary">
                <span className="">
                    {svg}
                </span>
                <span className="mx-2">
                    {text}
                </span>
            </div>
        </Link>
    )
}

export default SidebarItems;