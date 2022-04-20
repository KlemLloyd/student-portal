import { useFormikContext } from "formik";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const SubmitInput = ({ className, icon, value }) => {
  const { handleSubmit } = useFormikContext();

  const btnRef = useRef(null);

  useEffect(() => {
    const handleOnkeydown = (event) => {
      if (event.key === "Enter") btnRef.current.click();
    };

    document.addEventListener("keydown", handleOnkeydown);

    return () => document.removeEventListener("keydown", handleOnkeydown);
  }, [btnRef.current]);

  return (
    <input
      className={className}
      icon={icon}
      onClick={handleSubmit}
      ref={btnRef}
      type="submit"
      value={value}
    />
  );
};

export default SubmitInput;
