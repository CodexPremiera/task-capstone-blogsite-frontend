import React from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import Modal from "../Modal.jsx";


const Search = ({ modal, setModal }) => {
  const style = {
    modal_container: `absolute sm:relative right-4 left-4 top-1 sm:left-0 sm:top-0
                      ${modal ? "visible opacity-100" : "invisible sm:visible sm:opacity-100 opacity-0"} 
                      transition-all duration-100`,
    search_bar: `flex items-center gap-3 bg-neutral-50 px-3 rounded-full relative z-10`,
    search_icon: `text-2xl text-neural-400`,
    search_field: `bg-transparent h-10 outline-none py-2.5 pr-2 text-sm w-full placeholder-neural-500 text-neural-400`
  }

  return (
    <>
      <Modal modal={modal} setModal={setModal} >
        <div className={style.modal_container}>

          <div className={style.search_bar}>
            <span className={style.search_icon}>
              <SearchIcon />
            </span>

            <input className={style.search_field}
                   type="text"
                   placeholder="Search" />
          </div>

        </div>
      </Modal>
    </>
  );
};

export default Search;