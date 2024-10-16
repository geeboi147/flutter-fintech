import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <SignIn
      routing="hash" // You can keep this as "hash" if that's your preferred routing method
      signUpUrl="/sign-up" // Link to sign up page
      fallbackRedirectUrl="/dashboard" // Redirect to the dashboard after signing in
    />
  );
};

export default SignInPage;
