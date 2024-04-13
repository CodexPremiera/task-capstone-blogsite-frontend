import React from "react";
const DropdownInput = ({title, form, setForm, menu }) => {

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const styles = {
    container: `flex flex-col max-w-[64ch]`,
    input: `outline-none w-full h-8 bg-transparent pl-1 pr-2 pb-[0.3rem] font-texts text-[1rem] font-title
            placeholder:text-neutral-400 placeholder:text-[1rem] placeholder:invisible border-b border-black`,
    label: `flex text-neutral-600 text-xs capitalize px-1.5 pt-[0.2rem] w-[100%]`,
  }

  return (
    <div className={styles.container}>
      <select className={styles.input}
              name={title}
              onChange={handleChange}
              value={form[title] || ""} >

        <option value=""></option>
        {menu.map(
          (item, index) =>
            (<option key={index} value={item}>{item}</option>)
        )}
      </select>

      <span className={styles.label}>{title}</span>
    </div>
  );
};

export default DropdownInput;