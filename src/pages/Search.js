//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

import { Link } from "react-router-dom";

import Search from "../components/patterns/Search";
import Avatar from "../components/data-display/Avatar";

//=====================================================================================
// #2 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCommentDots, faStarHalfAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'; 

import AvatarImage from "../images/avatar-blank.png"

const ChatButton = ({ onClick }) => {

    return (
        <button type="button" className="messenger-button" onClick={onClick}>
            <I icon={faCommentDots} />
        </button>
    )
}

const Expertise = ({ text }) => {

    return (
        <div className="item">
            <span>
                {text}
            </span>
        </div>
    )
}

const ResultBlock = ({ href, avatarImage, tag, username, oabNumber, bio, children }) => {

    return (
        <Link to={!href ? "#!" : href} className="result-block">


            <div className="_col">
                <Avatar className="medium" image={avatarImage} />
                <div className="user-info">
                    <div className="tag">
                        {tag}
                    </div>
                    <div className="name">
                        {username}
                    </div>
                    <div class="rate">
                        Avaliação:  <I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStarHalfAlt}/><I icon={faStarEmpty}/>
                    </div>
                    <div className="oab-number">
                        OAB: <span>{oabNumber}</span>
                    </div>
                </div>
            </div>

            <div className="_col">
                <div className="bio">
                    {bio}
                </div>
                <div className="expertises">
                    {children}
                </div>
            </div>

        </Link>
    )
}

export default function SearchPage() {

    // * States
    const [fieldValue, setFieldValue] = React.useState("");

    // * Handles Functions
    const handleChange = ({ target }) => {
        setFieldValue(target.value);
    }

    console.log(fieldValue)

    return (

        <div id="view_search" className="_med-container">

            <div className="search-block">
                <h1 className="title"> Encontrar advogados </h1>
                <Search placeholder="Faça uma busca" name="search" onChange={handleChange} />
            </div>

            <div className="results-block">

                <h1 className="title small-title">Advogados sugeridos</h1>
                {false && <h1 className="title medium-title">Resultados da busca para: <span>Trabalhista</span></h1>}

                <ResultBlock
                    href="/usuario"
                    avatarImage={AvatarImage}
                    username="Charlie Harper"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan, diam
                    non ultrices rhoncus, mauris tellus consequat tortor, et accumsan leo nibh a lacus.
                    Sed lectus leo, consequat nec ante in, tincidunt venenatis nunc."
                    oabNumber="SP/425490"
                    tag="Advogado"
                >
                    <ChatButton onClick={() => console.log("Open Chat!!")} />
                    <Expertise text="administrativo" />
                    <Expertise text="comercial" />
                    <Expertise text="trabalhista" />
                </ResultBlock>
                <ResultBlock
                    href="/usuario"
                    avatarImage={AvatarImage}
                    username="Allan Harper"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan, diam
                    non ultrices rhoncus, mauris tellus consequat tortor, et accumsan leo nibh a lacus.
                    Sed lectus leo, consequat nec ante in, tincidunt venenatis nunc."
                    oabNumber="SP/425490"
                    tag="Advogado"
                >
                    <ChatButton onClick={() => console.log("Open Chat!!")} />
                    <Expertise text="administrativo" />
                    <Expertise text="comercial" />
                    <Expertise text="trabalhista" />
                </ResultBlock>
                <ResultBlock
                    href="/usuario"
                    avatarImage={AvatarImage}
                    username="Jake Harper"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan, diam
                    non ultrices rhoncus, mauris tellus consequat tortor, et accumsan leo nibh a lacus.
                    Sed lectus leo, consequat nec ante in, tincidunt venenatis nunc."
                    oabNumber="SP/425490"
                    tag="Advogado"
                >
                    <ChatButton onClick={() => console.log("Open Chat!!")} />
                    <Expertise text="administrativo" />
                    <Expertise text="comercial" />
                    <Expertise text="trabalhista" />
                </ResultBlock>
            </div>
        </div>
    )
}