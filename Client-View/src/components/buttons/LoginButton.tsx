import React from "react";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-800 text-white px-4 py-2 rounded"
    >
      Ingresar
    </button>
  );
};

export default LoginButton;
