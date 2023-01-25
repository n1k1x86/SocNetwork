import React from "react";
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let dialogs = state.dialogsPage.dialogs;
    let messages = state.dialogsPage.messages;
    let newMessageText = state.dialogsPage.newMessageText;

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    };

    let onChangeMessage = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs 
        dialogs={dialogs} 
        messages={messages}
        newMessageText={newMessageText}
        sendMessage={sendMessage}
        onChangeMessage={onChangeMessage}
        />);
}

export default DialogsContainer;