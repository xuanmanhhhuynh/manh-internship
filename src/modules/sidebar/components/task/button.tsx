import React, { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
}

function Button({ children }: IButtonProps) {
  return <button className="w-full text-left pl-3 py-3 flex">{children}</button>;
}

export default Button;
