import React from 'react';
import ProfilePic from "../../../assets/profile.jpg";
import CallToAction from "./CallToAction.jsx";


function ProfileInfo() {
  const style = {
    container: `w-[320px] ml-4 xl:ml-8 mr-4 `,

    profile: `pb-6 px-2`,
    profile_photo: `w-[88px] aspect-auto object-cover rounded-full cursor-pointer`,
    profile_name: `font-semibold leading-5 mt-4 cursor-pointer`,
    follower_count: `text-gray_text text-sm leading-5 mt-1`,
    bio: `text-gray_text text-sm leading-5 mt-3`,

    call_to_action: `pt-6 pb-10`
  }

  return (
    <section className={style.container}>
      <div className={style.profile}>
        <img src={`${ProfilePic}`}
             className={style.profile_photo}
             alt="author profile picture"/>
        <h2 className={style.profile_name}>Ashley Ken Comandao</h2>
        <span className={style.follower_count}>892 Followers</span>
        <p className={style.bio}>Data Scientist, Computational Physicist and Game Developer.</p>

        <div className={style.call_to_action}>
          <CallToAction />
        </div>
      </div>

    </section>
  );
}

export default ProfileInfo;