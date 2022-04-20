import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <p className="error">{error}</p>;
};

export default ErrorMessage;
