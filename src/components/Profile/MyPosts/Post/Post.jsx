import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://i.pinimg.com/736x/5c/a6/27/5ca627a76902db086225b0de28a64c41.jpg" />
            { props.message }
            <br />
            Likes: { props.likesCount } Dislikes: { props.dislikesCount }
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    );
}

export default Post;