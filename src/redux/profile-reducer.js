const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profilePageReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        case ADD_POST:
            let post = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                dislikesCount: 0,
            };
            state.posts.push(post);
            state.newPostText = "";

            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profilePageReducer;