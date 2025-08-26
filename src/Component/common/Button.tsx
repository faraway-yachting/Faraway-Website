import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Button styles defined directly in component
const buttonStyles = {
  primary: "btn-grad text-white px-3 lg:px-6 py-3 text-base md:text-lg font-sourceSansPro font-bold rounded-lg transition hover:cursor-pointer",
  secondary: "btn-grad text-white text-xs md:text-sm lg:text-base font-sourceSansPro font-bold px-2 lg:px-5 py-2 rounded-lg transition hover:cursor-pointer",
  outline: "btn-grad text-zink px-3 lg:px-4 xl:px-7 py-2 text-base md:text-lg rounded-lg font-sourceSansPro hover:cursor-pointer transition",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // Use the local button styles
  const buttonClasses = className 
    ? `${buttonStyles[variant]} ${className}`
    : buttonStyles[variant];
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href}>
        <button 
          className={buttonClasses}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </Link>
    );
  }
  
  // Otherwise render as regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
