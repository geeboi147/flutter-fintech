"use client";

import { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { isSignedIn } = useAuth();
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      router.push('/sign-in'); // Redirects to sign-in if not signed in
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>; // Centered loading state
  }

  if (!isSignedIn) {
    return null; // Optionally render nothing while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to your Dashboard, {user?.firstName} {user?.lastName}!
      </h1>
      <p className="text-lg text-gray-700">Your User ID is: {user?.id}</p>
    </div>
  );
};

export default Dashboard;
