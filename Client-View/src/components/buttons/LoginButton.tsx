import React from "react";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-darkBlue text-darkOrange px-4 py-2 rounded font-comfortaa"
    >
      Ingresar
    </button>
  );
};

export default LoginButton;
