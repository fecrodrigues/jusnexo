//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../Avatar";

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Message = ({ messageDirection, messageSentIn, children }) => {

    return (
        <div className={messageDirection === "left" && "message-item" || messageDirection === "right" && "message-item out"}>
            <div className="message-content">
                {children}
            </div>
            <div className="message-sent-in">
                {messageSentIn}
            </div>
        </div>
    )
}

export const Messages = ({ children }) => {
    return (
        <div className="chat-content">
            <div className="messages">
                {children}
            </div>
        </div>
    )
}

export const ChatHeader = ({ userImage, userName, onClick }) => {

    return (
        <div className="chat-header">
            <div className="_col">
                <button type="button" className="close-chat" onClick={onClick}>
                    <I icon={faChevronLeft} />
                </button>

                <div className="chat-user">
                    <Avatar size="small" image={!userImage ? "/images/avatar-blank.png" : userImage} />
                    <div className="contact-name">
                        {userName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ChatFooter = ({ children }) => {

    return (
        <div className="chat-write-message">
            {children}
        </div>
    )
}

export const Chat = ({ children, className }) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div id="messenger_chat" className={`active-chat ${className && className}`}>

            {children}

        </div>
    )
}