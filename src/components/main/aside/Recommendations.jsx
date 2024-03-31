import React from 'react';
import {recommendations} from "../../../data/data.js";

function Recommendations() {
  const style = {
    container: `mb-6 px-2`,

    heading: `font-semibold`,
    list_topics: `my-4 flex items-center gap-2 flex-wrap`,
    chip_topics: `bg-neutral-100 py-2 px-4 text-sm rounded-full text-neutral-800`,
    btn_see_more: `text-green-600 text-sm py-2 hover:text-black1`,
  }

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Recommended topics</h2>
      <div className={style.list_topics}>
        {recommendations.map((item, i) => (
          <button key={i}
                  className={style.chip_topics}>
            {item}
          </button>
        ))}
      </div>
      <button className={style.btn_see_more}>
        See more topics
      </button>
    </div>
  );
}

export default Recommendations;