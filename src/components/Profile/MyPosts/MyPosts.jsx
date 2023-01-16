import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you ?', likesCount: 10, dislikesCount: 4},
        {id: 2, message: 'It\'s my first post ! I\'m fine !', likesCount: 23, dislikesCount: 2},
    ];

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} dislikesCount={postsData[0].dislikesCount} />
                <Post message={postsData[0].message} likesCount={postsData[1].likesCount} dislikesCount={postsData[1].dislikesCount} />
            </div>
        </div>
    );
}

export default MyPosts;