import React from "react";
import { loginUser, getLoginError } from "./../../store/users";
import CustomForm from "./CustomForm";
import * as Yup from "yup";
import { useSelector } from "react-redux";

function LoginForm() {
  const formName = "Login";
  const formFields = {
    email: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
  });
  const loginError = useSelector(getLoginError);
  return (
    <>
      <CustomForm
        formName={formName}
        formFields={formFields}
        validationSchema={loginSchema}
        handleFormSubmit={loginUser}
        internalError={loginError}
      />
    </>
  );
}

export default LoginForm;
