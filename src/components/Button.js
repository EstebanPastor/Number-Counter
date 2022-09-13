import React from "react";

const Button = ({ text, clickButton, handlerClick }) => {
  return (
    <button className={clickButton ? 'button-click' : 'restart-button'} onClick={handlerClick}>
      {text}
    </button>
  );
};

export default Button;
