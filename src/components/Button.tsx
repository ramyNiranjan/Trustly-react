import React from "react";

type Props = {
  title?: string;
  onClick: () => void;
};

const Button = ({ title, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary p-3.5 border-none outline-none text-black hover:bg-black hover:text-white transition-colors"
    >
      {title}
    </button>
  );
};

export default Button;
