import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-[--color-text-primary]">TalkTerms AI</span>
          </div>

          {/* Navigation Links - Can be added later */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Links can go here */}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="secondary">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
