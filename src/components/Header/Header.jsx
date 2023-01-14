import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={require('./logo.png')} />
        </header>
    );
}

export default Header;