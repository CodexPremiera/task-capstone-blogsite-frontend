import React from 'react';
import PostFeed from "./content/PostFeed.jsx";
import Aside from "./aside/Aside.jsx";

import useWindowResize from "../../hooks/useWindowResize.js";
import useElementHeight from "../../hooks/useElementHeight.js";
import useAsideTop from "../../hooks/useAsideTop.js";


function Content() {
  const isTablet = useWindowResize(1024);
  const [asideHeight, asideRef] = useElementHeight();
  const asideTop = useAsideTop(asideHeight, 57);


  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    post_feed: `flex-1 max-w-[728px] min-h-[1080px] py-12 px-6`,
    aside: `hidden lg:flex flex-1 max-w-fit h-full pt-12 sticky top-[${asideTop}px] relative border-l border-gray-200`
  }

  return (
    <div className={style.container}>
      <section className={style.post_feed}>
        <PostFeed/>
        <PostFeed/>
        <PostFeed/>
      </section>

      {isTablet && (
        <section className={style.aside} ref={asideRef}>
          <Aside/>
        </section>
      )}
    </div>
  );
}

export default Content;