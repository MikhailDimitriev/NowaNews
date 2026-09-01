import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
    ...restProps
  } = props

  return (
    <button
      className="bg-pink-400 p-3 rounded-2xl text-white w-1/2 hover:opacity-70 hover:bg-pink-600 self-center md:self-auto"
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;