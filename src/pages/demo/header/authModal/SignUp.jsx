import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {MdKeyboardArrowLeft as GoBackArrow} from "react-icons/md";
import Input from "../../../../components/utils/Input.jsx";


const SignUp = ({ setSignReq, setModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are entered
    if (
      form.username === "" ||
      form.email === "" ||
      form.password === "" ||
      form.rePassword === ""
    ) {
      console.log("All fields are required");
      return;
    }

    // Check if password matches rePassword
    if (form["password"] !== form["rePassword"]) {
      console.log("Your passwords are not matching!!");
    }
  };


  const style = {
    container: `size text-center`,
    h2: `text-3xl font-title`,
    subtitle: `max-w-[54ch] mx-auto py-[3rem]`,
    form: `flex flex-col gap-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 mx-auto text-sm rounded-full 
                  bg-gray-900 hover:bg-gray-950 text-white ${loading ? "opacity-50 pointer-events-none" : ""}`,
    btn_go_back: `mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto`
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign up with email</h2>
      <p className={style.subtitle}>
        Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      </p>

      <form onSubmit={handleSubmit}
            className={style.form} >
        <Input form={form} setForm={setForm} type="username" title="username"/>
        <Input form={form} setForm={setForm} type="email" title="email"/>
        <Input form={form} setForm={setForm} type="password" title="password"/>
        <Input form={form} setForm={setForm} type="password" title="rePassword"/>

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