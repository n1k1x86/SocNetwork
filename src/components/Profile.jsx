import React from "react";
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=dd56e26248acfe84650072905ac99ca50e9c7bec-5233263-images-thumbs&n=13' />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New posts
        </div>
        <div className={style.posts}>
          <div className={style.item}>
            Post1
          </div>
          <div className={style.item}>
            Post2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;