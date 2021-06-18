
import React from 'react'
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";


import Container from '../components/layout/Container';
import CoverImage from "../images/cover.png"
import AvatarImage from "../images/avatar-blank.png"

import Cover from "../components/data-display/Cover";
import Avatar from "../components/data-display/Avatar";

import { Modal, Backdrop, Fade, makeStyles  } from '@material-ui/core';

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

export default function ConsultDetail() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container id="view_process_detail">
            
            <div className="header">
                <Cover src={CoverImage} />

                <div className="username">
                    Consulta N #2
                </div>

            </div>

            <div className="content">

                <InfoBlock title="Advogado responsável">
                    <div className="description">
                        Luiz Augusto
                    </div>
                </InfoBlock>

                <InfoBlock title="Data da consulta">
                    <div className="description">
                        01/01/2021
                    </div>
                </InfoBlock>


                <InfoBlock title="Dúvida">
                    <div className="description">
                        Uma pessoa veio e bateu atrás do meu veiculo, oque devo fazer?
                    </div>
                </InfoBlock>

                <InfoBlock title="Resposta">
                    <div className="update_background">
                        <div className="rating">
                            <div class="message-user-info">
                                <Avatar size="small" image={AvatarImage} /> <small className="message-user">Luiz Augusto (01/01/2021 09:40:00)</small> 
                            </div>
                            
                            <p className="message">Em um primeiro momento tentaria dialogar de forma amigável com a pessoa que bateu em seu veiculo para ver se chegam em uma solução, caso não cheguem a um acordo levante provas do ocorrido e entre com uma ação de reparação de danos na área cível.
                                <br/>
                                <br/>
                                Espero ter ajudado!
                            </p>
                        </div>

                        <div className="actions">
                            <button style={{ width: '93%', marginLeft: '10px', padding: '7px', backgroundColor: '#28313b', border: '0px', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} 
                                type="button" onClick={handleOpen}> Responder consulta </button>
                        </div>

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
                        <h1>Responder consulta</h1>
                        
                        <button style={{ margin: '5px' }} type="button">Responder</button>
                        <button style={{ margin: '5px' }} onClick={handleClose} type="button">Cancelar</button>
                    </div>
                </Fade>
            </Modal>

        </Container>
    )

}