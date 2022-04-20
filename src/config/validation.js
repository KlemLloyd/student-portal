import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .matches(/^(?=.*[A-Z])/, "Must Contain At Least One Uppercase!")
    .matches(/^(?=.*[a-z])/, "Must Contain At Least One Lowercase!")
    .matches(/^(?=.*\d)/, "Must Contain At Least One Digit!")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Must Contain At Least One Special Character!"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Be At Least 8 Characters Long, And Not Include Spaces!"
    )
    .label("Password"),
});
