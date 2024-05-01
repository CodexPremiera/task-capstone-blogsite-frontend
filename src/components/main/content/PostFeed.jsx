import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard.jsx";
// import samplePosts from "../../../data/samplePosts.js";
// import {useNavigate} from "react-router-dom";

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      fetch("http://localhost/capstone-blogsite/posts/home-feed.php")
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
            setPosts(data);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }

    getPosts();
  }, []);




  return (
    <div className={`flex flex-col gap-6 lg:gap-8`}>
      {posts.map(post => (
        <PostCard post={post} />
        ))}
    </div>
  );
}

export default PostFeed;
