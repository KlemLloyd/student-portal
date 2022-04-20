import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import FormInput from "./FormInput";

const FormField = ({ name, className, width, ...otherProps }) => {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

  const handleChange = (event) => setFieldValue(name, event.target.value);

  return (
    <div className="form-field">
      <FormInput
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;
