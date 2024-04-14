import React from 'react';

import {Link} from "react-router-dom";


function NotFoundContent() {
  const style = {
    container: `flex flex-col max-w-[640px] md:max-w-[760px] lg:max-w-[960px] px-6 my-12 mx-auto`,
    pageNotFound: `font-text uppercase text-[1.2rem] mb-2`,
    code404: `font-title text-[#B2B2B2] text-[6rem] sm:text-[8rem] lg:text-[10rem]
          pb-[2.4rem] sm:pb-[3.2rem] lg:pb-[4rem]
          leading-[3.6rem] sm:leading-[4.8rem] lg:leading-[6rem]`,
    title: `font-title text-[#292929] text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem]`,
    message: `flex text-[#B2B2B2] text-[1.2rem] font-medium mb-12 text-neutral-900`,
    homeLink: `underline`
  }

  return (
    <div className={style.container}>
      <div className={style.pageNotFound}>Page not found</div>
      <div className={style.code404}> 404 </div>
      <div className={style.title}>Out of nothing, something.</div>
      <div className={style.message}>
        <p>You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?</p>
      </div>
      <Link className={style.homeLink} to={"/"}>Go to the home page</Link>
    </div>
  );
}

export default NotFoundContent;