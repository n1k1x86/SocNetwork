import React from "react";
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = 
        props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} ava={d.avatar}/>);

    let mesasgesElements =
        props.state.messages.map(m => <Message message={m.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.item}>
                    Dialogs
                </div>
               { dialogsElements }
            </div>
            <div>
                { mesasgesElements }
            </div>
        </div>
    );
}

export default Dialogs;