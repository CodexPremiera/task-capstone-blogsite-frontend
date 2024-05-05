import React, {useState} from 'react';
import {PiHandsClappingThin as ClapIcon} from "react-icons/pi";
import PostLikeModal from "./PostLikeModal.jsx";

function PostLike( {post} ) {
  const [likeCount, setLikeCount] = useState(0);
  const [likeCountModal, setLikeCountModal] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  }

  const handleLikeCount = () => {
    setLikeCountModal(true);
  }

  const style = {
    likes: `flex gap-2 items-center cursor-pointer hover:text-[#242424]`,
    like_icon: `h-[24px] w-[24px]`,
  }

  return (
    <div className={style.likes}>
      <button onClick={handleLike} >
        <ClapIcon className={`${style.like_icon}`} />
      </button>
      <button>
        <span onClick={handleLikeCount}>{likeCount}</span>
      </button>

      <PostLikeModal modal={likeCountModal} setModal={setLikeCountModal}  />
    </div>
  );
}

export default PostLike;