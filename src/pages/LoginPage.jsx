import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/Icon';
import { signInWithGoogle } from '@/firebase/auth';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { user } = await signInWithGoogle();
    if (user) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Login to TalkTerms</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
        >
          <Icon id="google" className="w-6 h-6 mr-2" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
