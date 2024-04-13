import React, {useState} from "react";
import { BsEye as ShowIcon } from "react-icons/bs";
import { BsEyeSlash  as HideIcon } from "react-icons/bs";

const PasswordInput = ({title, form, setForm }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const styles = {
    container: `flex flex-col max-w-[64ch] `,
    input_area: `flex w-[100%] items-end border-b border-black px-1.5 pb-[0.3rem]`,
    input: `outline-none w-full h-8 bg-transparent font-texts text-[1rem] font-title
            placeholder:text-neutral-400 placeholder:text-[1rem]`,
    visibilityIcon: `flex mb-1 cursor-pointer`,
    label: `flex text-neutral-600 text-[0.72rem] capitalize px-1.5 pt-[0.2rem]`,
  }

  return (
    <div className={styles.container}>
      <div className={styles.input_area}>
        <input
          className={styles.input}
          type={isPasswordShown ? "text" : "password"}
          name={title}
          onChange={handleChange}
        />
        <div className={styles.visibilityIcon} onClick={showPassword}>
          {isPasswordShown ?
            <HideIcon/> : <ShowIcon/>}
        </div>
      </div>
      <span className={styles.label}>{title}</span>
    </div>
  );
};

export default PasswordInput;