//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

//=====================================================================================
// #2 - Next Imports
//=====================================================================================
import { Link } from "react-router-dom";

//=====================================================================================
// #3 - React Hook Forms
//=====================================================================================
import { useForm } from "react-hook-form";

//=====================================================================================
// #4 - Import * Form Components
//=====================================================================================
import { Field } from "../../../src/components/forms/Field";

//=====================================================================================
// #5 - Import * Layout Components
//=====================================================================================
import Container from "../../../src/components/layout/Container";
import Headline from "../../../src/components/layout/Headline";

//=====================================================================================
// #6 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RecoverPassword() {

    // * React Hook Forms
    const { register, handleSubmit, errors } = useForm();

    // * React Hook Forms - onSubmit Function
    const onSubmit = data => console.log(data);

    return (
        <Container id="view_login">

            <Headline title="Recuperar senha" subtitle="Para redefinir a sua senha, informe seu nome de usuário abaixo e clique em Continuar." />
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">

                <Field
                    label="Senha"
                    id="id41gsnncx256"
                    name="password"
                    type="password"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.password && "Campo obrigatório"}
                />


                <div className="form-footer">
                    <button type="submit" className="btn btn-action">Continuar</button>

                    <Link to="/entrar" className="back-to">

                        Fazer Login
                        <I icon={faArrowRight} />

                    </Link>
                </div>
            </form>
        </Container>
    )
}