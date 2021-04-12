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
import { Field, CheckBox } from "../../components/forms/Field";

//=====================================================================================
// #5 - Import * Layout Components
//=====================================================================================
import Container from "../../components/layout/Container";
import Headline from "../../components/layout/Headline";

//=====================================================================================
// #6 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Login() {

    // * React Hook Forms
    const { register, handleSubmit, errors } = useForm();

    // * React Hook Forms - onSubmit Function
    const onSubmit = data => console.log(data);

    return (
        <Container id="view_login">

            <Headline title="Fazer login" subtitle="Faça o login no JusNexo" />
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">

                <Field
                    label="Nome de usuário"
                    id="id45352"
                    name="username"
                    type="text"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.username && "Campo obrigatório"}
                />

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
                    <CheckBox
                        label="Permanecer logado"
                        id="id41245we14"
                        name="lawyer"
                        className={errors.lawyer && "error"}
                        ref={register({ required: false })}
                    />

                    <Link to="/recuperar-senha" className="back-to go">
                        
                            Esqueci minha senha
                        
                    </Link>

                </div>


                <div className="form-footer">
                    <button type="submit" className="btn btn-action">Criar conta</button>

                    <Link to="/criar-conta" className="back-to">

                        Criar uma conta
                        <I icon={faArrowRight} />

                    </Link>
                </div>
            </form>
        </Container>
    )
}