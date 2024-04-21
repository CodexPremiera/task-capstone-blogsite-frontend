import React, {useState} from 'react';

import TitleInput from "../inputs/TitleInput.jsx";
import ArticleInput from "../inputs/ArticleInput.jsx";
import {useForm} from "../../../context/FormContext.jsx";


function DraftArea() {
  const {form, setForm, preview, setPreview} = useForm();

  const style = {
    container: `flex flex-col`,
    profile_name: `text-2xl sm:text-2xl md:text-4xl lg:text-[42px] font-semibold capitalize tracking-[-0.01em]`,

    form: `flex flex-col gap-2`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 text-sm rounded-full 
                    bg-gray-900 hover:bg-gray-950 text-white mx-auto`,
  }

  return (
    <div className={style.container}>
      <form className={style.form}>
        <TitleInput form={form} setForm={setForm} />
        <ArticleInput form={form} setForm={setForm} />
      </form>
    </div>
  );
}

export default DraftArea;