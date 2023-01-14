import React from "react";
import style from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile">
                    <img src={require('./icons/profile_icon.png')} />
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs">
                    <img src={require('./icons/messages_icon.png')} />
                    <span>Messages</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/#">
                    <img src={require('./icons/news_icon.png')} />
                    <span>News</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/#">
                    <img src={require('./icons/music_icon.png')} />
                    <span>Music</span>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/#">
                    <img src={require('./icons/settings_icon.png')} />
                    <span>Settings</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navigation;