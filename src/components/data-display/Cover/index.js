//=====================================================================================
// #1 - Base Imports
//=====================================================================================

import React from "react";

export default function Cover({ src, children }) {

    return (
        <div className="cover">
            <img src={!src ? "" : src} />
            {children}
        </div>
    )
}