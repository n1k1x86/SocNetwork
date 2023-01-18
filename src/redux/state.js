let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Nikita' },
            { id: 2, name: 'Nika' },
            { id: 3, name: 'Ilya' },
            { id: 4, name: 'Josh' },
            { id: 5, name: 'Jake' },
            { id: 6, name: 'Anonymous' }
        ],

        messages: [
            { id: 1, message: 'Hi! How are your feelings ?' },
            { id: 2, message: 'Where is our books ?' },
            { id: 3, message: 'What about this film ?' }
        ],
    },

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you ?', likesCount: 10, dislikesCount: 4 },
            { id: 2, message: 'It\'s my first post ! I\'m fine !', likesCount: 23, dislikesCount: 2 }
        ],
    },
};


export default state;