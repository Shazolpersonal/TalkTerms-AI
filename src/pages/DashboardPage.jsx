import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
          <Button onClick={() => navigate('/negotiate')} variant="primary" size="large">
            Start Your First Negotiation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
