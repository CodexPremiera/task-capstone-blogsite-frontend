import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import TextInput from "../../../../components/form/TextInput.jsx";
import PasswordInput from "../../../../components/form/PasswordInput.jsx";
import DateInput from "../../../../components/form/DateInput.jsx";
import DropdownInput from "../../../../components/form/DropdownInput.jsx";

import {genders} from "../../../../data/genders.js";
import {useCurrentUser} from "../../../../context/UserContext.jsx";


const SignUp = () => {
  const navigate = useNavigate();
  const {currentUser, setCurrentUser } = useCurrentUser();
  const [loading, setLoading] = useState(false);
  const [remark, setRemark] = useState(" ");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    birthdate: "",
    username: "",
    email: "",
    password: "",
  });

  const sendErrorMessage = (message) => {
    setRemark(message);
    throw new Error(message);
  }

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    // trim the form fields
    form.firstname = form.firstname.trim();
    form.lastname = form.lastname.trim();
    form.username = form.username.trim();
    form.email = form.email.trim();

    // check if all fields are entered
    if (
      form.firstname === "" || form.lastname === "" || form.birthdate=== "" || form.gender === "" ||
      form.username === "" || form.email === "" || form.password === ""
    ) {
      const errorMessage = "Some fields are left empty.";
      setRemark(errorMessage);
      console.log(errorMessage);
      return;
    }

    fetch("http://localhost/capstone-blogsite/signup.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok)
          return response.json();

        let errorMessage = "";
        switch (true) {
          case response.status === 400:
            errorMessage = "Some fields are empty texts.";
            break;
          case response.status === 409:
            errorMessage = "The email address already exists.";
            break;
          default:
            errorMessage = "Failed to connect to the server.";
            break;
        }

        sendErrorMessage(errorMessage);
        return Promise.reject(errorMessage);
      })
      .then((data) => {
        if (data !== null) {
          setCurrentUser(data);
          console.log("User has signed up successfully.");
          navigate("/");
        } else {
          sendErrorMessage("Incorrect email or password");
        }
      })
      .catch((error) => {
        console.error("Failed to sign up:", error);
      });
  };


  const style = {
    container: `max-w-[60ch] mx-auto text-center`,
    h2: `text-4xl font-title pb-6`,
    subtitle: `mx-auto pb-12 max-w-[48ch]`,
    form: `flex flex-col gap-4`,
    user_inputs: `grid grid-cols-[9fr_4fr] gap-x-8 gap-y-5 mb-4`,
    btn_continue: `flex grow w-[10rem] justify-center px-6 py-2 mt-4 mx-auto text-sm rounded-full 
                  bg-gray-900 hover:bg-gray-950 text-white ${loading ? "opacity-50 pointer-events-none" : ""}`,
    error_box: `flex mx-auto h-4 mt-3 items-center justify-center`,
    error: `text-sm font-medium text-center text-red-500`
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>Sign up with email</h2>
      <p className={style.subtitle}>
        Create your account and start making your stories with us.
      </p>

      <form onSubmit={handleSubmitSignUp}
            className={style.form}>

        <div className={style.user_inputs}>
          <TextInput form={form} setForm={setForm} type="firstname" title="firstname"/>
          <DateInput form={form} setForm={setForm} title="birthdate"/>

          <TextInput form={form} setForm={setForm} type="lastname" title="lastname"/>
          <DropdownInput form={form} setForm={setForm} type="gender" title="gender" menu={genders}/>
        </div>

        <TextInput form={form} setForm={setForm} type="username" title="username"/>
        <TextInput form={form} setForm={setForm} type="email" title="email"/>
        <PasswordInput form={form} setForm={setForm} title="password"/>

        <button className={style.btn_continue}>
          Continue
        </button>
      </form>

      <div className={style.error_box}>
        <span className={style.error}>{remark}</span>
      </div>
    </div>
  );
}

export default SignUp;