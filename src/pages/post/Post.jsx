import React, {useEffect, useState} from 'react'
import Header from "../../components/header/Header.jsx";
import PostContent from "./main/PostContent.jsx";
import { useParams } from 'react-router-dom';


const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = () => {
      fetch(`http://localhost/capstone-blogsite/posts/read-post.php?postId=${postId}`)
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
            setPost(data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error(`Failed to get posts: ${error}`);
        });
    }

    getPosts();
  }, [postId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header />
          <main>
            <PostContent post={post} />
            {console.log(post)}
          </main>
        </>
      )}
    </>
  )
}

export default Post;