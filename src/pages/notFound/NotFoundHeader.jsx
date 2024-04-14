import React from "react";


import { Link } from "react-router-dom";
import Logo from "../../assets/medium-logo.png";

const NotFoundHeader = () => {
  const style = {
    header: `border-b border-neutral-200 w-full shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]
             z-50 bg-white transition-all duration-300`,
    container: `px-6 mx-auto max-w-[640px] md:max-w-[760px] lg:max-w-[1020px] 
                h-[65px] flex grow-1 items-center justify-between font-texts`,

    logo: `h-[1.55rem] aspect-auto fill-neutral-800`,
  }

  return (
    <header className={style.header}>
      <div className={style.container}>

        <Link to={"/"}>
          <img
            className={style.logo} aria-label={`Logo`} title={`Logo`} src={`${Logo}`} alt={"logo"}
          />
        </Link>

      </div>
    </header>
  );
};

export default NotFoundHeader;