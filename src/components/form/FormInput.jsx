import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

import "./Form.css";

import defaultStyles from "../../config/styles";

const FormInput = ({
  className,
  icon,
  label,
  onChange,
  type,
  width = "100%",
  ...otherProps
}) => {
  const [passwordRevealed, setPasswordRevealed] = useState(false);

  const inputElement = useRef(null);

  const handleRevealPassword = () => {
    setPasswordRevealed(!passwordRevealed);
    if (!passwordRevealed) type = "text";
    else type = "password";

    inputElement.current.type = type;
  };

  return (
    <div className="form-input-container">
      {icon && (
        <FontAwesomeIcon
          className="form-input-icon"
          color={defaultStyles.colors.tomato}
          icon={icon}
          size="lg"
        />
      )}

      <label>
        {label}
        <input
          className={className ? className : "form-input-field"}
          onChange={onChange}
          ref={inputElement}
          type={type}
          {...otherProps}
        />
      </label>

      {type == "password" && (
        <FontAwesomeIcon
          className="password-eye"
          color={defaultStyles.colors.tomato}
          icon={passwordRevealed ? faEyeLowVision : faEye}
          onClick={handleRevealPassword}
          size="lg"
          title={
            passwordRevealed
              ? "Click To Hide Password"
              : "Click To Reveal Password"
          }
        />
      )}
    </div>
  );
};

export default FormInput;
