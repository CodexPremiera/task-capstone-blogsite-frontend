import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {MdKeyboardArrowLeft as GoBackArrow} from "react-icons/md";
import TextInput from "../../../../components/utils/TextInput.jsx";
import PasswordInput from "../../../../components/utils/PasswordInput.jsx";


const SignUp = ({ setSignReq, setModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    birthdate: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are entered
    if (
      form.firstname === "" || form.lastname === "" || form.username === "" ||
      form.birthdate=== "" || form.gender === "" ||
      form.email === "" || form.password === ""
    ) {
      console.log("All fields are required");
    }
  };


  const style = {
    container: `max-w-[60ch] mx-auto text-center`,
    h2: `text-4xl font-title pb-6`,
    subtitle: `mx-auto pb-12 max-w-[48ch]`,
    form: `flex flex-col gap-6`,
    user_inputs: `grid grid-cols-[9fr_4fr] gap-x-8 gap-y-5 mb-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 mx-auto text-sm rounded-full 
                  bg-gray-900 hover:bg-gray-950 text-white ${loading ? "opacity-50 pointer-events-none" : ""}`,
    btn_go_back: `mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto`
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign up with email</h2>
      <p className={style.subtitle}>
        Create your account and start making your stories with us.
      </p>

      <form onSubmit={handleSubmit}
            className={style.form}>
        
        <div className={style.user_inputs}>
          <TextInput form={form} setForm={setForm} type="firstname" title="firstname"/>
          <TextInput form={form} setForm={setForm} type="birthdate" title="birthdate"/>
          
          <TextInput form={form} setForm={setForm} type="lastname" title="lastname"/>
          <TextInput form={form} setForm={setForm} type="gender" title="gender"/>
        </div>

        <TextInput form={form} setForm={setForm} type="username" title="username"/>
        <TextInput form={form} setForm={setForm} type="email" title="email"/>
        <PasswordInput form={form} setForm={setForm} title="password"/>

        <button className={style.btn_continue}>
          Continue
        </button>
      </form>

      <button
        onClick={() => setSignReq("")}
        className={style.btn_go_back}>
        <GoBackArrow/>
        All Sign-up Options
      </button>
    </div>
  );
}

export default SignUp;