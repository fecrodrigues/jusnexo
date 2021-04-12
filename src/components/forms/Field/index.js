//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

//=====================================================================================
// #2 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Field = React.forwardRef((props, ref) => (
    <div className="field-control">
        <label htmlFor={props.id}>
            {props.label}
        </label>
        <input type={!props.type ? "text" : props.type} defaultValue={props.value} name={props.name} id={props.id} onChange={props.onChange} ref={ref} />
        <span className="error"> {props.error} </span>
    </div>
))

export const Textarea = React.forwardRef((props, ref) => (
    <div className="field-control">
        <label htmlFor={props.id}>
            {props.label}
        </label>
        <textarea type={!props.type ? "text" : props.type} defaultValue={props.value} name={props.name} id={props.id} onChange={props.onChange} ref={ref} />
        <span className="error"> {props.error} </span>
    </div>
))

export const CheckBox = React.forwardRef((props, ref) => (
    <div className={`field-control checkbox ${props.className}`}>

        <label htmlFor={props.id}>
            <input type={!props.type ? "checkbox" : props.type} defaultValue={props.value} name={props.name} id={props.id} onChange={props.onChange} ref={ref} />
            <div className="mark">
                <I icon={faCheck} />
            </div>
            <div className="text">
                {props.label}
            </div>
        </label>
    </div>
))

export const Radio = React.forwardRef((props, ref) => (

    <div className={`field-control checkbox radio ${props.className}`}>

        <label htmlFor={props.id}>
            <input type={!props.type ? "radio" : props.type} defaultValue={props.value === props.value} name={props.name} id={props.id} onChange={props.onChange} ref={ref} />
            <div className="mark">
                <I icon={faCheck} />
            </div>
            <div className="text">
                {props.label}
            </div>
        </label>
    </div>
))