import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CreateAccount from "./pages/auth/CreateAccount";
import Login from "./pages/auth/Login";
import RecoverPassword from "./pages/auth/RecoverPassword";
import SearchPage from "./pages/Search";
import Messenger from "./pages/account/Messenger";
import Profile from "./pages/account/Profile";
import UserProfile from "./pages/UserProfile";
import About from './pages/About';
import Process from './pages/Process';
import ProcessDetail from './pages/ProcessDetail';
import ConsultDetail from './pages/ConsultDetail';

class Routes extends Component {

    render() {

        return (

            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/criar-conta" component={CreateAccount} />
                <Route exact path="/entrar" component={Login} />
                <Route exact path="/recuperar-senha" component={RecoverPassword} />
                <Route exact path="/buscar" component={SearchPage} />
                <Route exact path="/minha-conta/mensagens" component={Messenger} />
                <Route exact path="/minha-conta/perfil" component={Profile} />
                <Route exact path="/minha-conta/processos" component={Process} />
                <Route exact path="/usuario" component={UserProfile} />
                <Route exact path="/sobre" component={About} />
                <Route exact path="/processo/:id" component={ProcessDetail} />
                <Route exact path="/consulta/:id" component={ConsultDetail} />
                

            </Switch>


        )

    }

}

export default Routes;