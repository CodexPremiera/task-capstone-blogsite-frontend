import React from 'react';
import PostFeed from "./content/PostFeed.jsx";
import Aside from "./aside/Aside.jsx";

import useWindowResize from "../../hooks/useWindowResize.js";


function Content() {
  const isTablet = useWindowResize(1024);


  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    post_feed: `flex-1 max-w-[728px] min-h-[1080px] relative top-[57px] py-12 px-6`,
    aside: `hidden lg:flex flex-1 max-w-fit h-full relative top-[57px] py-12 sticky relative border-l border-gray-200`
  }

  return (
    <div className={style.container}>
      <section className={style.post_feed}>
        <PostFeed/>
      </section>

      {isTablet && (
        <section className={style.aside}>
          <Aside/>
        </section>
      )}
    </div>
  );
}

export default Content;