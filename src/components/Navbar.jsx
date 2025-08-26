import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { signOut } from '@/firebase/auth';
import Button from './Button';

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-[--color-text-primary]">TalkTerms AI</span>
          </Link>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <span className="mr-4">Welcome, {currentUser.displayName}</span>
                <Button onClick={handleLogout} variant="secondary">
                  Logout
                </Button>
                <img
                  src={currentUser.photoURL}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
                <Link to="/login">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
