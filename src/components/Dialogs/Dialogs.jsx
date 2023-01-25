import React from "react";
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = 
        props.dialogs.map(d => <Dialog name={d.name} id={d.id} ava={d.avatar}/>);

    let mesasgesElements =
        props.messages.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage()
    };

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        props.onChangeMessage(text);
    }

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
                <div className={style.newMessageTextArea}>
                    <textarea onChange={onChangeMessage} ref={newMessage} value={props.newMessageText} />
                </div>
                <div className={style.addNewMessage}>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;