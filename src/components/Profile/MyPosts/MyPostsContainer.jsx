import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action);
        },
        onAddPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;