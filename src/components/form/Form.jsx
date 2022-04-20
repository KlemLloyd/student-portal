import { Formik } from "formik";
import React from "react";

import "./Form.css";

const Form = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
