
import React from 'react'
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";


import Container from '../components/layout/Container';
import CoverImage from "../images/cover.png"
import AvatarImage from "../images/avatar-blank.png"

import Cover from "../components/data-display/Cover";
import Avatar from "../components/data-display/Avatar";

import { Modal, Backdrop, Fade, makeStyles  } from '@material-ui/core';

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

export default function ProcessDetail() {

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
                    Processo N #1
                </div>

            </div>

            <div className="content">

                <InfoBlock title="Descrição">
                    <div className="description">
                        Processo de pensão alimenticia.
                    </div>
                </InfoBlock>

                <InfoBlock title="Data de inicio">
                    <div className="description">
                        20/01/2020
                    </div>
                </InfoBlock>

                <InfoBlock title="Advogado responsável">
                    <div className="description">
                        Charlie Harper
                    </div>
                </InfoBlock>

                <InfoBlock title="Atualizações do processo">
                    <div className="update_background">
                        <div className="rating">
                            <div class="message-user-info">
                                <Avatar size="small" image={AvatarImage} /> <small className="message-user">Advogado (23/01/2020 14:50:00)</small> 
                            </div>
                            
                            <p className="message">Processo protocolado na vara  N 32 de São Paulo </p>
                        </div>

                        <div className="rating">
                            <div class="message-user-info">
                                <Avatar size="small" image={AvatarImage} /> <small className="message-user">Advogado (25/01/2020 17:40)</small> 
                            </div>
                            <p className="message">Processo julgado procedente </p>
                        </div>

                        <div className="actions">
                            <button style={{ width: '93%', marginLeft: '10px', padding: '7px', backgroundColor: '#28313b', border: '0px', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} 
                                type="button" onClick={handleOpen}> Inserir atualização de processo </button>
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
                        <h1>Inserir atualização</h1>
                        
                        <button style={{ margin: '5px' }} type="button">Inserir</button>
                        <button style={{ margin: '5px' }} onClick={handleClose} type="button">Cancelar</button>
                    </div>
                </Fade>
            </Modal>

        </Container>
    )

}