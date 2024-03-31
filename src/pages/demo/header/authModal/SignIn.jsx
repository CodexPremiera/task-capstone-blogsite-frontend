import React, { useState } from "react";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../../firebase/firebase.js";
import { useNavigate } from "react-router-dom";

import {MdKeyboardArrowLeft as GoBackArrow} from "react-icons/md";
import Input from "../../../../components/Input.jsx";

const SignIn = ({setSignReq}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.email === "" || form.password === ""
    ) {
      console.log("All fields are required!!!");
    }

    setLoading(false);
  };

  const style = {
    container: `size text-center`,
    h2: `text-3xl font-title`,
    subtitle: `max-w-[54ch] mx-auto py-[3rem]`,
    form: `flex flex-col gap-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 text-sm rounded-full 
                    bg-gray-900 hover:bg-gray-950 text-white mx-auto ${loading ? "opacity-50 pointer-events-none" : ""}`,
    btn_go_back: `mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto`
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign in with email</h2>
      <p className={style.subtitle}>
        Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      </p>

      <form className={style.form}
            onSubmit={handleSubmit} >
        <Input form={form} setForm={setForm} type="email" title="email"/>
        <Input form={form} setForm={setForm} type="password" title="password"/>

        <button className={style.btn_continue}>
          Continue
        </button>
      </form>

      <button
        onClick={() => setSignReq("")}
        className={style.btn_go_back}>
        <GoBackArrow/>
        All Sign-in Options
      </button>
    </div>
  );
}

export default SignIn;