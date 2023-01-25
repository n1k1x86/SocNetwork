import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let newPostText = state.profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let updatePostText = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<MyPosts 
        updatePostText={updatePostText} 
        onAddPost={addPost} 
        newPostText={newPostText}
        posts={state.profilePage.posts}
        />);
}

export default MyPostsContainer;