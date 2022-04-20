import {
  faEnvelope,
  faLock,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";

import "./App.css";

import { Form, FormField, SubmitInput } from "./components/form";
import { loginValidationSchema as validationSchema } from "./config/validation";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [title, setTitle] = useState("");

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  // console.log("theme", theme);

  useEffect(() => {
    const fechData = async () => {
      // From Server Or Some Place.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setTitle("Student Portal");
    };

    fechData();
  }, []);

  const handleSubmit = (formData) => console.log(formData);

  return (
    <>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          icon={faEnvelope}
          label="Enter Your Email"
          name="email"
          placeholder="Email"
          type="text"
        />

        <FormField
          icon={faLock}
          label="Enter Your Password"
          name="password"
          placeholder="Password"
          type="password"
        />

        <SubmitInput className="login-btn" icon={faSignIn} value="Login" />
      </Form>
    </>
  );
}

export default App;
