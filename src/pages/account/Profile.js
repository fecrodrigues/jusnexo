//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import { React, useState } from "react";
import Cover from "../../components/data-display/Cover";
import Container from "../../components/layout/Container";
import Headline from "../../components/layout/Headline";

//=====================================================================================
// #3 - React Hook Forms
//=====================================================================================
import { useForm } from "react-hook-form";

//=====================================================================================
// #4 - Import * Form Components
//=====================================================================================
import { Field, Textarea, CheckBox } from "../../components/forms/Field";

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../components/data-display/Avatar";

import CoverImage from "../../images/cover.png"
import AvatarImage from "../../images/avatar-blank.png"

export default function Profile() {

    const [isLawyer, setIsLawyer] = useState(false);

    // * React Hook Forms
    const { register, handleSubmit, errors } = useForm();

    // * React Hook Forms - onSubmit Function
    const onSubmit = data => console.log(data);

    return (
        <Container id="view_profile">

            <div className="header">
                <Cover src={CoverImage}>
                    <button type="button" className="change-img">
                        <label htmlFor="change-profile-cover">
                            <I icon={faCamera} />
                            <span> Alterar banner </span>
                            <input type="file" name="change_cover" id="change-profile-cover" />
                        </label>
                    </button>
                </Cover>

                <Avatar size="large" image={AvatarImage}>
                    <button type="button" className="change-img">
                        <label htmlFor="change-profile-img">
                            <I icon={faCamera} />
                            <input type="file" name="change_profile-image" id="change-profile-img" />
                        </label>
                    </button>
                </Avatar>

                <div className="username">
                    Jonathan banks
                </div>
            </div>

            <div className="wrap-form-profile">
                <Headline title="Meu perfil" subtitle="Gerencias as informações do seu perfil abaixo." />

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
                        label="Senha"
                        id="id41gsnncx256"
                        name="password"
                        type="password"
                        onChange={({ target }) => console.log(target.value)}
                        ref={register({ required: true })}
                        error={errors.password && "Campo obrigatório"}
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
                        onChange={(e) => setIsLawyer(e.target.checked)}
                        className={errors.lawyer && "error"}
                        ref={register({ required: false })}
                    />

                    {isLawyer && (
                        <>
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
                        </>
                    )}


                    <div className="form-footer">
                        <button type="submit" className="btn btn-action">Salvar</button>

                    </div>
                </form>
            </div>
        </Container>
    )
}