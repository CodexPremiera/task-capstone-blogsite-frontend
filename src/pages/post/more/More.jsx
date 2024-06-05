import React, {useState} from 'react';
import {IoIosMore as MoreIcon} from "react-icons/io";
import Modal from "../../../components/utils/Modal.jsx";
import MoreModal from "./MoreModal.jsx";


function More( {post} ) {
  const [modal, setModal] = useState(false);

  const style = {
    container: `relative`,
    action_icon: `cursor-pointer hover:text-[#242424]`,
    more_icon: `h-[24px] w-[24px]`,

    profile_modal: `${modal ? "visible opacity-100%" : "invisible opacity-0"} transition-all duration-100`,
  }

  return (
    <div className={style.container}>
      <MoreIcon className={`${style.more_icon} ${style.action_icon}`}
                onClick={() => setModal(!modal)} />

      <Modal modal={modal} setModal={setModal}>
        <div className={style.profile_modal}>
          <MoreModal setModal={setModal} post = {post} />
        </div>
      </Modal>
    </div>
  );
}

export default More;