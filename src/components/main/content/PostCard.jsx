import React from 'react';
import { BsBookmarkPlus as SaveIcon } from "react-icons/bs";
import { IoIosRemoveCircleOutline as RemoveIcon } from "react-icons/io";
import { IoIosMore as MoreIcon } from "react-icons/io";

import ProfilePic from '../../../assets/profile.jpg'
import {formatDate} from "../../../utils/formatDate.js";

function PostCard( {post} ) {

  const style = {
    container: `flex flex-col font-texts max-w-[680px] pt-2 pb-2 md:pb-4 lg:pb-6 border-b border-gray-100`,

    author: `flex align-center`,
    author_photo: `w-[24px] aspect-auto object-cover rounded-full cursor-pointer`,
    author_name: `max-sm:text-xs text-sm ml-2 text-neutral-800 cursor-pointer`,
    post_date: `post_date text-neutral-600 cursor-pointer`,

    content: `flex w-full gap-6 sm:gap-12 mt-3 justify-between`,

    article: `flex flex-col grow-1` ,
    article_title: `text-base sm:text-xl font-bold mb-2 line-clamp-2 max-h-[72px] cursor-pointer`,
    article_desc: `hidden sm:block font-title text-neutral-600 line-clamp-3 max-h-[72px] cursor-pointer`,

    actions: `flex max-lg:max-w-full max-w-actions mt-2 sm:mt-5 justify-between align-center`,
    action_readTime: `text-sm text-neutral-600 my-2 hover:cursor-pointer`,
    action_icon_row: `flex hover:cursor-pointer`,
    action_icon: `h-[24px] w-[24px] m-2 text-neutral-500`,

    media: `flex items-center min-w-fit max-w-fit h-fit`,
    media_image: `h-[56px] aspect-[10/7] sm:h-[112px] sm:aspect-[1] object-cover`
  }

  return (
    <>
      <div className={style.container}>

        <div className={style.author}>
          <img src={`${ProfilePic}`}
               className={style.author_photo}
               alt="author profile picture"/>
          <span className={style.author_name}>
            {`${post.Firstname} ${post.Lastname}`} · <span className={style.post_date}>{formatDate(post.PostDate)}</span>
          </span>
        </div>

        <div className={style.content}>
          <div className={style.article}>
            <span className={style.article_title}>{post.Title}</span>
            <p className={style.article_desc}>{post.Content}</p>
          </div>

          <div className={style.media}>
            <img src={`${post.PhotoURL}`}
                 className={style.media_image}
                 alt="author profile picture"/>
          </div>
        </div>

        <div className={style.actions}>
          <span className={style.action_readTime}>11 min read</span>
          <div className={style.action_icon_row}>
            <SaveIcon className={style.action_icon}/>
            <RemoveIcon className={style.action_icon}/>
            <MoreIcon className={style.action_icon}/>
          </div>
        </div>

      </div>
    </>
  );
}

export default PostCard;