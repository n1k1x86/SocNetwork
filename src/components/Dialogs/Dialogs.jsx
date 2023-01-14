import React from "react";
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    );
}

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

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <Dialog name='Nikita' id='1' />
                <Dialog name='Nika' id='2' />
                <Dialog name='Ilya' id='3' />
                <Dialog name='Josh' id='4' />
                <Dialog name='Jake' id='5' />
                <Dialog name='Anonymous' id='6' />
            </div>
            <div className={style.messages}>
                <Message message="Hi! How are your feelings ?"/>
                <Message message="Where is our books ?"/>
                <Message message="What about this film ?"/>
            </div>
        </div>
    );
}

export default Dialogs;