//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

export default function Container({ id, children }) {

    return (
        <div id={id} className="_med-container">
            {children}
        </div>
    )
}