import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import TextInput from "../../../../components/form/TextInput.jsx";
import PasswordInput from "../../../../components/form/PasswordInput.jsx";
import {useCurrentUser} from "../../../../context/UserContext.jsx";

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(" ");
  const { setCurrentUser } = useCurrentUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

    const handleSubmitSignIn = async (e) => {
      e.preventDefault();

      // check if any field is empty
      if (form.email === "" || form.password === "") {
        setError("Please fill in all the fields");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost/capstone-blogsite/login.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("User data:", data);

          if (data !== null) {
            setCurrentUser(data);
            navigate("/");
          } else {
            setError("Invalid email or password");
          }

          return data;
        }
      } catch (error) {
        console.error("Failed to sign in:", error);
        setError("Failed to sign in");
      }
    };


  const style = {
    container: `max-w-[60ch] mx-auto text-center`,
    h2: `text-4xl font-title pb-6`,
    subtitle: `mx-auto pb-12 max-w-[48ch]`,
    form: `flex flex-col gap-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 text-sm rounded-full 
                    bg-gray-900 hover:bg-gray-950 text-white mx-auto`,
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
            onSubmit={handleSubmitSignIn} >
        <TextInput form={form} setForm={setForm} type="email" title="email"/>
        <PasswordInput form={form} setForm={setForm} title="password"/>

        <button className={style.btn_continue} name={`btnLogin`}>
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