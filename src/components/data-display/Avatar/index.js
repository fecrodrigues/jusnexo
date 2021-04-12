//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

//=====================================================================================
// #2 - Next Imports
//=====================================================================================

import AvatarBlank from "../../../images/avatar-blank.png";

export default function Avatar({ size, className, image, children }) {

    let sizeClass = "";

    if (size === "small") {
        sizeClass = "small"
    } else if (size === "extra-small") {
        sizeClass = "extra-small"
    } else if (size === "medium") {
        sizeClass = "medium"
    } else if (size === "large") {
        sizeClass = "large"
    }

    return (
        <>
            <div className={`avatar ${sizeClass} ${className ? className : ''}`}>
                <img
                    src={!image ? AvatarBlank : image}
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    className="xs545"
                />
                {children}
            </div>
        </>
    )
}