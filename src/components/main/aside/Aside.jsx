import React from 'react';
import Recommendations from "./Recommendations.jsx";
import Footer from "./Footer.jsx";

function Aside() {
  const style = {
    container: `w-[320px] ml-4 xl:ml-8 mr-4 `,

    discoverHalf: `border-b border-gray-300 pb-6 px-2`,
    heading: `font-semibold`,
    list_topics: `my-4 flex items-center gap-2 flex-wrap`,
    chip_topics: `bg-neutral-100 py-2 px-4 text-sm rounded-full text-neutral-800`,
    btn_see_more: `text-green-600 text-sm py-2 hover:text-black1`,

    chip_actions: `text-md text-black1 hover:text-gray-950`,
  }

  return (
    <aside className={style.container}>
      <Recommendations />
      <Recommendations />
      <Recommendations />
      <Recommendations />
      <Footer />
    </aside>
  );
}

export default Aside;