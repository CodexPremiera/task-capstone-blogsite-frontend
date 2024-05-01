import React, {useState} from "react";
import {Link} from "react-router-dom";
import {BsMedium as MediumLogo} from "react-icons/bs";
import {PiBellLight as NotificationIcon} from "react-icons/pi";
import Modal from "../../../components/utils/Modal.jsx";
import UserModal from "../../../components/header/UserModal.jsx";
import Publish from "./Publish.jsx";
import {useForm} from "../../../context/FormContext.jsx";

const WriteHeader = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);

  const style = {
    header: ` border-neutral-200 w-full fixed z-50 bg-white`,
    header_container: `mx-auto px-[1.5rem] h-[57px] flex grow-1 max-w-[1100px] items-center justify-between font-texts`,

    left_container: `flex items-center gap-4`,
    medium_logo: `text-[2.8rem] aspect-auto fill-neutral-800`,

    right_container: `flex items-center gap-5`,
    btn_publish: `btn-green !px-3 !py-1 max-md:flex-1`,
    notification: `text-2xl text-gray-500 cursor-pointer`,

    profile: `flex items-center relative`,
    profile_pic: `w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer`,
    profile_dropdown: `text-gray-500 cursor-pointer`,
    profile_modal: `${profileModal ? "visible opacity-100%" : "invisible opacity-0"} transition-all duration-100`,
  }

  return (
    <header className={style.header} >
      <div className={style.header_container}>

        {/* left side  */}
        <div className={style.left_container}>
          <Link to={"/"}>
            <span className={style.medium_logo}>
              <MediumLogo className={`fill-neutral-800`}/>
            </span>
          </Link>
        </div>

        {/* right side  */}
        <div className={style.right_container}>

          <button className={style.btn_publish}
                  onClick={() => setPreviewModal(true)}>
            Publish
          </button>
          <Publish modal={previewModal} setModal={setPreviewModal} />

          <span className={style.notification}>
            <NotificationIcon/>
          </span>

          <div className={style.profile}>
            <img className={style.profile_pic}
                 onClick={() => setProfileModal(true)}
                 src="/profile.jpg"
                 alt="profile-img" />

            <Modal modal={profileModal} setModal={setProfileModal}>
              <div className={style.profile_modal}>
                <UserModal setModal={setProfileModal}/>
              </div>
            </Modal>
          </div>

        </div>
      </div>
    </header>
  );
};

export default WriteHeader;