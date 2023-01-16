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

    let messagesData = [
        { id: 1, message: 'Hi! How are your feelings ?' },
        { id: 2, message: 'Where is our books ?' },
        { id: 3, message: 'What about this film ?' },
    ];

    let dialogsData = [
        { id: 1, name: 'Nikita' },
        { id: 2, name: 'Nika' },
        { id: 3, name: 'Ilya' },
        { id: 4, name: 'Josh' },
        { id: 5, name: 'Jake' },
        { id: 6, name: 'Anonymous' },
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
}

export default Dialogs;