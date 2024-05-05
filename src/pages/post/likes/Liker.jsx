import React from 'react';
import ProfilePic from "../../../assets/profile.jpg";

function Liker( ) {

  const style = {
    container: ``,
    liker: `flex align-center justify-between`,
    profile: `flex gap-3 mr-8`,
    profile_info: `flex flex-col`,
    liker_photo: `w-[40px] aspect-auto object-cover rounded-full cursor-pointer`,
    liker_name: `my-auto text-base font-bold text-neutral-800 cursor-pointer`,
    liker_desc: `my-auto text-xs text-neutral-800 cursor-pointer line-clamp-1 max-h-6`,
    btn_follow: `text-white rounded-full h-8 my-auto px-4 py-1 text-sm font-medium bg-green_custom hover:bg-green_hover`,
  }

  return (
    <div className={style.liker}>
      <div className={style.profile}>
        <img src={`${ProfilePic}`}
             className={style.liker_photo}
             alt="liker profile picture"/>

        <div className={style.profile_info}>
          <span className={style.liker_name}>
            Ashley Ken Comandao
          </span>
          <span className={style.liker_desc}>
            Decent Programmer. Great Data Engineer. Lazy Traveller.
            Decent Programmer. Great Data Engineer. Lazy Traveller.
          </span>
        </div>
      </div>
      <button className={style.btn_follow}>
        Follow
      </button>
    </div>
  );
}

export default Liker;