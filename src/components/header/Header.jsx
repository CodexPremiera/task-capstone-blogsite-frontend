import React, {useState} from "react";

import { BsMedium as MediumLogo } from "react-icons/bs";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { LiaEditSolid as WriteIcon } from "react-icons/lia";
import { PiBellLight as NotificationIcon } from "react-icons/pi";

import { Link } from "react-router-dom";
import Modal from "../utils/Modal.jsx";
import UserModal from "./UserModal.jsx";
import Search from "./Search.jsx";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const style = {
    header: `border-b border-neutral-200 w-full fixed z-50 bg-white`,
    header_container: `mx-[1.5rem] h-[57px] flex grow-1 items-center justify-between font-texts`,

    left_container: `flex items-center gap-4`,
    medium_logo: `text-[2.8rem] aspect-auto fill-neutral-800`,

    right_container: `flex items-center gap-8`,
    search: `flex sm:hidden text-3xl text-gray-500 cursor-pointer`,

    write: `hidden md:flex items-center gap-1.5 text-gray-500`,
    write_icon: `text-2xl text-gray-500`,
    write_text: `text-sm my-auto`,

    notification: `text-2xl text-gray-500 cursor-pointer`,

    profile: `flex items-center relative`,
    profile_pic: `w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer`,
    profile_dropdown: `text-gray-500 cursor-pointer`,
    profile_modal: `${modal ? "visible opacity-100%" : "invisible opacity-0"} transition-all duration-100`,
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

          <Search modal={searchModal} setModal={setSearchModal} />
        </div>

        {/* right side  */}
        <div className={style.right_container}>
          <span className={style.search}
                onClick={() => setSearchModal(true)} >
              <SearchIcon />
          </span>

          <Link to="/write"
                className={style.write}>
            <span className={style.write_icon}>
              <WriteIcon/>
            </span>
            <span className={style.write_text}>Write</span>
          </Link>

          <span className={style.notification}>
            <NotificationIcon/>
          </span>

          <div className={style.profile}>
            <img className={style.profile_pic}
                 onClick={() => setModal(true)}
                 src="/profile.jpg"
                 alt="profile-img" />

            <Modal modal={modal} setModal={setModal}>
              <div className={style.profile_modal}>
                <UserModal setModal={setModal}/>
              </div>
            </Modal>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;