import React from "react";
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a>Profile</a>
            </div>
            <div className={style.item}>
                <a>Messages</a>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navigation;