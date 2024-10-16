import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

const Dashboard = () => {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // Redirect to sign-in if the user is not signed in
      window.location.href = '/sign-in';
    }
  }, [isSignedIn, isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
