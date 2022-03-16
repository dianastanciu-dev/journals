import React from "react";
// Button.css should only contain button styles used in this component, and should only be used here
import "./Button.css";

// this component should be re-usable (meaning it should receive it's action on the "onClick" property, it should only contain styling)

const STYLES = ["btn--primary", "btn--outline"]; //css classes

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // if no STYLE, apply style 1
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  // if no SIZE, apply size 1
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
