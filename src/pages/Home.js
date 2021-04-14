//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import { Link } from "@material-ui/core";
import {React, useEffect} from "react";
import Container from "../components/layout/Container";

import Headline from "../components/layout/Headline";

import { useLocation } from 'react-router-dom'

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import HeroBackground from "../images/hero-background.png";
import FeaturedChat from "../images/featured-chat.png";

export default function Home() {

    const location = useLocation();

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

    return (
        <div id="view_home">

            <div className="Hero">
                <div className="HeroLeft">
                    <div className="content">
                        <h1 className="title">
                            Encontre o advogado<br />
            Perfeito para seu caso.
            </h1>
                        <h2 className="subtitle">
                            Vocẽ fica a vontande para escolher o profissional que melhor lhe atender.
            </h2>

                        <div className="actions">

                            <button type="button" className="btn btn-action">
                                <Link href="/criar-conta">
                                    <a>
                                        Criar uma conta
                  </a>
                                </Link>
                            </button>

                            <button type="button" className="btn btn-default">
                                <Link href="/sobre">
                                    <a>
                                        Saiba mais
                  </a>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="HeroRight" style={{ backgroundImage: `url(${HeroBackground})` }}></div>
            </div>
            
            <Container id="como-funciona">

                <div className="HowItWorks">

                    <Headline title="Como Funciona" />

                    <div className="_cols">

                        <div className="_col">

                            <h1 className="title">
                                #JusNexo<br />
              Como Funciona?
            </h1>

                            <p className="text">
                                Com a plataforma é simples e rápido realizar uma consulta jurídica e 
                                até mesmo acompanhar os seus processos, basta criar uma conta e você conseguira encontrar os melhores profissionais pelos melhores preços
            </p>


                            <div className="actions">

                                <button type="button" className="btn btn-action">
                                    <Link href="/criar-conta">
                                        <a>
                                            Criar uma conta
                                        </a>
                                    </Link>
                                </button>

                            </div>
                        </div>
                        <div className="_col">

                            <img className="featured-chat" src={FeaturedChat} alt="" />

                        </div>
                    </div>
                </div>

            </Container>

            <div id="contato" className="contact-us">
                <div className="box">

                    <h1 className="title">
                        Ficou com alguma dúvida?
            </h1>
                    <p className="text">
                        Nosso suporte garante a resposta do seu contato em até 24h de
                        segunda à sexta-feira. Com o aplicativo WhatsApp a comunicação será
                        mais rápida, podendo sanar qualquer dúvida.
            </p>

                    <button type="button" className="btn btn-action">
                        <Link href="#!">
                            <a>
                                <I icon={faWhatsapp} />
                Fale conosco
              </a>
                        </Link>
                    </button>

                </div>
            </div>
        </div>
    )
}
