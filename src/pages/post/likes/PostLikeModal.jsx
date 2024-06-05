import React, {useEffect, useState} from 'react';

import Modal from "../../../components/utils/Modal.jsx";
import {IoMdClose as ExitIcon  } from "react-icons/io";
import Liker from "./Liker.jsx";
import {Link} from "react-router-dom";
import PostCard from "../../../components/main/content/PostCard.jsx";


const PostLikeModal = ({modal, setModal, post}) => {
  const hidden = modal ? "visible opacity-100 translate-x-[0]" : "invisible opacity-0 translate-x-[100%] ";
  const [likers, setLikers] = useState([]);

  useEffect(() => {
    const getLikers = () => {
      fetch(`http://localhost/capstone-blogsite/posts/post-likers.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((response) => {
          switch (true) {
            case response.ok:
              return response.json();

            default:
              break;
          }
        })
        .then((data) => {
          if (data !== null) {
            setLikers(data);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }
    getLikers();
  }, [post]);


  const style = {
    container: `flex justify-center z-50 fixed overflow-auto bg-white p-[1rem] md:p-[2rem]  
                sm:rounded-sm shadows min-h-[540px] w-full h-full md:max-w-[540px] top-1/2 right-0 translate-y-[-50%] 
                ${hidden} transition-all duration-500 no-scrollbar`,
    content: `flex flex-col grow px-6`,
    header: `flex justify-between align-center pb-4`,
    btn_exit: `text-2xl hover:opacity-50 `,
    like_count: `text-md font-bold `,
    liker_list: `flex flex-col mt-4 gap-8 overflow-x-hidden overflow-y-scroll no-scrollbar`,
  };

  return (
    <Modal modal={modal} setModal={setModal} isBlurBg={true}>
      <div className={style.container}>

        <div className={style.content}>
          <div className={style.header}>
            <span className={style.like_count}>
              {post.ReactCount} people liked
            </span>
            <button
              onClick={() => setModal(false)}
              className={style.btn_exit}>
              <ExitIcon/>
            </button>
          </div>

          <div className={style.liker_list}>
            {likers.map(liker => (
              <Liker key={liker.UserAccountId} liker={liker}/>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default PostLikeModal;