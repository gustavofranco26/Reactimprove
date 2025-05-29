import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;