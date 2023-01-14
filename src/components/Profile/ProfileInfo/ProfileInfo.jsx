import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.backImg}>
                <img src='https://avatars.mds.yandex.net/i?id=dd56e26248acfe84650072905ac99ca50e9c7bec-5233263-images-thumbs&n=13' />
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;