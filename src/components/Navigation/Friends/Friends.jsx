import React from "react";
import Friend from "./Friend/Friend";
import style from './Friends.module.css';

const Friends = (props) => {

    let friendsElements = 
        props.friends.map(f => <Friend id={f.id} name={f.name} ava_url={f.avatar}/>)

    return (
        <div>
            <div className={style.friends}>
                <span>Friends</span>
            </div>
            <div>
                { friendsElements }
            </div>
        </div>
    );
}

export default Friends;