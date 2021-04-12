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
import { Field, Textarea, CheckBox } from "../../components/forms/Field";

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

export default function CreateAccount() {

    // * React Hook Forms
    const { register, handleSubmit, errors } = useForm();

    // * React Hook Forms - onSubmit Function
    const onSubmit = data => console.log(data);

    return (
        <Container id="view_create-account">

            <Headline title="Crie uma nova conta" subtitle="Preencha o formulário abaixo com seus dados." />
            <form onSubmit={handleSubmit(onSubmit)} className="create-account-form">

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
                    label="Nome"
                    id="id41232"
                    name="first_name"
                    type="search"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.first_name && "Campo obrigatório"}
                />

                <Field
                    label="Sobrenome"
                    id="id412554"
                    name="last_name"
                    type="search"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.last_name && "Campo obrigatório"}
                />

                <Field
                    label="Data de nascimento"
                    id="id41221667"
                    name="birthdate"
                    type="search"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.birthdate && "Campo obrigatório"}
                />

                <Field
                    label="Telefone"
                    id="id43452812"
                    name="phone"
                    type="search"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.phone && "Campo obrigatório"}
                />

                <CheckBox
                    label="Sou advogado"
                    id="id41245we14"
                    name="lawyer"
                    className={errors.lawyer && "error"}
                    ref={register({ required: false })}
                />

                <div className="checkbox-set">
                    <div className="title">Áreas de atuação</div>

                    <CheckBox
                        label="Direito civil"
                        id="id4124cvsx54"
                        name="direito_civil"
                        className={errors.direito_civil && "error"}
                        ref={register({ required: false })}
                    />

                    <CheckBox
                        label="Direito administrativo"
                        id="id412dfa454"
                        name="direito_adm"
                        className={errors.direito_adm && "error"}
                        ref={register({ required: false })}
                    />

                    <CheckBox
                        label="Direito ambiental"
                        id="id41afmc2454"
                        name="direito_ambiental"
                        className={errors.direito_ambiental && "error"}
                        ref={register({ required: false })}
                    />

                    <CheckBox
                        label="Direito comercial"
                        id="id41asbn2454"
                        name="direito_comercial"
                        className={errors.direito_comercial && "error"}
                        ref={register({ required: false })}
                    />

                    <CheckBox
                        label="Direito do consumidor"
                        id="id4124gqws54"
                        name="direito_consumidor"
                        className={errors.direito_consumidor && "error"}
                        ref={register({ required: false })}
                    />
                </div>

                <Field
                    label="Número AOB"
                    id="id4avgnh1256"
                    name="aob_number"
                    type="text"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.aob_number && "Campo obrigatório"}
                />

                <Textarea
                    label="Biografia"
                    id="id4fdsa1254"
                    name="bio"
                    type="textarea"
                    onChange={({ target }) => console.log(target.value)}
                    ref={register({ required: true })}
                    error={errors.bio && "Campo obrigatório"}
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
                    <button type="submit" className="btn btn-action">Criar conta</button>

                    <Link to="/entrar" className="back-to">

                        Fazer Login
                        <I icon={faArrowRight} />

                    </Link>
                </div>
            </form>
        </Container>
    )
}