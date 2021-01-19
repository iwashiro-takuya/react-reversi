import React from 'react';

interface ButtonProps {
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
