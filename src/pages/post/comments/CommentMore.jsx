import React, {useState} from 'react';
import {IoIosMore as MoreIcon} from "react-icons/io";
import Modal from "../../../components/utils/Modal.jsx";
import {Link} from "react-router-dom";
import {FiEdit as WriteIcon} from "react-icons/fi";
import {MdDeleteOutline as DeleteIcon} from "react-icons/md";
import {useCurrentUser} from "../../../context/Context.jsx";


function CommentMore( {commenter} ) {
  const [modal, setModal] = useState(false);
  const { currentUser, setCurrentUser } = useCurrentUser();
  const userIsAdmin = currentUser.UserType === 'Admin';

  // this logs the user out of the entire website
  const form = {
    commentId: parseInt(commenter.CommentId),
    userAccountId: parseInt(commenter.UserAccountId),
  }

  const handleDeleteComment = async (e) => {
    console.log(form);

    // fetch the user account from the backend
    fetch("http://localhost/capstone-blogsite/posts/delete-comment.php", {
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
    container: `relative`,
    action_icon: `cursor-pointer hover:text-[#242424]`,
    more_icon: `h-[24px] w-[24px]`,
    profile_modal: `${modal ? "visible opacity-100%" : "invisible opacity-0"} transition-all duration-100`,

    modal_container: `absolute w-[18rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-500`,
    write: `flex md:hidden items-center gap-1 text-gray-500`,
    menu: `flex flex-col gap-4 border-gray-300`,
    menu_items: `flex items-center gap-2 text-gray-500 hover:text-black/70`,
    sign_out: `flex flex-col pt-5 cursor-pointer hover:text-black/70`
  }

  return (
    <div className={style.container}>
      <MoreIcon className={`${style.more_icon} ${style.action_icon}`}
                onClick={() => setModal(!modal)} />

      <Modal modal={modal} setModal={setModal}>
        <div className={style.profile_modal}>

          <section className={style.modal_container}>

            <div className={style.menu}>
              {(commenter.UserAccountId === currentUser.ID_UserAccount || userIsAdmin) && (
                <>
                  <button
                        className={style.menu_items}
                        onClick={() => setModal(false)}
                        key={1}>
                    <span className="text-xl w-[24px] flex justify-center">
                      <WriteIcon/>
                    </span>
                    <h2 className="text-md">Edit</h2>
                  </button>

                  <button
                        className={style.menu_items}
                        onClick={handleDeleteComment}
                        key={2}>
                    <span className="text-2xl w-[24px] flex justify-center">
                      <DeleteIcon/>
                    </span>
                    <h2 className="text-md">Delete</h2>
                  </button>
                </>
              )}

            </div>
          </section>

        </div>
      </Modal>
    </div>
  );
}

export default CommentMore;