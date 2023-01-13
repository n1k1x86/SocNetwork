import React from "react";
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=dd56e26248acfe84650072905ac99ca50e9c7bec-5233263-images-thumbs&n=13' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;