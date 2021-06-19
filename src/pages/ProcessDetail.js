
import React from 'react'
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";


import Container from '../components/layout/Container';
import CoverImage from "../images/cover.png"
import AvatarImage from "../images/avatar-blank.png"

import Cover from "../components/data-display/Cover";
import Avatar from "../components/data-display/Avatar";

import { Modal, Backdrop, Fade, makeStyles, Typography, Button  } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Textarea } from "./../components/forms/Field";

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
    const { register, handleSubmit, errors } = useForm();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        console.log('salvar ae', data);
    }

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
                        <Typography variant="h4" component="h4"> Adicionar atualização </Typography>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="update-form">
                            
                            <Textarea
                                label="Descrição da atualização"
                                id="id4fdsa1254"
                                name="update_description"
                                type="textarea"
                                ref={register({ required: true })}
                                error={errors.update_description && "Campo obrigatório"}
                            />
                        
                            <div className="action-buttons" style={{ position: 'relative', bottom: '-17px' }}>
                                <Button type="submit" variant="contained" color="primary" style={{ margin: '5px', width: '46%', backgroundColor: 'rgb(40, 49, 59)' }}>Inserir</Button>
                                <Button variant="contained" color="default" style={{ margin: '5px', width: '46%' }} onClick={handleClose}>Cancelar</Button>
                            </div>

                        </form>
                    </div>
                </Fade>
            </Modal>

        </Container>
    )

}