import React from "react";

import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { FiEdit as WriteIcon } from "react-icons/fi";

import {Link, useNavigate} from "react-router-dom";
import {useCurrentUser} from "../../../context/Context.jsx";


const MoreModal = ({ setModal, post }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useCurrentUser();
  const userIsAdmin = currentUser.UserType === 'Admin';

  // this logs the user out of the entire website
  const form = {
    postId: parseInt(post.ID_Post),
    userAccountId: parseInt(currentUser.ID_UserAccount),
  }

  const handleDeletePost = async (e) => {
    console.log(form);

    // fetch the user account from the backend
    fetch("http://localhost/capstone-blogsite/posts/delete-post.php", {
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
        console.error("Failed to delete:", error);
      });
  }

  const style = {
    modal_container: `absolute w-[18rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-500`,
    write: `flex md:hidden items-center gap-1 text-gray-500`,
    menu: `flex flex-col gap-4 border-gray-300`,
    menu_items: `flex items-center gap-2 text-gray-500 hover:text-black/70`,
    sign_out: `flex flex-col pt-5 cursor-pointer hover:text-black/70`
  }

  return (
    <section className={style.modal_container}>

      <div className={style.menu}>
        {(post.ID_UserAccount === currentUser.ID_UserAccount || userIsAdmin) && (
          <>
            <Link to={`/dashboard`}
                    className={style.menu_items}
                    onClick={() => setModal(false)}
                    key={1}>
              <span className="text-xl w-[24px] flex justify-center">
                <WriteIcon />
              </span>
              <h2 className="text-md">Edit</h2>
            </Link>

            <Link to={`/`}
                  className={style.menu_items}
                  onClick={handleDeletePost}
                  key={2}>
              <span className="text-2xl w-[24px] flex justify-center">
                <DeleteIcon />
              </span>
              <h2 className="text-md">Delete</h2>
            </Link>
          </>
        )}

      </div>
    </section>
  );
};

export default MoreModal;