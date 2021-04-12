//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React, { useState } from "react";

//=====================================================================================
// #3 - Router Dom Imports
//=====================================================================================
import {Link} from "react-router-dom"

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch, faUserCircle, faSignOutAlt, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../ui/Logo";

import Avatar from "../../data-display/Avatar";

import AvatarImage from "../../../images/avatar.png";

const Dropdown = ({ children }) => {

    return (
        <div className="dropdown">
            <nav>
                <ul>
                    {children}
                </ul>
            </nav>
        </div>
    )
}

const DropdownItem = ({ href, icon, text }) => {

    return (
        <li>
            <Link to={!href ? "#!" : href}>
               
                    <div className="icon">
                        {icon}
                    </div>
                    <div className="text">
                        {!text ? "..." : text}
                    </div>
                
            </Link>
        </li>
    )
}

function Header() {

    // * States
    const [menu, setMenu] = useState(false);

    // * Functions
    const handleMenu = () => setMenu(!menu);


    return (
        <header id="Header">
            <div className="_med-container">
                {/* Col Left */}
                <div className="_col col-1">

                    <div className="button-menu" onClick={handleMenu}>
                        <button type="button">
                            <I icon={menu ? faTimes : faBars} />
                        </button>
                    </div>

                    {/* Logo */}
                    <Logo to="/" />

                    <div className="right">
                        <div className="button-search">
                            <button type="button">
                                <Link to="/buscar">
                                   
                                        <I icon={faSearch} />
                                    
                                </Link>
                            </button>
                        </div>

                        <div className="user">
                            <Avatar className="small" image={AvatarImage} />

                            <Dropdown>
                                <DropdownItem href="/minha-conta/perfil" icon={<I icon={faUserCircle} />} text="Meu Perfil" />
                                <DropdownItem href="/minha-conta/mensagens" icon={<I icon={faCommentDots} />} text="Mensagens" />
                                <DropdownItem href="#!" icon={<I icon={faSignOutAlt} />} text="Sair" />
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {/* Col Right */}
                {/* <div className={menu ? "rightCol" : "nav rightCol"}> */}
                <div className={menu ? "_col col-2 active" : "_col col-2"}>

                    {/* Menu */}
                    <nav className="nav">
                        <ul id="menu">
                            <li>
                                <Link to="/" className="active">
                                    
                                        Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/#como-funciona">
                                    
                                        Como Funciona

                                </Link>
                            </li>
                            <li>
                                <Link to="/#contato">
                                    
                                        Contato

                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div className={menu ? "_col col-3 active" : "_col col-3"}>
                    <div className="button-search">
                        <button type="button">
                            <Link to="/buscar">
                                
                                    <I icon={faSearch} />

                            </Link>
                        </button>
                    </div>


                    <div className="action-buttons">
                        <Link to="/entrar" className="btn">
                          
                                Entrar
                          
                        </Link>

                        <Link to="/criar-conta" className="btn">
                            
                                Cadastre-se
                           
                        </Link>
                    </div>

                    {false && (
                        <div className="user">
                            <Avatar className="small" image={AvatarImage} />

                            <Dropdown>
                            <DropdownItem href="/minha-conta/perfil" icon={<I icon={faUserCircle} />} text="Meu Perfil" />
                                <DropdownItem href="/minha-conta/mensagens" icon={<I icon={faCommentDots} />} text="Mensagens" />
                                <DropdownItem href="#!" icon={<I icon={faSignOutAlt} />} text="Sair" />
                            </Dropdown>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
