import React, {useState} from 'react';
import ProfilePic from "../../../assets/profile.jpg";
import TextareaAutosize from "react-textarea-autosize";
import useWindowResize from "../../../hooks/useWindowResize.js";

function CommentWriter( ) {
  const [isFocused, setIsFocused] = useState(false);
  const isTablet = useWindowResize(900);
  const [textAreaValue, setTextAreaValue] = useState('');


  const style = {
    container: `flex flex-col gap-3 text-[#242424] p-6 mx-2 mt-2 mb-12 rounded-lg shadows `,
    commenter: `flex w-full gap-3 mr-8 grow align-center`,
    commenter_info: `flex items-center text-sm`,
    commenter_photo: `w-[32px] h-[32px] aspect-auto object-cover rounded-full cursor-pointer`,
    commenter_name: `cursor-pointer`,
    commenter_desc: `text-xs text-[#6B6B6B]`,
    more_icon: `h-[20px] w-[20px] cursor-pointer`,

    input: `outline-none w-full h-auto min-h-[6rem] bg-transparent py-2 font-texts text-base ${isTablet ? 'px-4' +
            'mr-[4rem]' : 'px-2'} overflow-hidden placeholder:text-[1.2rem] placeholder:text-[#B3B3B1] font-title resize-none`,

    lower_bar: `flex justify-end gap-2 align-center mt-1`,
    likes: `flex gap-4 items-center`,
    like_icon: `h-[20px] w-[20px] cursor-pointer`,

    btn_cancel: `mr-2`,
    btn_send: `text-white rounded-full h-8 my-auto px-4 py-1 text-sm font-medium bg-green_custom hover:bg-green_hover`,
  }

  function handleChange(event) {
    setTextAreaValue(event.target.value);
  }

  function handleCancel() {
    setTextAreaValue('');
  }

  return (
    <div className={style.container}>

      <div className={style.commenter}>
        <img src={`${ProfilePic}`}
             className={style.commenter_photo}
             alt="commenter profile picture"/>

        <div className={style.commenter_info}>
          <span className={style.commenter_name}> Ashley Ken Comandao </span>
        </div>
      </div>

      <TextareaAutosize
        className={style.input}
        placeholder={`What are your thoughts...`}
        value={textAreaValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <div className={style.lower_bar}>
        <button className={style.btn_cancel} onClick={handleCancel}>
          Cancel
        </button>
        <button className={style.btn_send}>
          Publish
        </button>
      </div>


    </div>
  );
}

export default CommentWriter;