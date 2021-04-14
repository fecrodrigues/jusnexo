
import React from 'react';
import Avatar from "../components/data-display/Avatar";
import { Container, Divider, Typography, Card, CardActions, CardContent, Button, Grid } from '@material-ui/core';

import AvatarImage from "../images/avatar.png"

export default function Process(props) {
 
    return (
        

        <Container id="view_process" className="_med-container">

            <div className="title-block">
                <h1 className="title"> Meus Processos / Consultas </h1>
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

        </Container>

    )

}