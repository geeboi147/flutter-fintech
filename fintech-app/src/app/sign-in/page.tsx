import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <SignIn
      routing="hash"
      forceRedirectUrl="..src/app/dashboard" // Redirects to the dashboard after successful sign-in
    />
  );
};

export default SignInPage;
