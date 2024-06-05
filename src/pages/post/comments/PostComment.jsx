import React, {useEffect, useState} from 'react';
import {GoComment as CommentIcon} from "react-icons/go";
import PostCommentModal from "./PostCommentModal.jsx";

function PostComment( {post} ) {
  const [commentModal, setCommentModal] = useState(false);
  const [commenters, setCommenters] = useState([]);

  useEffect(() => {
    const getCommenters = () => {
      fetch(`http://localhost/capstone-blogsite/posts/post-commenters.php`, {
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
            setCommenters(data);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }
    getCommenters();
  }, [post]);


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

      <PostCommentModal post={post} commenters={commenters} modal={commentModal} setModal={setCommentModal}/>
    </>
  );
}

export default PostComment;