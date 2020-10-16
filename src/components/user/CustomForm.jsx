import React from "react";
import { Formik, Form, Field } from "formik";
import FormTextInput from "./FormTextInput";
import { useDispatch } from "react-redux";
import FormError from "./FormError";
import FormButton from "./FormButton";

function CustomForm({
  formName,
  formFields,
  validationSchema,
  handleFormSubmit,
  internalError,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <h2>{formName} Form</h2>
      <div>
        <Formik
          initialValues={formFields}
          validationSchema={validationSchema}
          onSubmit={(data, actions) => {
            actions.setSubmitting(true);
            dispatch(handleFormSubmit(data));
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form>
              {Object.keys(values).map((key) => (
                <div key={key}>
                  <Field
                    key={key}
                    as={FormTextInput}
                    label={key}
                    placeholder={key}
                    name={key}
                    value={values[key]}
                  />
                  <FormError
                    name={errors[key]}
                    displayed={errors[key] && touched[key]}
                  />
                </div>
              ))}
              <FormButton name={formName} disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </div>
      <div>{internalError}</div>
    </>
  );
}

export default CustomForm;
