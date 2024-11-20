import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
   <SignUp 
   routing="hash"
    />
    </div>

  );
};

export default SignUpPage;
