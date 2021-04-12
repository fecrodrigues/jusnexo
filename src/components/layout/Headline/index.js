//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

export default function Headline({ title, subtitle }) {

    return (
        <div className="headline">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle"> {subtitle} </h2>
        </div>
    )
}