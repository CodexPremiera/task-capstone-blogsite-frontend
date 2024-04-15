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
  const [error, setError] = useState(" ");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    birthdate: "",
    username: "",
    email: "",
    password: "",
  });

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
      setError("Please fill in all the fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/capstone-blogsite/signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (response.status === 400) {
        setError("Fields cannot be empty.");
        return;
      }

      if (response.status === 409) {
        setError("Email address already exists.");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data);

        if (data.error)
          setError(data.error);
        else {
          setCurrentUser(data);
          navigate("/");
        }

        return data;
      }

    } catch (error) {
      console.error("Failed to sign up:", error);
      setError("Failed to sign up");
    }
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
        <span className={style.error}>{error}</span>
      </div>
    </div>
  );
}

export default SignUp;