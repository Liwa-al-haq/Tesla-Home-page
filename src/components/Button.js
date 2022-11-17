import React from "react";
import "./Button.css";
const Button = ({ imp, text, link }) => {
  return (
    <div
      className={`button ${imp == "secondary" ? "button_white" : ""}`}
    >
      <a href={link}>{text}</a>
    </div>
  );
};

export default Button;
