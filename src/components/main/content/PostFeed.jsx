import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard.jsx";
import {Link} from "react-router-dom";

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      fetch(`http://localhost/capstone-blogsite/posts/home-feed.php`)
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
        <Link to={`/post/${post.ID_Post}`} >
          <PostCard key={post.ID_Post} post={post} />
        </Link>
        ))}
    </div>
  );
}

export default PostFeed;
