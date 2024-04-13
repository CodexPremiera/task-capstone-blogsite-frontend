import React from "react";
const DateInput = ({title, form, setForm }) => {

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const styles = {
    container: `flex flex-col max-w-[64ch]`,
    input: `outline-none w-full h-8 bg-transparent px-1.5 pb-[0.3rem] font-texts text-[1rem] font-title
            placeholder:text-neutral-400 placeholder:text-[1rem] placeholder:invisible border-b border-black`,
    label: `flex text-neutral-600 text-xs capitalize px-1.5 pt-[0.2rem] w-[100%]`,
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={"date"}
        name={title}
        placeholder={`${title}`}
        onChange={handleChange}
      />
      <span className={styles.label}>{title}</span>
    </div>
  );
};

export default DateInput;