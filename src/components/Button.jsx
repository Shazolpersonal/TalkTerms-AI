import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-2';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  };

  // Set primary color values if they are not defined in a global css file.
  const primary = 'bg-[#1F2937] text-white';
  const secondary = 'bg-[#F3F4F6] text-[#1F2937]';
  const finalVariantStyles = {
    primary: `${primary} hover:bg-opacity-90`,
    secondary: `${secondary} hover:bg-opacity-80`,
    outline: 'border border-[#E5E7EB] bg-transparent hover:bg-[#F3F4F6]',
  }


  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${finalVariantStyles[variant]} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
