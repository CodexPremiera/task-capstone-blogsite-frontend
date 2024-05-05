import React, {useState} from 'react';
import {GoComment as CommentIcon} from "react-icons/go";
import PostCommentModal from "./PostCommentModal.jsx";

function PostComment( {post} ) {
  const [commentModal, setCommentModal] = useState(false);


  const handleComment = () => {
    setCommentModal(true);
  }

  const style = {
    comments: `flex gap-2 items-center cursor-pointer hover:text-[#242424]`,
    comment_icon: `h-[20px] w-[20px]`,
  }

  return (
    <>
      <button className={style.comments} onClick={handleComment}>
        <CommentIcon className={style.comment_icon}/>
        <span>{post.CommentCount}</span>
      </button>

      <PostCommentModal post={post} modal={commentModal} setModal={setCommentModal}/>
    </>
  );
}

export default PostComment;