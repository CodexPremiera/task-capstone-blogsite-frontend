import React from 'react';

import Modal from "../../../components/utils/Modal.jsx";
import {IoMdClose as ExitIcon  } from "react-icons/io";
import Commenter from "./Commenter.jsx";
import CommentWriter from "./CommentWriter.jsx";

const PostCommentModal = ({modal, setModal}) => {
  const hidden = modal ? "visible opacity-100 translate-x-[0%]" : "invisible opacity-0 translate-x-[100%]";

  const style = {
    container: `flex justify-center z-50 fixed overflow-auto bg-white p-[1rem] md:p-[2rem] sm:rounded-sm shadows 
                min-h-[540px] w-full h-full md:max-w-[540px] top-1/2 right-0 translate-y-[-50%] 
                ${hidden} transition-all duration-500 no-scrollbar`,
    content: `flex flex-col grow px-4`,
    header: `flex justify-between align-center pb-10 text-[#242424]`,
    btn_exit: `text-2xl hover:opacity-50 `,
    comment_count: `text-md font-bold `,
    commenter_list: `flex flex-col overflow-x-hidden overflow-y-scroll no-scrollbar`,
  };

  return (
    <Modal modal={modal} setModal={setModal} isBlurBg={true}>
      <div className={style.container}>
        <div className={style.content}>

          <div className={style.header}>
            <span className={style.comment_count}>
              Comments (20)
            </span>
            <button
              onClick={() => setModal(false)}
              className={style.btn_exit}>
              <ExitIcon/>
            </button>
          </div>

          <div className={style.commenter_list}>
            <CommentWriter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
            <Commenter/>
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default PostCommentModal;