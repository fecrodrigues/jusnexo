
import React from 'react';
import Avatar from "../components/data-display/Avatar";
import { Container, Divider, Typography, Card, CardContent, Grid, Modal, Backdrop, Fade, makeStyles  } from '@material-ui/core';

import AvatarImage from "../images/avatar-blank.png";

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

export default function Process(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
 
    return (
        

        <Container id="view_process" className="_med-container">

            <div className="title-block">
                <h1 className="title"> Meus Processos / Consultas </h1>
                <a href="#!" className="add-button" onClick={handleOpen}>+</a>
            </div>

            <div className="process-container">
                
                <Grid container spacing={12}>
                    
                    <Grid item xs={12} sm={4}>
                        
                        <Card onClick={() => props.history.push('/processo/1')} className="process-item">
                            <CardContent>
                                <Typography className="process-title" color="textPrimary" gutterBottom noWrap>
                                    Processo N #2134
                                </Typography>
                                <Divider variant="left" />

                                <Typography className="process-date" color="textSecondary" gutterBottom noWrap>
                                    Data: 10/01/2021
                                </Typography>

                                <div className="adv-content">
                                    <Typography color="textSecondary" variant="body2" noWrap>
                                    Advogado responsável
                                    </Typography>
                                    <Typography className="adv-name-avatar" variant="body2" component="p" noWrap>
                                        <Avatar className="medium" image={AvatarImage} /> <span>Charles Harper</span>.
                                    </Typography>
                                </div>

                            </CardContent>
                            <p className="click-to-details">clique para ver mais detalhes</p>
                        </Card>

                    </Grid>


                    <Grid item xs={12} sm={4}>
                        
                        <Card onClick={() => props.history.push('/processo/1')} className="process-item">
                            <CardContent>
                                <Typography className="process-title" color="textPrimary" gutterBottom noWrap>
                                    Processo N #245
                                </Typography>
                                <Divider variant="left" />

                                <Typography className="process-date" color="textSecondary" gutterBottom noWrap>
                                    Data: 20/02/2021
                                </Typography>

                                <div className="adv-content">
                                    <Typography color="textSecondary" variant="body2" noWrap>
                                    Advogado responsável
                                    </Typography>
                                    <Typography className="adv-name-avatar" variant="body2" component="p" noWrap>
                                        <Avatar className="medium" image={AvatarImage} /> <span>Alan Harper</span>.
                                    </Typography>
                                </div>

                            </CardContent>
                            <p className="click-to-details">clique para ver mais detalhes</p>
                        </Card>

                    </Grid>


                    <Grid item xs={12} sm={4}>
                        
                        <Card onClick={() => props.history.push('/consulta/2')} className="process-item">
                            <CardContent>
                                <Typography className="process-title" color="textPrimary" gutterBottom noWrap>
                                    Consulta N #2
                                </Typography>
                                <Divider variant="left" />

                                <Typography className="process-date" color="textSecondary" gutterBottom noWrap>
                                    Data: 01/01/2021
                                </Typography>

                                <div className="adv-content">
                                    <Typography color="textSecondary" variant="body2" noWrap>
                                    Advogado responsável
                                    </Typography>
                                    <Typography className="adv-name-avatar" variant="body2" component="p" noWrap>
                                        <Avatar className="medium" image={AvatarImage} /> <span>Luiz Augusto</span>.
                                    </Typography>
                                </div>

                            </CardContent>
                            <p className="click-to-details">clique para ver mais detalhes</p>
                        </Card>

                    </Grid>


                    <Grid item xs={12} sm={4}>
                        
                        <Card onClick={() => props.history.push('/processo/1')} className="process-item">
                            <CardContent>
                                <Typography className="process-title" color="textPrimary" gutterBottom noWrap>
                                    Consulta N #6
                                </Typography>
                                <Divider variant="left" />

                                <Typography className="process-date" color="textSecondary" gutterBottom noWrap>
                                    Data: 25/01/2021
                                </Typography>

                                <div className="adv-content">
                                    <Typography color="textSecondary" variant="body2" noWrap>
                                    Advogado responsável
                                    </Typography>
                                    <Typography className="adv-name-avatar" variant="body2" component="p" noWrap>
                                        <Avatar className="medium" image={AvatarImage} /> <span>Luana Silva</span>.
                                    </Typography>
                                </div>

                            </CardContent>
                            <p className="click-to-details">clique para ver mais detalhes</p>
                        </Card>

                    </Grid>

                </Grid>
        
              
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
                        <h1>Cadastrar um novo processo</h1>
                        
                        <button style={{ margin: '5px' }} type="button">Cadastrar</button>
                        <button style={{ margin: '5px' }} onClick={handleClose} type="button">Cancelar</button>
                    </div>
                </Fade>
            </Modal>

        </Container>

    )

}