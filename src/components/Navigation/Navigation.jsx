import React from "react";
import style from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
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