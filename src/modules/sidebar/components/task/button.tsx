import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="w-full text-left pl-3 py-3 flex">{children}</button>
  );
}

export default Button;
