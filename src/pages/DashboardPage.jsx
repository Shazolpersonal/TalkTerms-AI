import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { signOut } from '@/firebase/auth';
import Button from '@/components/Button';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {currentUser?.displayName || 'User'}!
        </h1>
        <Button onClick={handleLogout} variant="secondary">
          Logout
        </Button>
      </div>
      <div className="text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
          <Button onClick={() => console.log("Start Negotiation")} variant="primary" size="large">
            Start Your First Negotiation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
