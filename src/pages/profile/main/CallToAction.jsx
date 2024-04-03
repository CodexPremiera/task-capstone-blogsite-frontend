import React from 'react';
import {TbMailPlus as SubscribeIcon} from "react-icons/tb";

function CallToAction() {
  const style = {
    container: `flex align-center gap-2 text-sm leading-5`,
    btn_follow: `btn-green max-md:flex-1`,
    btn_subscribe: `btn-green !py-2 !px-2.5`,
    icon_subscribe: `w-[20px] h-[20px] aspect-auto`,
  }

  return (
    <div className={style.container}>
      <button className={style.btn_follow}>
        Follow
      </button>
      <button className={style.btn_subscribe}>
        <SubscribeIcon className={style.icon_subscribe}/>
      </button>
    </div>
  );
}

export default CallToAction;