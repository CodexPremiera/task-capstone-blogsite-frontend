import React, {useState} from 'react';
import {useCurrentUser} from "../../context/Context.jsx";
import DraftArea from "./main/DraftArea.jsx";
import WriteHeader from "./header/WriteHeader.jsx";
import {FormProvider} from "../../context/FormContext.jsx";

function Write() {
  const { currentUser } = useCurrentUser();
  const {preview, setPreview} = useState(false);
  const [form, setForm] = useState({
    title: "",
    story: "",
    author: currentUser.ID_UserAccount
  });

  const handleFormSubmit = async (e) => {
    console.log(form);
  }

  const styles = {
    container: `flex flex-row max-w-[1368px] justify-evenly mx-auto relative top-[57px] `,
    draft_area: `flex-1 max-w-[900px] py-8 px-6 `
  }

  return (
    <>
      <FormProvider form={form} setForm={setForm}
                    preview={preview} setPreview={setPreview}>
        <WriteHeader onFormSubmit={handleFormSubmit}/>

        <main className={styles.container}>
          <section className={styles.draft_area}>
            <DraftArea/>
          </section>
        </main>

      </FormProvider>
    </>
  );
}

export default Write;