const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 4,
                message: state.newMessageText,
            }
            state.messages.push(message);
            state.newMessageText = "";

            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;

            return state;
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default dialogsPageReducer;