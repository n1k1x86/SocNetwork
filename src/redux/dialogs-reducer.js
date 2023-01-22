const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Nikita",
            avatar: "https://avatars.mds.yandex.net/i?id=1b6fcfd5a62772c25635ca0393a418121bc83c02-7716570-images-thumbs&n=13"
        },
        {
            id: 2,
            name: "Nika",
            avatar: "https://avatars.mds.yandex.net/i?id=fae357602c13904fc76662d6b6097f5fbcc2c9a5-8195016-images-thumbs&n=13"
        },
        {
            id: 3,
            name: "Ilya",
            avatar: "https://avatars.mds.yandex.net/i?id=f5fdb283e472c5fb1f57f32483a692e9b350a107-7985106-images-thumbs&n=13"
        },
        {
            id: 4,
            name: "Josh",
            avatar: "https://coolsen.ru/wp-content/uploads/2021/12/7-20211209_001231.jpg"
        },
        {
            id: 5,
            name: "Jake",
            avatar: "https://avatars.mds.yandex.net/i?id=6eb54f9116cf5743a1f07c0c1bc85b6347cd96a9-3614495-images-thumbs&n=13"
        },
        {
            id: 6,
            name: "Anonim",
            avatar: "https://i.ytimg.com/vi/Ubi_PxmzmfI/maxresdefault.jpg"
        },
    ],
    messages: [
        { id: 1, message: 'Hi! How are your feelings ?' },
        { id: 2, message: 'Where is our books ?' },
        { id: 3, message: 'What about this film ?' }
    ],
    newMessageText: "New Message",
}


const dialogsPageReducer = (state = initialState, action) => {
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