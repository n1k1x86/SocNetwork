import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13' />
        </header>
    );
}

export default Header;