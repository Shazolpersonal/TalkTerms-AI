import React from 'react';
// import { useNavigate } from 'react-router-dom'; // No longer needed
// import { useAuth } from '@/context/AuthContext'; // No longer needed
// import { signOut } from '@/firebase/auth'; // No longer needed
import Button from '@/components/Button';

const DashboardPage = () => {
  // const { currentUser } = useAuth(); // No longer needed
  // const navigate = useNavigate(); // No longer needed

  // The primary logout button is in the Navbar, so local handler is not needed.

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
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
