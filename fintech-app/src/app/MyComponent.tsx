// src/app/MyComponent.tsx
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

const MyComponent = () => (
  <>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </>
);

export default MyComponent;
