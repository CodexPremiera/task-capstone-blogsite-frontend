import React from "react";

const Modal = ({ children, modal, setModal, isBlurBg = false }) => {
  return (
    <>
      <div onClick={() => setModal(false)}
           className={`fixed inset-0 z-10 transition-all duration-500
                      ${modal ? "visible opacity-100" : "invisible" + " opacity-0"} 
                      ${isBlurBg ? "backdrop-blur-md bg-white/85" : "backdrop-blur-none bg-white/5 "}`} />
      {children}
    </>
  );
};

export default Modal;
