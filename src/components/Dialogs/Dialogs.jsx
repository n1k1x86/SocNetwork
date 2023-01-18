import React from "react";
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = 
        props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} ava={d.avatar}/>);

    let mesasgesElements =
        props.state.messages.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let mes = newMessage.current.value;
        alert(mes);
    };

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
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;