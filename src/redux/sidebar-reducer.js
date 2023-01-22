let initialState = {
    friends: [
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
    ],
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;