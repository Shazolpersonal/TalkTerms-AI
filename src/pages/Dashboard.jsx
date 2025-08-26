import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
                Welcome, {currentUser?.displayName || 'User'}!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                You're all set. Let's get started.
            </p>
            <div className="mt-8">
                <Button variant="primary" className="text-lg px-8 py-4">
                    Start New Negotiation
                </Button>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
