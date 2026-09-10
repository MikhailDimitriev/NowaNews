import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = (props: ButtonProps) => {
  const {
    children,
    ...restProps
  } = props

  return (
    <button
      className="bg-pink-400 p-3 rounded-2xl text-white hover:opacity-70 hover:bg-pink-600 self-center md:self-auto"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;