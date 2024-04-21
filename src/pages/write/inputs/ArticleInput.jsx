import React, {useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import useWindowResize from "../../../hooks/useWindowResize.js";

const ArticleInput = ({ form, setForm }) => {
  const title = `story`;
  const [isFocused, setIsFocused] = useState(false);
  const isTablet = useWindowResize(900);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const styles = {
    container: `flex`,
    input: `outline-none w-full h-auto bg-transparent py-2 font-texts text-[1.2rem] ${isTablet ? 'px-4 mr-[4rem]' : 'px-2'}
            overflow-hidden placeholder:text-[1.2rem] placeholder:text-[#B3B3B1] font-title resize-none`,
    label: `flex text-[#B3B3B1] text-sm capitalize px-3 py-[0.64rem] w-[4rem] border-neutral-200 border-r text-right 
            justify-end ${isFocused ? 'visible' : 'invisible'}`,
  }

  return (
    <div className={styles.container}>
      {isTablet && <span className={styles.label}>{title}</span>}
      <TextareaAutosize
        className={styles.input}
        name={title}
        placeholder={`Tell your story...`}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default ArticleInput;