import React, {useEffect, useState} from 'react';
import { nav } from "../../../data/data.js";
import Logo from '../../../assets/medium-logo.png'
import { Link } from "react-router-dom";

import AuthModal from "./authModal/AuthModal.jsx";

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("");

  /**
   * Listen to scrolling and activate when scrolled down enough. Apply color changes to `header wrapper`
   * and `get started button` when the page is scrolled down and vice versa
   * */
  useEffect(() => {
    const scrollTripwire = () => {
      window.scrollY > 480 ? setIsActive(true) : setIsActive(false);
    }
    window.addEventListener("scroll", scrollTripwire);
  }, []);

  const style = {
    header_bar: `border-b border-black sticky top-0 z-50 ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`,
    container: `w-standard h-[75px] flex grow-1 items-center justify-between font-texts`,
    logo: `h-[1.6rem]`,
    nav_menu: `flex items-center gap-5`,
    nav_list: `hidden text-sm md:flex items-center gap-6`,
    btn_sign_in: `hidden text-sm sm:flex items-center gap-5`,
    btn_get_started: `${isActive ? "btn-green" : "btn-black"} transition-all duration-500`
  }

  return (
    <header className={style.header_bar}>
      <div className={style.container}>

        <Link to={"/"}>
          <img
            className={style.logo} aria-label={`Logo`} title={`Logo`} src={`${Logo}`} alt={"logo"}
          />
        </Link>

        <nav className={style.nav_menu}>
          <div className={style.nav_list}>
            {nav.map((link, index) => (
              <Link key={index} to={link.path} aria-label={link.title}>{link.title}</Link>
            ))}
          </div>

          <button className={style.btn_sign_in}
                  onClick={() => {
                    setModal(true);
                    setCreateUser(false);
                    setSignReq("");
                  }}
                  aria-label={`Sign in`}>
            Sign In
          </button>

          <AuthModal modal={modal} setModal={setModal}
                     createUser={createUser} setCreateUser={setCreateUser}
                     signReq={signReq} setSignReq={setSignReq} />

          <button className={style.btn_get_started}
                  onClick={() => {
                    setModal(true);
                    setCreateUser(true);
                    setSignReq("");
                  }}
                  aria-label={`Get Started`}>
            Get started
          </button>
        </nav>

      </div>
    </header>
  );
};

export default DemoHeader;