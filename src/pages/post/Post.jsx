import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ProfilePic from "../../assets/profile.jpg";
import {formatDate} from "../../utils/formatDate.js";

import {BsBookmarkPlus as SaveIcon} from "react-icons/bs";
import {IoShareOutline as ShareIcon} from "react-icons/io5";
import {IoIosMore as MoreIcon} from "react-icons/io";
import { BsEye as ReadIcon } from "react-icons/bs";
import { BsEyeFill as ReadActiveIcon } from "react-icons/bs";

import Header from "../../components/header/Header.jsx";
import Loading from "../../components/utils/Loading.jsx";
import PostComment from "./comments/PostComment.jsx";
import PostLike from "./likes/PostLike.jsx";


const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userHasRead = true;


  useEffect(() => {
    const getPosts = () => {
      fetch(`http://localhost/capstone-blogsite/posts/read-post.php?postId=${postId}`)
        .then((response) => {
          switch (true) {
            case response.ok:
              return response.json();

            default:
              //  sendErrorMessage("Failed to connect to the server.");
              break;
          }
        })
        .then((data) => {
          if (data !== null) {
            setPost(data[0]);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }

    getPosts();
  }, [postId]);


  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    content: `flex flex-col max-w-[728px] min-h-[1080px] relative top-[57px] py-12 px-6 gap-8`,
    article_title: `text-[2.5rem] text-[#242424] leading-[3rem] font-texts font-bold cursor-pointer mb-2`,

    author_bar: `flex align-center gap-3`,
    author_photo: `w-[44px] aspect-auto object-cover rounded-full cursor-pointer`,
    author_details: `flex flex-col text-texts`,
    author_name: `flex gap-2 max-sm:text-xs text-[#242424] cursor-pointer`,
    author_follow: `text-green_custom hover:underline`,
    article_times: `flex gap-2 text-sm text-[#6B6B6B]`,

    action_bar: `flex justify-between text-[#6B6B6B] py-3 mb-2 border-y`,
    action_left: `flex gap-8 items-center`,
    likes: `flex gap-2 items-center`,
    action_right: `flex gap-8`,

    action_icon: `cursor-pointer hover:text-[#242424]`,
    save_icon: `h-[22px] w-[22px]`,
    share_icon: `h-[24px] w-[24px]`,
    more_icon: `h-[24px] w-[24px]`,

    reads: `flex gap-2 items-center cursor-pointer hover:text-[#242424]`,
    read_icon: `h-[20px] w-[20px]`,

    article: `font-title text-[#242424] text-[1.25rem] leading-[2rem]`,
  }


  return (isLoading) ? <Loading /> : (
    <>
      <Header />
      <main className={style.container}>
        <section className={style.content}>
          <h1 className={style.article_title}>
            {post.Title}
          </h1>

          <div className={style.author_bar}>
            <img src={`${ProfilePic}`}
                 className={style.author_photo}
                 alt="author profile picture"/>
            <div className={style.author_details}>
              <div className={style.author_name}>
                <span>{`${post.Firstname} ${post.Lastname}`}</span>
                <span>·</span>
                <span className={style.author_follow}> Follow </span>
              </div>
              <div className={style.article_times}>
                <span>11 min read</span>
                <span>·</span>
                <span> {formatDate(post.PostDate)} </span>
              </div>
            </div>
          </div>

          <div className={style.action_bar}>
            <div className={style.action_left}>
              <PostLike post={post} />
              <PostComment post={post} />
              <div className={style.reads}>
                {userHasRead ?
                  <ReadActiveIcon className={style.read_icon}/> :
                  <ReadIcon className={style.read_icon}/>
                }
                <span>{post.ReadCount}</span>
              </div>
            </div>

            <div className={style.action_left}>
              <SaveIcon className={`${style.save_icon} ${style.action_icon}`}
                        onClick={() => {
                        }}/>
              <ShareIcon className={`${style.share_icon} ${style.action_icon}`}
                         onClick={() => {
                         }}/>
              <MoreIcon className={`${style.more_icon} ${style.action_icon}`}
                        onClick={() => {
                        }}/>
            </div>
          </div>

          <article className={style.article}>
            <p>{post.Content}</p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Post;