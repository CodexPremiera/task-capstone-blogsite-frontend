import React, {useEffect, useState} from 'react';
import {PiHandsClappingThin as ClapIcon} from "react-icons/pi";
import { FaHandsClapping as ClapActiveIcon} from "react-icons/fa6";
import PostLikeModal from "./PostLikeModal.jsx";
import {useCurrentUser} from "../../../context/Context.jsx";

function PostLike( {post} ) {
  const [likeCount, setLikeCount] = useState(parseInt(post.ReactCount));
  const [likeCountModal, setLikeCountModal] = useState(false);
  const [userHasLiked, setUserHasLiked] = useState(false);
  const { currentUser } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(true);

  const form = {
    postId: parseInt(post.ID_Post),
    userAccountId: parseInt(currentUser.ID_UserAccount),
  }

  useEffect(() => {
    const userHasLiked = () => {
      fetch(`http://localhost/capstone-blogsite/posts/user-has-like.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
            setUserHasLiked(data.hasLiked === 'true');
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }

    userHasLiked();
  }, [form]);


  const handleLike = async (e) => {
    setLikeCount(userHasLiked ? likeCount - 1 : likeCount + 1);
    setUserHasLiked(!userHasLiked);
    console.log(form)

    e.preventDefault();

    // fetch the user account from the backend
    fetch("http://localhost/capstone-blogsite/posts/like-post.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
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
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Failed to like:", error);
      });
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
        {userHasLiked ?
          <ClapActiveIcon className={`${style.like_icon}`} /> :
          <ClapIcon className={`${style.like_icon}`} />
        }
      </button>
      <button>
        <span onClick={handleLikeCount}>{likeCount}</span>
      </button>

      <PostLikeModal modal={likeCountModal} setModal={setLikeCountModal} post={post} />
    </div>
  );
}

export default PostLike;