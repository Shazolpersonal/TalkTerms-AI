import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import LoginModal from './LoginModal';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirect to landing page after logout
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-[--color-text-primary]">
                TalkTerms AI
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="secondary">Dashboard</Button>
                  </Link>
                  <Button variant="primary" onClick={handleLogout}>Logout</Button>
                  <img
                    src={currentUser.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </>
              ) : (
                <>
                  <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Login</Button>
                  <Button variant="primary" onClick={() => setIsModalOpen(true)}>Sign Up</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
