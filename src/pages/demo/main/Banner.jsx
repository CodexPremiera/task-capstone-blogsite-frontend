import React from "react";

const Banner = () => {
  const style = {
    wrapper: `bg-banner border-b border-black`,
    container: `w-standard py-[5rem] flex flex-col items-start`,
    h1: `font-title text-[3rem] text-[4.5rem] sm:text-[5rem] lg:text-[6rem] mb-9 
          leading-[3rem] leading-[4.4rem] sm:leading-[5rem] lg:leading-[6rem]`,
    subtitle: `flex max-w-[28rem] text-2xl font-medium leading-7 mb-12 text-neutral-900`,
    btn_start: `btn-black !text-xl !px-12`
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.h1}>
          Stay curious.
        </h1>
        <p className={style.subtitle}>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className={style.btn_start}>
          Start reading
        </button>
      </div>
    </div>
  );
};

export default Banner;