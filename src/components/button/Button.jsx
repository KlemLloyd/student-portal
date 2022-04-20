import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Button.css";

const Button = ({ className, handleClick, icon, otherProps, type, value }) => {
  return (
    <button className={className} onClick={handleClick} type={type}>
      {value}
      {icon && <FontAwesomeIcon icon={icon} />}{" "}
    </button>
  );
};

export default Button;
