import React from "react";
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        },
        onChangeMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;