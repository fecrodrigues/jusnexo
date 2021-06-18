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
import { faCommentDots, faStar, faStarHalfAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import Avatar from "../components/data-display/Avatar";

import CoverImage from "../images/cover.png"
import AvatarImage from "../images/avatar-blank.png"

import { Modal, Backdrop, Fade, makeStyles, Grid  } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

export default function UserProfile(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container id="view_user-profile">

            <div className="header">
                <Cover src={CoverImage} />

                <Avatar size="large" image={AvatarImage} />

                <div className="username">
                    Jhonatan Banks
                </div>

                <div className="rate">
                    Avaliação:  <I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStarHalfAlt}/><I icon={faStarEmpty}/>
                </div>

                <div className="oab-number">
                    ADVOGADO - OAB: SP/425490
                </div>

            </div>

            <div className="content">
                
                <InfoBlock title="Chat">
                    <button onClick={() => props.history.push('/minha-conta/mensagens') } type="button" className="btn btn-action">
                        Conversar
                        <I icon={faCommentDots} />
                    </button>
                </InfoBlock>
                <InfoBlock title="Ações">
                    <button style={{ backgroundColor: '#28313b' }} onClick={handleOpen} 
                        type="button" className="btn btn-action">
                        Realizar avaliação
                        <I icon={faCheck} />
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
                        Estou na área desde 1980, tenho faculdade e pós graduação, trabalhei para o escritório rowfows & rofows
                    </div>
                </InfoBlock>
                <InfoBlock title="Avaliações">
                    
                    <div className="rating">
                        <div class="message-user-info">
                            <Avatar size="small" image={AvatarImage} /> <small className="message-user">Cliente 1</small> 

                            <small className="message-rate"><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/></small>
                        </div>
                        
                        <p className="message">Advogado excelente, resolveu meu problema de forma simples e ágil </p>
                    </div>

                    <div className="rating">
                        <div class="message-user-info">
                            <Avatar size="small" image={AvatarImage} /> <small className="message-user">Cliente 2</small> 

                            <small className="message-rate"><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/></small>
                        </div>
                        <p className="message">Advogado Muito bom </p>
                    </div>

                    <div className="rating">
                        <div class="message-user-info">
                                <Avatar size="small" image={AvatarImage} /> <small className="message-user">Cliente 3</small> 

                                <small className="message-rate"><I icon={faStar}/><I icon={faStar}/><I icon={faStar}/><I icon={faStarEmpty}/><I icon={faStarEmpty}/></small>
                         </div>
                        <p className="message">Advogado bom , porem demora para responder </p>
                    </div>

                </InfoBlock>

            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h1>Avaliar o profissional</h1>
                        
                        <button style={{ margin: '5px' }} type="button">Avaliar</button>
                        <button style={{ margin: '5px' }} onClick={handleClose} type="button">Cancelar</button>
                    </div>
                </Fade>
            </Modal>

        </Container>
    )
}