import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';

const LoginModal = ({ isOpen, onClose }) => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      onClose(); // Close modal on successful login
    } catch (error) {
      console.error("Failed to sign in with Google", error);
      // Optionally, show an error message to the user
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full z-50"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-2xl font-bold text-center text-[--color-text-primary] mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Sign in to continue your journey with TalkTerms AI.
        </p>
        <div className="flex flex-col space-y-4">
          <Button
            variant="primary"
            onClick={handleGoogleSignIn}
            className="w-full justify-center"
          >
            Sign in with Google
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full justify-center"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
