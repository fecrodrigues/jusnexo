//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

import Cover from "../components/data-display/Cover";
import Container from "../components/layout/Container";

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/data-display/Avatar";

import CoverImage from "../images/cover.png"
import AvatarImage from "../images/avatar.png"

const Expertise = ({ text }) => {

    return (
        <div className="expertise">
            <span>
                {text}
            </span>
        </div>
    )
}

const InfoBlock = ({ title, children }) => {

    return (

        <div className="info-block">

            <h1 className="title">
                {title}
            </h1>

            {children}
        </div>
    )
}

export default function UserProfile() {

    return (
        <Container id="view_user-profile">

            <div className="header">
                <Cover src={CoverImage} />

                <Avatar size="large" image={AvatarImage} />

                <div className="username">
                    Jhonatan Banks
                </div>

                <div className="oab-number">
                    ADVOGADO - OAB: SP/425490
                </div>

            </div>

            <div className="content">
                <InfoBlock title="Chat">
                    <button type="button" className="btn btn-action">
                        Conversar
                        <I icon={faCommentDots} />
                    </button>
                </InfoBlock>
                <InfoBlock title="Áreas de atuação">
                    <Expertise text="administrativo" />
                    <Expertise text="comercial" />
                    <Expertise text="trabalhista" />
                </InfoBlock>
                <InfoBlock title="Telefone">
                    <div className="phone">
                        (11) 95237-1589
                    </div>
                </InfoBlock>
                <InfoBlock title="Bio">
                    <div className="bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan, diam
                        non ultrices rhoncus, mauris tellus consequat tortor, et accumsan leo nibh a lacus.
                        Sed lectus leo, consequat nec ante in, tincidunt venenatis nunc.
                    </div>
                </InfoBlock>
            </div>
        </Container>
    )
}