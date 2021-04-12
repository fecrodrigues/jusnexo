//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

import Avatar from "../../Avatar";

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export const Contact = ({ active, name, previewMessage, iconNewMessage, userImage, onClick }) => {

    return (
        <li className={`contact ${active ? 'active' : ''}`} onClick={onClick}>
            <div className="_col">
                <Avatar size="medium" image={!userImage ? "/images/avatar.png" : userImage} />
                <div className="contact-info">
                    <div className="contact-name">
                        {name}
                    </div>
                    <div className="preview-message">
                        {previewMessage}
                    </div>
                </div>
            </div>

            <div className="_col">
                {iconNewMessage && (
                    <span className="dot-new-message"></span>
                )}
            </div>
        </li>
    )
}

export const MessengerContacts = ({ children }) => {

    return (

        <div id="messenger_contacts-list">
            <div className="head">
                <div className="icon">
                    <I icon={faCommentDots} />
                </div>
                <div className="title">
                    Chat
                </div>
            </div>
            <ul className="contacts">
                {children}
            </ul>

        </div>
    )
}