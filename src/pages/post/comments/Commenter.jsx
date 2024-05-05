import React from 'react';
import ProfilePic from "../../../assets/profile.jpg";
import {IoIosMore as MoreIcon} from "react-icons/io";
import {PiHandsClappingThin as ClapIcon} from "react-icons/pi";

function Commenter( ) {

  const style = {
    container: `flex flex-col gap-3 text-[#242424] border-b pb-6 mb-8 mx-2`,
    upper_bar: `flex w-full`,
    commenter: `flex gap-3 mr-8 grow align-center`,
    commenter_info: `flex flex-col text-sm`,
    commenter_photo: `w-[32px] h-[32px] aspect-auto object-cover rounded-full cursor-pointer`,
    commenter_name: `cursor-pointer`,
    commenter_desc: `text-xs text-[#6B6B6B]`,
    more_icon: `h-[20px] w-[20px] cursor-pointer`,

    comment: `font-content`,

    lower_bar: `flex justify-between align-center mt-1`,
    likes: `flex gap-1 items-center`,
    like_icon: `h-[20px] w-[20px] cursor-pointer`,
  }

  return (
    <div className={style.container}>

      <div className={style.upper_bar}>
        <div className={style.commenter}>
          <img src={`${ProfilePic}`}
               className={style.commenter_photo}
               alt="commenter profile picture"/>

          <div className={style.commenter_info}>
            <span className={style.commenter_name}> Ashley Ken Comandao </span>
            <span className={style.commenter_desc}> 1 month ago </span>
          </div>
        </div>

        <MoreIcon className={`${style.more_icon} ${style.action_icon}`}/>
      </div>

      <div className={style.comment}>
        <p>
          Good job with the article! Just an heads-up, the link for "User Testing" is pointing to Trymata.
        </p>
      </div>

      <div className={style.lower_bar}>
        <div className={style.likes}>
          <button>
            <ClapIcon className={`${style.like_icon}`}/>
          </button>
          <span>10</span>
        </div>
        <button>
          Reply
        </button>
      </div>


    </div>
  );
}

export default Commenter;