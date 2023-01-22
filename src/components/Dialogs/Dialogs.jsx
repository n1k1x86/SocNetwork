import React from "react";
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = 
        props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} ava={d.avatar}/>);

    let mesasgesElements =
        props.state.messages.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    };

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
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
                    <textarea onChange={onChangeMessage} ref={newMessage} value={props.state.newMessageText} />
                </div>
                <div className={style.addNewMessage}>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;