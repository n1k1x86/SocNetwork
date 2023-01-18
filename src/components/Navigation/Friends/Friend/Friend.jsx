import React from "react";
import style from './Friend.module.css';
import { NavLink } from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={style.item}>
            <NavLink to="/#">
                <img src={props.ava_url} />
                {props.name}
            </NavLink>
        </div>
    );
}

export default Friend;