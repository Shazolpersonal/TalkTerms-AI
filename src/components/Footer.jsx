import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-base text-[#6b7280]">&copy; {currentYear} TalkTerms AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#6b7280] hover:text-[#4b5563]">Privacy</a>
            <a href="#" className="text-[#6b7280] hover:text-[#4b5563]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
