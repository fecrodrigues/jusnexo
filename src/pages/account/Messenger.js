//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";
import Container from "../../components/layout/Container";
import { Contact, MessengerContacts } from "../../components/data-display/Messenger/Contacts";
import { Chat, Messages, Message, ChatHeader, ChatFooter } from "../../components/data-display/Messenger/Chat";

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import useMediaQuery from '@material-ui/core/useMediaQuery';

import AvatarImage from "../../images/avatar.png"

export default function Messenger() {

    const matches = useMediaQuery('(min-width:600px)');

    // * States
    const [chatVisible, setChatVisible] = React.useState(true);

    // * Handles Functions
    const handleVisibilityChat = () => {
        setChatVisible(!chatVisible);
    }

    return (

        <Container id="view_messenger">

            <MessengerContacts>
                <Contact
                    active={false}
                    name="Charlie Haper"
                    previewMessage="What’s up, how are you?"
                    iconNewMessage={false}
                    userImage={AvatarImage}
                    onClick={handleVisibilityChat}
                />
                <Contact
                    active={true}
                    name="Charlie Haper"
                    previewMessage="What’s up, how are you?"
                    iconNewMessage={true}
                    userImage={AvatarImage}
                    onClick={handleVisibilityChat}
                />
                <Contact
                    active={false}
                    name="Charlie Haper"
                    previewMessage="What’s up, how are you?"
                    iconNewMessage={false}
                    userImage={AvatarImage}
                    onClick={() => alert("Open Chat!")}
                />
                <Contact
                    active={false}
                    name="Charlie Haper"
                    previewMessage="What’s up, how are you?"
                    iconNewMessage={false}
                    userImage={AvatarImage}
                    onClick={() => alert("Open Chat!")}
                />
            </MessengerContacts>

            {matches === chatVisible && (
                <Chat className={chatVisible && "visible"}>
                    <ChatHeader userImage={AvatarImage} userName="John" onClick={handleVisibilityChat} />

                    <Messages>
                        <Message messageDirection="right" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="left" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="right" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="left" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="left" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="right" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="left" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="right" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="right" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="left" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                        <Message messageDirection="left" messageSentIn="12:00 PM">
                            Hello!
                        </Message>
                    </Messages>

                    <ChatFooter>
                        <form>
                            <div className="write-message">
                                <input type="text" name="write_message" placeholder="Escrever uma mensagem ..." />
                            </div>
                            <div className="send-message">
                                <button type="submit">
                                    <I icon={faPaperPlane} />
                                </button>
                            </div>
                        </form>
                    </ChatFooter>
                </Chat>
            )}
        </Container>
    )
}