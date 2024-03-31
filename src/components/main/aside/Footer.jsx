import React from 'react';
import { footerLinks } from "../../../data/data.js";
import {Link} from "react-router-dom";

function Footer() {
  const style = {
    container: `pb-6 px-2`,

    list_topics: `my-4 flex items-center gap-1.5 flex-wrap`,
    chip_topics: `text-xs text-gray_text`,
  }

  return (
    <div className={style.container}>
      <div className={style.list_topics}>
        {footerLinks.map((item, i) => (
          <Link to={"/"}
                className={style.chip_topics}
                key={i} >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;