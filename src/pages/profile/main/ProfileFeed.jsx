import React, {useState} from 'react';
//import {Blog} from "../../../context/Context.jsx";
import {useParams} from "react-router-dom";

import ProfileHome from "./activities/ProfileHome.jsx";
import ProfileLists from "./activities/ProfileLists.jsx";
import ProfileAbout from "./activities/ProfileAbout.jsx";

import { IoIosMore as MoreIcon } from "react-icons/io";
import CallToAction from "./CallToAction.jsx";
import useWindowResize from "../../../hooks/useWindowResize.js";
import ProfilePic from "../../../assets/profile.jpg";
//import profile from "../Profile.jsx";

function ProfileFeed() {
  // const { allUsers } = Blog();
  const { userId } = useParams();
  // const getUserData = allUsers.find((user) => user.id === userId);

  const activities = [
    {
      title: "Home",
      comp: ProfileHome,
    },
    {
      title: "Lists",
      comp: ProfileLists,
    },
    {
      title: "About",
      comp: ProfileAbout,
    },
  ];

  const [currentActive, setCurrentActive] = useState(activities[0]);
  // const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const isLaptop = !useWindowResize(1024);
  const isTablet = !useWindowResize(768);

  const style = {
    profile: `flex items-end justify-between pb-5`,
    profile_info: `flex`,
    profile_photo: `w-[48px] aspect-auto object-cover rounded-full mr-5 cursor-pointer`,
    profile_user:  `flex flex-col`,
    profile_name: `text-2xl sm:text-2xl md:text-4xl lg:text-[42px] font-semibold capitalize tracking-[-0.01em]`,
    follower_count: `text-gray_text text-sm leading-5 mt-1`,

    call_to_action: `flex items-center`,
    more_actions: `w-[25px] h-[48px] ml-4`,

    activities_ribbon: `flex items-center gap-8 border-b border-gray-300 mt-6 mb-[3rem]`,
    activity_tab: `pb-4 text-sm text-black_main`,
  }

  return (
    <div className="">
      <div className={style.profile}>
        <div className={style.profile_info}>
          {isTablet && (
            <img src={`${ProfilePic}`}
                 className={style.profile_photo}
                 alt="author profile picture"/>
          )}
          <div className={style.profile_user}>
            <h2 className={style.profile_name}>
              {/*{getUserData?.username}*/} Ashley Ken Comandao
            </h2>
            {isTablet && (
              <span className={style.follower_count}>892 Followers</span>
            )}
          </div>
        </div>

        <div className={style.call_to_action}>
          {(isLaptop && !isTablet) && (
            <CallToAction />
          )}
          <MoreIcon className={style.more_actions} />
        </div>
      </div>

      {isTablet && (
        <CallToAction />
      )}

      <div className={style.activities_ribbon}>
        {activities.map((activity, i) => (
          <div key={i}
               className={style.activity_tab  + ` ${activity.title === currentActive.title ? "border-b border-gray-500" : "" }`}>
            <button onClick={() => setCurrentActive(activity)}>
              {activity.title}
            </button>
          </div>
        ))}
      </div>

      <currentActive.comp
        /*getUserData={getUserData}*/
        setEditModal={setEditModal}
      />
    </div>
  );
}

export default ProfileFeed;