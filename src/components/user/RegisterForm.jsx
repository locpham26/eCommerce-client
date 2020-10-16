import React from "react";
import { getRegisterError, registerUser } from "../../store/users";
import CustomForm from "./CustomForm";
import * as Yup from "yup";
import { useSelector } from "react-redux";

function RegisterForm() {
  const formName = "Register";
  const formFields = {
    name: "",
    email: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
  });
  const registerError = useSelector(getRegisterError);
  return (
    <CustomForm
      formName={formName}
      formFields={formFields}
      validationSchema={loginSchema}
      handleFormSubmit={registerUser}
      internalError={registerError}
    />
  );
}

export default RegisterForm;
