
import React from 'react';
import Avatar from "../components/data-display/Avatar";
import { Container, Divider, Typography, Card, CardContent, Grid, Modal, Backdrop, Fade, makeStyles, Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Textarea } from "./../components/forms/Field";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Swal2 from 'sweetalert2';

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

const clientsExample = [
    { title: 'João Silva', id: 1 },
    { title: 'Maria Costa', id: 2 },
    { title: 'Pedro junior', id: 3 }
]

export default function Process(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [actualDate, setActualDate] = React.useState();
    const [actualDateToShow, setActualDateToShow] = React.useState();
    const [selectedClient, setSelectedClient] = React.useState();
    const { register, handleSubmit, errors } = useForm();

    const handleOpen = () => {
        dataAtualFormatada();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        
        if(!selectedClient) {
            
            handleClose();
            
            Swal2.fire({ 
                icon: 'info', 
                title: "Ops!", 
                html: "Você precisa selecionar o cliente ao qual este processo pertence",
                confirmButtonColor: 'rgb(40, 49, 59)' 
            }).then(() => handleOpen())

        } else {
            console.log('salvar ae', data, actualDate, selectedClient);
        }
    }

    const dataAtualFormatada = () => {
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();

            setActualDateToShow(diaF+"/"+mesF+"/"+anoF)
            setActualDate(data);
    }
 
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
                        <Typography variant="h4" component="h4"> Cadastrar um novo processo </Typography>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="update-form">

                            <div style={{ marginTop: '20px' }}>
                                <Autocomplete
                                    id="client"
                                    options={clientsExample}
                                    name="client"
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 300 }}
                                    onChange={(e, option) => setSelectedClient(option)}
                                    renderInput={(params) => <TextField {...params} label="Selecione o cliente" variant="outlined" />}
                                    />
                            </div>
                            
                            <div style={{ marginTop: '20px' }}>
                                <Textarea
                                    label="Descrição"
                                    id="id4fdsa1254"
                                    name="description"
                                    type="textarea"
                                    ref={register({ required: true })}
                                    error={errors.description && "Campo obrigatório"}
                                />
                            </div>

                            <Typography color="textPrimary" gutterBottom noWrap>
                                    Data do cadastro: { actualDateToShow }
                            </Typography>
                        
                            <div className="action-buttons" style={{ position: 'relative', bottom: '-17px' }}>
                                <Button type="submit" variant="contained" color="primary" style={{ margin: '5px', width: '46%', backgroundColor: 'rgb(40, 49, 59)' }}>Cadastrar</Button>
                                <Button variant="contained" color="default" style={{ margin: '5px', width: '46%' }} onClick={handleClose}>Cancelar</Button>
                            </div>

                        </form>
                    </div>
                </Fade>
            </Modal>

        </Container>

    )

}