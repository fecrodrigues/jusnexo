
import React from 'react'
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";


import Container from '../components/layout/Container';
import CoverImage from "../images/cover.png"
import AvatarImage from "../images/avatar-blank.png"

import Cover from "../components/data-display/Cover";
import Avatar from "../components/data-display/Avatar";

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

export default function ProcessDetail() {

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
                    </div>
                </InfoBlock>

            </div>

        </Container>
    )

}