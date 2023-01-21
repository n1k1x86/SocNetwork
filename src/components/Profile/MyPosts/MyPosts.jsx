import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from './../../../redux/state';

const MyPosts = (props) => {

    let postsElements = 
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPost.current.value;
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;