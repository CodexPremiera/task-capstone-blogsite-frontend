import React from 'react';

import Modal from "../../../components/utils/Modal.jsx";
import {IoMdClose as ExitIcon  } from "react-icons/io";
import Liker from "./Liker.jsx";



const PostLikeModal = ({modal, setModal}) => {
  const hidden = modal ? "visible opacity-100 translate-x-[0]" : "invisible opacity-0 translate-x-[100%] ";

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
              988 people liked
            </span>
            <button
              onClick={() => setModal(false)}
              className={style.btn_exit}>
              <ExitIcon/>
            </button>
          </div>

          <div className={style.liker_list}>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
            <Liker/>
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default PostLikeModal;