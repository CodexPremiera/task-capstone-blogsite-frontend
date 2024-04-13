import React, { useState } from "react";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../../firebase/firebase.js";
import { useNavigate } from "react-router-dom";

import TextInput from "../../../../components/form/TextInput.jsx";
import PasswordInput from "../../../../components/form/PasswordInput.jsx";

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(" ");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( form.email === "" || form.password === "" ) {
      setError("Please fill in all the fields");
    }
    else {
      setError(" ");
    }
  };

  const style = {
    container: `max-w-[60ch] mx-auto text-center`,
    h2: `text-4xl font-title pb-6`,
    subtitle: `mx-auto pb-12 max-w-[48ch]`,
    form: `flex flex-col gap-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 text-sm rounded-full 
                    bg-gray-900 hover:bg-gray-950 text-white mx-auto ${loading ? "opacity-50 pointer-events-none" : ""}`,
    btn_go_back: `mt-3 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto`,
    error_box: `flex mx-auto h-4 mt-3 items-center justify-center`,
    error: `text-sm font-medium text-center text-red-500`,
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign in with email</h2>
      <p className={style.subtitle}>
        Enter your account and resume making your stories with us.
      </p>

      <form className={style.form}
            onSubmit={handleSubmit}>
        <TextInput form={form} setForm={setForm} type="email" title="email"/>
        <PasswordInput form={form} setForm={setForm} title="password"/>

        <button className={style.btn_continue}>
          Continue
        </button>
      </form>

      <div className={style.error_box}>
        <span className={style.error}>{error}</span>
      </div>
    </div>
  );
}

export default SignIn;