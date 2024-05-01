import React, {useState} from "react";
import Modal from "../../../components/utils/Modal.jsx";
import {IoMdClose as ExitIcon} from "react-icons/io";
import {useCurrentUser} from "../../../context/Context.jsx";
import samplePosts from "../../../data/samplePosts.js";
import {useForm} from "../../../context/FormContext.jsx";
import {CiSearch as SearchIcon} from "react-icons/ci";
import TitleInput from "../inputs/TitleInput.jsx";
import PhotoUrlInput from "../inputs/PhotoUrlInput.jsx";


const PublishModal = ({modal, setModal}) => {
  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";
  const { currentUser, isLoading } = useCurrentUser();
  const { form, setForm } = useForm();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handlePublish = async (e) => {


    setModal(false);
    console.log(form);
  }


  const style = {
    container: `flex justify-center items-center z-50 fixed overflow-auto bg-white p-[2rem]
                lg:pt-[5rem] lg:pb-[4rem] lg:px-[4rem] sm:rounded-sm shadows min-h-[360px] w-full h-full top-1/2 left-1/2 
                translate-x-[-50%] translate-y-[-50%] ${hidden} transition-all duration-500`,
    btn_exit: `absolute top-[2rem] right-[2rem] text-2xl hover:opacity-50`,
    content_section: `flex flex-col gap-[2rem] grow-1 max-w-[1080px]`,
    content: `flex flex-col lg:flex-row grow-1 flex-1 h-fit justify-between items-start 
              gap-[3rem] lg:gap-[4rem]`,

    preview: `flex flex-col w-full lg:w-[480px] flex-1 max-h-[400px] gap-6`,
    preview_header: `text-neutral-600 text-base sm:text-md font-bold`,

    photo_url_bar: `flex items-center bg-neutral-50 px-3 rounded-lg border relative z-10 w-full`,
    photo_url_field: `bg-transparent h-10 outline-none text-sm w-full placeholder-neural-500 text-neural-400`,


    media: `flex items-center min-w-fit max-w-fit h-fit`,
    media_image: `aspect-[10/7] h-[200px] sm:aspect-[1] object-cover bg-neutral-50 rounded-lg`,

    publish: `flex flex-col w-full lg:w-[480px] flex-1 max-h-[400px] gap-8 items-start`,
    article: `flex flex-col grow-1 gap-2` ,
    article_title: `text-base sm:text-xl text-neutral-800 font-bold line-clamp-2 max-h-[72px] cursor-pointer`,
    article_desc: `hidden sm:block text-neutral-500 line-clamp-3 max-h-[63px] text-sm cursor-pointer`,
    tag_box: `flex flex-col gap-2`,
    tag_prompt: `text-neutral-600 text-sm`,
    tag_bar: `flex items-center bg-neutral-50 px-3 rounded-lg border relative z-10 w-full`,
    tag_field: `bg-transparent h-10 outline-none text-sm w-full placeholder-neural-500 text-neural-400`,
    learn_more: `text-neutral-600 text-sm`,

    h2: `text-4xl mb-6 font-title`,
    buttons: `flex gap-3`,
    btn_publish: `text-white rounded-full px-4 py-2 text-sm font-medium bg-green_custom hover:bg-green_hover
    flex grow-1 max-w-[10rem] justify-center px-6 py-2 ${isLoading ? "opacity-50 pointer-events-none" : ""}`,

    cancel: `bg-red-800 hover:bg-red-900`,
  };

  return (
    <Modal modal={modal} setModal={setModal} >
      <div className={style.container}>
        <button
          onClick={() => setModal(false)}
          className={style.btn_exit}>
          <ExitIcon/>
        </button>

        <div className={style.content_section}>
          <h2 className={style.preview_header}>Story Preview</h2>

          <div className={style.content}>

            <div className={style.preview}>
              <PhotoUrlInput form={form} setForm={setForm} setImageError={setImageError}/>

              <img
                src={!imageError ? form.photo : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
                className={style.media_image}
                alt="Include a high-quality image in your story to make it more interesting to readers."
                onError={handleImageError}
              />
            </div>

            <div className={style.publish}>
              <article className={style.article}>
                <h3 className={style.article_title}>{form.title}</h3>
                <p className={style.article_desc}>{form.story}</p>
              </article>

              <div className={style.tag_box}>
                <p className={style.tag_prompt}>
                  Add or change topics (up to 5) so readers know what your story is about.
                </p>
                <div className={style.tag_bar}>
                  <input className={style.tag_field}
                         type="text"
                         name={'tag'}
                         placeholder="Add a topic"/>
                </div>
              </div>

              <button className={`${style.btn_publish}`}
                      onClick={handlePublish}>
                Publish
              </button>
            </div>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PublishModal;
