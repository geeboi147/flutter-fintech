"use client"; // Ensures this component runs on the client-side

import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { isSignedIn } = useAuth();
  const { isLoaded, user } = useUser();
  const [accountBalance, setAccountBalance] = useState(0); // State to store the balance
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in"); // Redirects to sign-in if not signed in
    }

    // Simulate fetching account balance from an API
    if (isSignedIn) {
      setAccountBalance(2500.75); // Mock balance (replace with actual API call)
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show loading state until user info is fetched
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-gray-800">FintechApp</h1>
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Welcome, {user?.firstName} {user?.lastName}!
        </h2>
        <p className="text-gray-600 mt-2">Your User ID is: {user?.id}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Account Balance</h3>
          <p className="text-3xl font-bold text-blue-500 mt-2">${accountBalance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
