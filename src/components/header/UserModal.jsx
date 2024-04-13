import React from "react";

import { LiaUserSolid as ProfileIcon } from "react-icons/lia";
import { MdOutlineLocalLibrary as LibraryIcon } from "react-icons/md";
import { BiSpreadsheet as StoriesIcon } from "react-icons/bi";
import { HiOutlineChartBar as StatsIcon } from "react-icons/hi";
import { LiaEditSolid as WriteIcon } from "react-icons/lia";

//import { Blog } from "../../context/Context.jsx";
import { Link } from "react-router-dom";
import sampleUsers from "../../data/sampleUsers.js";
import {secretEmail} from "../../secretEmail.js";
import {useCurrentUser} from "../../context/UserContext.jsx";


const UserModal = (setModal) => {
  const currentUser = useCurrentUser();

  const modalMenuItems = [
    {
      title: "Profile",
      icon: <ProfileIcon />,
      path: `/profile/${currentUser.uid}`,
    },
    {
      title: "Library",
      icon: <LibraryIcon />,
      path: "/library",
    },
    {
      title: "Stories",
      icon: <StoriesIcon />,
      path: "/stories",
    },
    {
      title: "Stats",
      icon: <StatsIcon />,
      path: "/stats",
    },
  ];

  const style = {
    modal_container: `absolute w-[18rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-500`,
    write: `flex md:hidden items-center gap-1 text-gray-500`,
    menu: `flex flex-col gap-4 border-b border-gray-300 pb-5`,
    menu_items: `flex items-center gap-2 text-gray-500 hover:text-black/70`,
    sign_out: `flex flex-col pt-5 cursor-pointer hover:text-black/70`
  }

  return (
    <section className={style.modal_container}>
      <Link to="/write"
            className={style.write}>
        <span className="text-3xl">
          <WriteIcon/>
        </span>
        <span className="text-sm mt-2">Write</span>
      </Link>

      <div className={style.menu}>
        {modalMenuItems.map((link, i) => (
          <Link to={link.path}
                className={style.menu_items}
                onClick={() => setModal(false)}
                key={i}>
            <span className="text-2xl">{link.icon}</span>
            <h2 className="text-md">{link.title}</h2>
          </Link>
        ))}
      </div>

      <button className={style.sign_out} name={"btn_out"}>
        Sign Out
        <span className="text-sm">
          {secretEmail(currentUser?.email)}
        </span>
      </button>
    </section>
  );
};

export default UserModal;