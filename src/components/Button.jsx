import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 ease-in-out';

  const variantStyles = {
    primary: 'bg-[--color-action-blue] text-white hover:bg-blue-600 focus:ring-[--color-action-blue]',
    secondary: 'bg-transparent text-[--color-action-blue] border border-[--color-action-blue] hover:bg-blue-50 focus:ring-[--color-action-blue]',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
