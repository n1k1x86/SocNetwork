import React from "react";
import style from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {

    let path = `/dialog/${props.id}`;

    return (
        <div className={style.item}>
            <NavLink to={path}>
                <img src={props.ava}/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;