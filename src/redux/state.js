let rerenderEntireTree = () => {
    console.log("State was changed");
};

let state = {
    dialogsPage: {
        dialogs: [],
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
        newPostText: "New Post",
    },

    users: [
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
            name: "Anonymous",
            avatar: "https://i.ytimg.com/vi/Ubi_PxmzmfI/maxresdefault.jpg"
        },
    ],
    
    sideBar: {
        friends: [],
    },
};

for (let i = 0; i < 3; i++){
    state.sideBar.friends[i] = state.users[i];    
};

for (let i = 0; i < 5; i++){
    state.dialogsPage.dialogs[i] = state.users[i];
};

export const addPost = (postMessage) => {

    let post = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        dislikesCount: 0,
    };

    state.profilePage.posts.push(post);

    state.profilePage.newPostText = "";

    rerenderEntireTree(state);
};

export const updatePostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;