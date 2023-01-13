import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message="Hi, how are you ?" likesCount='10' dislikesCount='4'/>
                <Post message="It's my first post ! I'm fine !" likesCount='23' dislikesCount='2'/>
            </div>
        </div>
    );
}

export default MyPosts;