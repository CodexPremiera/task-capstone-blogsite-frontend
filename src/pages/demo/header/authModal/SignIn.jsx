import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import TextInput from "../../../../components/form/TextInput.jsx";
import PasswordInput from "../../../../components/form/PasswordInput.jsx";
import {useCurrentUser} from "../../../../context/UserContext.jsx";

const SignIn = () => {
  const navigate = useNavigate();
  const {remark, setRemark} = useState(" ");
  const { setCurrentUser } = useCurrentUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const sendErrorMessage = (message) => {
    setRemark(message);
    throw new Error(message);
  }

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    // check if any field is empty
    if (form.email === "" || form.password === "") {
      const errorMessage = "Some fields are left empty.";
      setRemark(errorMessage);
      console.log(errorMessage);
      return;
    }

    fetch("http://localhost/capstone-blogsite/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => {
        switch (true) {
          case response.ok:
            return response.json();

          case response.status === 400:
            sendErrorMessage("Some fields are empty texts.");
            break;

          default:
            sendErrorMessage("Failed to connect to the server.");
            break;
        }
      })
      .then((data) => {
        if (data !== null) {
          setCurrentUser(data);
          console.log("User has signed in successfully.");
          window.localStorage.setItem("currentUser", JSON.stringify(data));
          navigate("/");
        } else {
          sendErrorMessage("Incorrect email or password");
        }
      })
      .catch((error) => {
        console.error("Failed to sign in:", error);
      });
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
        <span className={style.error}>{remark}</span>
      </div>
    </div>
  );
}

export default SignIn;