import React from "react";
import style from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {

    let path = `/dialog/${props.id}`;

    return (
        <div className={style.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;