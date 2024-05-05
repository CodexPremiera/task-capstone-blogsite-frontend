import React, {useState} from 'react';
import {useCurrentUser} from "../../context/Context.jsx";
import WriteHeader from "./header/WriteHeader.jsx";
import {FormProvider} from "../../context/FormContext.jsx";
import TitleInput from "./inputs/TitleInput.jsx";
import ContentInput from "./inputs/ContentInput.jsx";

function Write() {
  const { currentUser } = useCurrentUser();
  const {preview, setPreview} = useState(false);
  const [form, setForm] = useState({
    title: "Learning to Learn: How AI and Humans Learn",
    content: "LLMs have surprised the world with their abilities. Sometimes, though, these models fail spectacularly in reasoning tasks. So there is active research to improve these models both at the architectural level and at",
    photo: "",
    author: currentUser.ID_UserAccount
  });

  const styles = {
    container: `flex flex-row max-w-[1368px] justify-evenly mx-auto relative top-[57px] `,
    draft_area: `flex flex-1 max-w-[900px] py-8 px-6 `,
    profile_name: `text-2xl sm:text-2xl md:text-4xl lg:text-[42px] font-semibold capitalize tracking-[-0.01em]`,

    form: `flex flex-col gap-2`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 text-sm rounded-full 
                    bg-gray-900 hover:bg-gray-950 text-white mx-auto`,
  }

  return (
    <>
      <FormProvider form={form} setForm={setForm}
                    preview={preview} setPreview={setPreview} >
        <WriteHeader />

        <main className={styles.container}>
          <section className={styles.draft_area}>
            <form className={styles.form}>
              <TitleInput form={form} setForm={setForm}/>
              <ContentInput form={form} setForm={setForm}/>
            </form>
          </section>
        </main>

      </FormProvider>
    </>
  );
}

export default Write;