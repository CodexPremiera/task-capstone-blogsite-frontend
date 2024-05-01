import React from "react";

const PhotoUrlInput = ({ form, setForm, setImageError }) => {

  const handlePhotoChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setImageError(false);
  };

  const style = {
    container: `flex flex-col gap-2`,
    photo_url_bar: `flex items-center bg-neutral-50 px-3 rounded-lg border relative z-10 w-full`,
    photo_url_field: `bg-transparent h-10 outline-none text-sm w-full placeholder-neutral-500 text-neutral-800`,
    photo_url_label: `text-xs ml-1 text-neutral-500`
  }

  return (
    <div className={style.container}>
      <div className={style.photo_url_bar}>
        <input className={style.photo_url_field}
               type="text"
               placeholder="Paste the URL of your story's cover photo here."
               name={'photo'}
               onChange={handlePhotoChange}
        />
      </div>
      <span className={style.photo_url_label}>
        Include a high-quality image in your story to make it more interesting to readers.
      </span>
    </div>
  );
};

export default PhotoUrlInput;