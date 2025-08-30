import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-full" style={{ minHeight: 'calc(100vh - 160px)' }}>
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-[--color-text-primary] mb-4">
          Please Sign In
        </h1>
        <p className="text-md text-gray-600">
          To access your dashboard, please sign in using the "Get Started" button in the top-right corner.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
