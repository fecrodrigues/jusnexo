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
import Banner1 from '../images/banner1.jpg';
import FeaturedChat from "../images/featured-chat.png";
import ProcessImage from '../images/processos.png';
import UpdatesImage from '../images/atualizacoes.png';
import EvaluateImage from '../images/avaliacoes.png';
import Evaluate2Image from '../images/avaliacoes2.png';

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
                           O escritório digital que você procurava
            </h1>
                        <h2 className="subtitle">
                            Todas as suas demandas em um só lugar, nada de ter varias planilhas abertas, tudo relacionado a você e seu cliente estara aqui.
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

                <div className="HeroRight" style={{ backgroundImage: `url(${Banner1})` }}></div>
            </div>
            
            <Container id="como-funciona">

                <div className="HowItWorks">

                    <Headline title="Para você advogado" />

                    <div className="_cols">

                        <div className="_col">

                            <h1 className="title">
                                Cadastre todos os seus processos em um só lugar
                            </h1>

                            <p className="text">
                                Faça o cadastro de todas os seus processos aqui centralizando todos os seus atendimentos em uma só plataforma.
                            </p>

                        </div>
                        <div className="_col">

                            <img className="featured-chat" style={{ width: '513px' }} src={ProcessImage} alt="" />

                        </div>
                    </div>

                    <div className="_cols">

                        <div className="_col">

                            <h1 className="title">
                                Clientes sempre bem informados
                            </h1>

                            <p className="text">
                                Ao lançar uma nova atualização no processo o cliente receberá notificações em seus canais de comunicação favoritos.
                            </p>

                        </div>
                        <div className="_col">

                            <img className="featured-chat" style={{ width: '513px' }} src={UpdatesImage} alt="" />

                        </div>
                    </div>


                </div>

            </Container>

            <div className="Hero">

                <div className="HeroRight" style={{ backgroundImage: `url(${HeroBackground})` }}></div>

                <div className="HeroLeft" style={{ backgroundColor: '#3A88E0', borderRadius: '0px 0px 0px 67px'}}>
                    <div className="content">
                        <h1 className="title">
                           Encontre os melhores profissionais
                        </h1>
                        <h2 className="subtitle">
                            Encontre excelentes profissionais através do feedback dado por outros usuários.
                        </h2>

                        <div className="actions">

                            <button style={{ backgroundColor: '#28313b' }} type="button" className="btn btn-action">
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

                
            </div>

            <Container id="como-funciona">

                <div className="HowItWorks">

                    <Headline title="Para você cliente" />

                    <div className="_cols">

                        <div className="_col">

                            <h1 className="title">
                                Chat com seu profissional
                            </h1>

                            <p className="text">
                                Entre em contato com seu advogado de forma simples e rápida através do chat. As conversas vão ficar registradas para consultas posteriores
                            </p>

                        </div>
                        <div className="_col">

                            <img className="featured-chat" src={FeaturedChat} alt="" />

                        </div>
                    </div>

                    <div className="_cols">

                        <div className="_col">

                            <h1 className="title">
                                Sistema de avaliações
                            </h1>

                            <p className="text">
                                Através do sistema de avaliações você conseguira encontrar excelentes profissionais e também avaliar seu atendimento para que outras pessoas encontrem os melhores.
                            </p>

                        </div>
                        <div className="_col">

                            <img className="featured-chat" style={{ width: '513px' }} src={Evaluate2Image} alt="" />

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
