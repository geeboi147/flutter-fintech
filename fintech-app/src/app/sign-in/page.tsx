import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <SignIn
      routing="hash"
      forceRedirectUrl="/dashboard" // Correct the path to redirect to the dashboard
    />
  </div>
  
  );
};

export default SignInPage;
