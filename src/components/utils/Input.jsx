import React from "react";

const Input = ({ type, title, form, setForm }) => {

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col gap- max-w-[64ch]">
      <input
        className=" border-b border-black outline-none w-full h-8 bg-transparent px-1"
        type={type}
        name={title}
        placeholder={`${title}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;