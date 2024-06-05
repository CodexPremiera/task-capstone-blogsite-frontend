import React, { useEffect, useState } from 'react';
import { PiHandsClappingThin as ClapIcon } from "react-icons/pi";
import { FaHandsClapping as ClapActiveIcon } from "react-icons/fa6";
import { useCurrentUser } from "../../../context/Context.jsx";

function CommentLike({ commenter }) {
  const [likeCount, setLikeCount] = useState(commenter.ReactCount);
  const [userHasLiked, setUserHasLiked] = useState(false);
  const { currentUser } = useCurrentUser();

  const form = {
    commentId: parseInt(commenter.CommentId),
    userAccountId: parseInt(currentUser.ID_UserAccount),
  };

  useEffect(() => {
    const userHasLiked = async () => {
      try {
        const response = await fetch("http://localhost/capstone-blogsite/posts/user-has-like-comment.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          const data = await response.json();
          setUserHasLiked(data.hasLiked === 'true');
          setLikeCount(data.likeCount);
        } else {
          console.error("Failed to fetch like status");
        }
      } catch (error) {
        console.error(`Failed to get comment like: ${error}`);
      }
    };

    userHasLiked();
  }, [form]);

  const handleLike = async (e) => {
    e.preventDefault();

    setLikeCount((prevLikeCount) => userHasLiked ? prevLikeCount - 1 : prevLikeCount + 1);
    setUserHasLiked(!userHasLiked);

    try {
      const response = await fetch("http://localhost/capstone-blogsite/posts/like-comment.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to like comment");
      }
    } catch (error) {
      console.error("Failed to like:", error);
    }
  };

  const style = {
    likes: `flex gap-2 items-center cursor-pointer hover:text-[#242424]`,
    like_icon: `h-[24px] w-[24px]`,
  };

  return (
    <div className={style.likes}>
      <button onClick={handleLike}>
        {userHasLiked ?
          <ClapActiveIcon className={`${style.like_icon}`} /> :
          <ClapIcon className={`${style.like_icon}`} />
        }
      </button>
      <span>{likeCount}</span>
    </div>
  );
}

export default CommentLike;
