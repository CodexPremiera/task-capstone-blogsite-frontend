import Modal from "../../../components/utils/Modal.jsx";
import {IoMdClose as ExitIcon} from "react-icons/io";
import {AiOutlineMail as EmailLogo} from "react-icons/ai";
import React from "react";
import {useCurrentUser} from "../../../context/Context.jsx";


const PublishModal = ({modal, setModal}) => {
  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";
  const {isLoading} = useCurrentUser();

  const style = {
    container: `flex justify-center z-50 fixed overflow-auto bg-white pt-[5rem] pb-[4rem] px-[4rem] sm:rounded-sm shadows 
                min-h-[360px] w-full h-full md:w-[640px] md:h-fit top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
                ${hidden} transition-all duration-500`,
    btn_exit: `absolute top-[2rem] right-[2rem] text-2xl hover:opacity-50`,
    content: `flex flex-col grow-1 justify-center items-center gap-[1.5rem]`,
    h2: `text-4xl mb-6 font-title`,
    buttons: `flex gap-3`,
    btn: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 mx-auto text-sm rounded-full text-white 
          ${isLoading ? "opacity-50 pointer-events-none" : ""}`,

    publish: `bg-gray-900 hover:bg-gray-950 `,
    cancel: `bg-red-800 hover:bg-red-900`,
  };

  return (
    <Modal modal={modal} setModal={setModal} isBlurBg={true}>
      <div className={style.container}>
        <button
          onClick={() => setModal(false)}
          className={style.btn_exit}>
          <ExitIcon/>
        </button>

        <div className={style.content}>
          <h2 className={style.h2}>
            Confirm Publish
          </h2>
          <div className={style.buttons}>
            <button className={`${style.btn} ${style.publish}`}
                    onClick={() => setModal(false)}>
              Publish
            </button>
            <button className={`${style.btn} ${style.cancel}`}
                    onClick={() => setModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PublishModal;
